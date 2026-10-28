import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import test from "node:test";
import vm from "node:vm";

const source = readFileSync(new URL("../slides/assets/motion.js", import.meta.url), "utf8");
const flush = () => new Promise((resolve) => setImmediate(resolve));

function harness({
  supported = true, view = "", failAt = -1, initiallyActive = true,
  hidden = false, reduced = false, printing = false,
} = {}) {
  const media = new Map();
  const observers = [];
  const errors = [];
  const warnings = [];
  const created = [];
  const status = { hidden: true, textContent: "" };
  let active = initiallyActive;
  const slide = { classList: { contains: () => active } };
  const targets = ["draw", "draw", "emphasis"].map((kind, order) => ({
    dataset: { motionInk: kind, motionOrder: String(order) },
    animate(frames, options) {
      if (order === failAt) throw new Error("Could not create an animation");
      let resolve;
      let reject;
      const animation = {
        frames, options, playState: "running", currentTime: 0,
        finished: new Promise((yes, no) => { resolve = yes; reject = no; }),
        play() { this.playState = "running"; },
        pause() { this.playState = "paused"; },
        cancel() { this.playState = "idle"; reject(new DOMException("Cancelled", "AbortError")); },
        finish() { this.playState = "finished"; resolve(); },
        fail(error) { reject(error); },
      };
      created.push(animation);
      return animation;
    },
  }));
  const root = {
    dataset: {},
    closest: () => slide,
    querySelector(selector) {
      assert.equal(selector, "[data-motion-status]");
      return status;
    },
    querySelectorAll: () => targets,
  };
  const document = Object.assign(new EventTarget(), {
    readyState: "complete", hidden,
    documentElement: { animate: supported ? () => {} : undefined },
    body: { getAttribute: () => view },
    querySelectorAll: () => [root],
  });
  const matchMedia = (query) => {
    if (!media.has(query)) {
      media.set(query, Object.assign(new EventTarget(), { matches: query === "print" ? printing : reduced }));
    }
    return media.get(query);
  };
  vm.runInNewContext(source, {
    document,
    window: { matchMedia },
    MutationObserver: class {
      constructor(callback) { observers.push(callback); }
      observe() {}
    },
    console: {
      error: (...args) => errors.push(args),
      warn: (...args) => warnings.push(args),
    },
  });
  return {
    root, status, created, errors, warnings,
    setActive(value) { active = value; observers.forEach((update) => update()); },
    setView(value) { view = value; observers.forEach((update) => update()); },
    setHidden(value) { document.hidden = value; document.dispatchEvent(new Event("visibilitychange")); },
    setMedia(query, value) {
      const preference = matchMedia(query);
      preference.matches = value;
      preference.dispatchEvent(new Event("change"));
    },
  };
}

test("entering an audience slide starts one finite sequence", async () => {
  const h = harness({ initiallyActive: false });
  assert.equal(h.created.length, 0);
  assert.equal(h.root.dataset.motionState, "idle");
  h.setActive(true);
  assert.equal(h.root.dataset.motionState, "running");
  assert.deepEqual(h.created.map((a) => a.options.delay), [0, 500, 1000]);
  assert.ok(h.created.every((a) => a.options.iterations === 1));
  h.setActive(true);
  assert.equal(h.created.length, 3);
  h.created.forEach((a) => a.finish());
  await flush();
  assert.equal(h.root.dataset.motionState, "complete");
  h.setActive(true);
  assert.equal(h.created.length, 3);
  assert.equal(h.status.hidden, true);
});

test("a direct link and late audience initialization both autoplay", () => {
  const h = harness();
  assert.equal(h.created.length, 3);
  const late = harness({ view: null });
  assert.equal(late.created.length, 0);
  late.setView("");
  assert.equal(late.created.length, 3);
});

test("background arrivals wait for visibility; hiding pauses and resumes the same clocks", () => {
  const h = harness({ hidden: true });
  assert.equal(h.created.length, 0);
  h.setHidden(false);
  assert.equal(h.created.length, 3);
  h.created.forEach((a) => { a.currentTime = 200; });
  h.setHidden(true);
  assert.ok(h.created.every((a) => a.playState === "paused"));
  assert.ok(h.created.every((a) => a.currentTime === 200));
  h.setHidden(false);
  assert.equal(h.created.length, 3);
  assert.ok(h.created.every((a) => a.playState === "running"));
});

test("resuming a sequence does not restart its completed steps", async () => {
  const h = harness();
  h.created[0].finish();
  await flush();
  h.setHidden(true);
  assert.equal(h.created[0].playState, "finished");
  assert.equal(h.created[1].playState, "paused");
  h.setHidden(false);
  assert.equal(h.created[0].playState, "finished");
  assert.equal(h.created[1].playState, "running");
  h.created.slice(1).forEach((a) => a.finish());
  await flush();
  assert.equal(h.root.dataset.motionState, "complete");
});

test("leaving cancels immediately and revisiting starts a fresh sequence", async () => {
  const h = harness();
  const previous = h.created.slice();
  h.setActive(false);
  assert.equal(h.root.dataset.motionState, "idle");
  assert.ok(previous.every((a) => a.playState === "idle"));
  h.setActive(true);
  await flush();
  assert.equal(h.root.dataset.motionState, "running");
  assert.equal(h.created.length, 6);
  assert.equal(h.errors.length, 0);
  h.created.slice(3).forEach((a) => a.finish());
  await flush();
  assert.equal(h.root.dataset.motionState, "complete");
});

for (const query of ["(prefers-reduced-motion: reduce)", "print"]) {
  test(`${query} cancels playback and leaves a static view`, async () => {
    const h = harness();
    h.setMedia(query, true);
    await flush();
    assert.equal(h.status.hidden, true);
    assert.equal(h.root.dataset.motionState, "idle");
    assert.ok(h.created.every((a) => a.playState === "idle"));
    assert.equal(h.errors.length, 0);
    h.setMedia(query, false);
    assert.equal(h.root.dataset.motionState, "idle");
    assert.equal(h.created.length, 3);
    h.setActive(false);
    h.setActive(true);
    assert.equal(h.created.length, 6);
  });
}

test("initial reduced-motion and print views never autoplay", () => {
  for (const options of [{ reduced: true }, { printing: true }]) {
    const h = harness(options);
    assert.equal(h.created.length, 0);
    h.setActive(false);
    h.setActive(true);
    assert.equal(h.created.length, 0);
  }
});

test("presenter previews remain static", async () => {
  const h = harness({ view: "presenter" });
  assert.equal(h.status.hidden, true);
  assert.equal(h.created.length, 0);
  h.setView("");
  assert.equal(h.created.length, 3);
  h.setView("next");
  await flush();
  assert.equal(h.status.hidden, true);
  assert.equal(h.root.dataset.motionState, "idle");
});

test("unexpected playback failures are visible and logged", async () => {
  const h = harness();
  h.created[0].fail(new Error("Playback clock failed"));
  await flush();
  assert.equal(h.root.dataset.motionState, "error");
  assert.equal(h.status.hidden, false);
  assert.match(h.status.textContent, /Playback failed; static view retained/);
  assert.equal(h.errors.length, 1);
});

test("synchronous animation errors cancel partially created playback", async () => {
  const h = harness({ failAt: 1 });
  await flush();
  assert.equal(h.root.dataset.motionState, "error");
  assert.equal(h.created.length, 1);
  assert.equal(h.created[0].playState, "idle");
  assert.equal(h.errors.length, 1);
});

test("unsupported browsers keep static diagrams", () => {
  const h = harness({ supported: false });
  assert.equal(h.status.hidden, true);
  assert.equal(h.warnings.length, 1);
  assert.equal(h.created.length, 0);
});

test("native boards have complete markup and deployed local assets", () => {
  const deck = readFileSync(new URL("../slides/Slides.md", import.meta.url), "utf8");
  const workflow = readFileSync(new URL("../.github/workflows/marp-pages.yml", import.meta.url), "utf8");
  assert.equal((deck.match(/data-waf-motion=/g) || []).length, 4);
  assert.equal((deck.match(/class="motion-error"/g) || []).length, 4);
  assert.doesNotMatch(deck, /data-motion-(toggle|replay)/);
  assert.doesNotMatch(source, /addEventListener\("keydown"/);
  for (const name of ["recovery", "lenses", "checkout", "latency"]) {
    assert.ok(deck.includes(`id="${name}-title"`));
    assert.ok(deck.includes(`id="${name}-desc"`));
  }
  assert.match(deck, /<script src="assets\/motion.js" defer><\/script>/);
  assert.match(workflow, /cp -R slides\/assets build\/assets/);
  assert.match(workflow, /cp slides\/motion.css build\//);
});

test("native latency bars retain the declared synthetic data", () => {
  const deck = readFileSync(new URL("../slides/Slides.md", import.meta.url), "utf8");
  const spec = JSON.parse(readFileSync(new URL("../slides/img/diagrams/latency-tail.spec.json", import.meta.url), "utf8"));
  const chart = deck.match(/<svg[^>]*aria-labelledby="latency-title latency-desc">([\s\S]*?)<\/svg>/)[1];
  const bars = [...chart.matchAll(/<rect class="visual-(?:bar|warning)" x="\d+" y="(\d+)" width="\d+" height="(\d+)"/g)];
  assert.equal(bars.length, spec.data.samples.length);
  bars.forEach(([, y, height], index) => {
    assert.equal(Number(height), spec.data.samples[index].count * 3);
    assert.equal(Number(y) + Number(height), 240);
  });
  const samples = spec.data.samples.flatMap(({ milliseconds, count }) => Array(count).fill(milliseconds));
  assert.equal(samples.length, 100);
  assert.equal(samples[94], 300);
  assert.equal(samples[98], 600);
});
