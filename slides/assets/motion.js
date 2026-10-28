/*
 * Playback lifecycle adapted from codebytes/marp-demo's Motion Lab.
 * Copyright (c) 2023 Chris Ayers. MIT license: LICENSE.marp-demo.
 */
(() => {
  "use strict";

  function initialize() {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)");
    const print = window.matchMedia("print");
    const supported = typeof document.documentElement.animate === "function";
    if (!supported) console.warn("Slide motion is unavailable; showing complete static diagrams.");
    const players = [...document.querySelectorAll("[data-waf-motion]")].map((root) => {
      const slide = root.closest("svg[data-marpit-svg]");
      const status = root.querySelector("[data-motion-status]");
      let animations = [];
      let generation = 0;
      let state = "idle";
      let enabled = false;
      let active = false;
      let selected = false;
      let previousAudience = false;
      let pendingStart = false;

      function render() {
        root.dataset.motionState = state;
        status.hidden = !enabled || state !== "error";
        status.textContent = "Playback failed; static view retained";
      }

      function reset() {
        generation += 1;
        for (const animation of animations) animation.cancel();
        animations = [];
        state = "idle";
        render();
      }

      function pause() {
        if (state !== "running") return;
        for (const animation of animations) {
          if (animation.playState === "finished") continue;
          const time = animation.currentTime ?? 0;
          animation.pause();
          // A hidden Marp SVG can defer the next paint that would settle a pending pause.
          animation.currentTime = time;
        }
        state = "paused";
        render();
      }

      function fail(error) {
        reset();
        state = "error";
        console.error("Slide motion failed:", error);
        render();
      }

      function play(restart = false) {
        if (!enabled || !active || state === "error") return;
        if (state === "paused" && !restart) {
          for (const animation of animations) {
            if (animation.playState !== "finished") animation.play();
          }
          state = "running";
          render();
          return;
        }
        reset();
        const run = generation;
        try {
          for (const element of root.querySelectorAll("[data-motion-ink]")) {
            const order = Number(element.dataset.motionOrder || 0);
            const frames = element.dataset.motionInk === "draw"
              ? [{ strokeDashoffset: 1 }, { strokeDashoffset: 0 }]
              : [{ opacity: 0.2 }, { opacity: 1 }];
            const animation = element.animate(frames, {
              duration: 1400,
              delay: order * 500,
              easing: "ease-out",
              fill: "both",
              iterations: 1,
            });
            animations.push(animation);
            animation.finished.then(() => {
              if (run !== generation || animations.some((clock) => clock.playState !== "finished")) return;
              state = "complete";
              render();
            }, (error) => {
              if (run === generation) fail(error);
            });
          }
        } catch (error) {
          fail(error);
          return;
        }
        state = "running";
        render();
      }

      return {
        slide,
        update(audience) {
          const nextSelected = slide.classList.contains("bespoke-marp-active");
          const entered = nextSelected && (!selected || (audience && !previousAudience));
          selected = nextSelected;
          previousAudience = audience;
          enabled = audience && !reduced.matches && !print.matches;
          active = enabled && selected && !document.hidden;

          if (!enabled || !selected) {
            pendingStart = false;
            if (state !== "idle") reset();
          } else {
            if (entered) pendingStart = true;
            if (!active) pause();
            else if (pendingStart) {
              pendingStart = false;
              play(true);
            } else if (state === "paused") play();
          }
          render();
        },
      };
    });

    function update() {
      const audience = supported && document.body.getAttribute("data-bespoke-view") === "";
      for (const player of players) player.update(audience);
    }

    const observer = new MutationObserver(update);
    for (const { slide } of players) {
      observer.observe(slide, { attributes: true, attributeFilter: ["class"] });
    }
    observer.observe(document.body, { attributes: true, attributeFilter: ["data-bespoke-view"] });
    document.addEventListener("visibilitychange", update);
    reduced.addEventListener("change", update);
    print.addEventListener("change", update);
    update();
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initialize, { once: true });
  } else {
    initialize();
  }
})();
