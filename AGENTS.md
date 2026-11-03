# Agent instructions: The Well-Architected Architect

This repository holds the slides and demos for Chris Ayers' talk **The Well-Architected Architect**. The deck is published to <https://chris-ayers.com/the-well-architected-architect/>.

## Repository layout

- `slides/`: Marp deck using the `architect` theme (`slides/themes/architect.css`), images in `slides/img/`, scripted assets in `slides/assets/`, motion styles in `slides/motion.css`.
- `tests/motion.test.mjs`: tests `slides/assets/motion.js`; the Pages workflow runs it before rendering.
- `.squad/`: Squad agent-team state. Leave it alone unless the task is about the Squad setup.

## Slides

- Write the deck in Markdown with [Marp](https://marp.app/). `slides/Slides.md` is the source; `build/` is generated output and is never edited or committed.
- Keep the frontmatter at the top of the deck:

  ```yaml
  ---
  marp: true
  theme: architect
  ---
  ```

- Store themes in `slides/themes/` and images and diagram sources in `slides/img/`. Prefer theme classes and CSS variables over inline styles.
- Write speaker notes as HTML comments (`<!-- -->`).
- Render locally with the Marp CLI version the Pages workflow uses (v4.5.1):

  ```bash
  npx @marp-team/marp-cli@4.5.1 --theme-set slides/themes --html -o build/index.html -- slides/Slides.md
  npx @marp-team/marp-cli@4.5.1 --theme-set slides/themes --html --pdf --allow-local-files -o build/Slides.pdf -- slides/Slides.md
  ```

- `.github/workflows/marp-pages.yml` builds the HTML deck and `Slides.pdf` and publishes both to GitHub Pages. If you add slide assets outside `slides/img/` and `slides/themes/`, add them to the workflow's copy step. It already copies `slides/assets/` and `slides/motion.css` (the Pages workflow copies both).

## Shared skills

Use the shared skills from [codebytes/skills](https://github.com/codebytes/skills) (for Copilot CLI: `copilot plugin install https://github.com/codebytes/skills`). Don't copy their instructions or scripts into this repo.

| Task                                                                          | Skill               |
| ----------------------------------------------------------------------------- | ------------------- |
| Write or revise slides, notes, order, or layouts                              | `marp-authoring`    |
| Charts, Mermaid diagrams, or other visuals                                    | `marp-visuals`      |
| Editable `.drawio.svg` diagrams (stored in `slides/img/`)                     | `drawio-diagrams`   |
| Check overflow, clipping, and HTML/PDF parity before presenting or publishing | `marp-slide-review` |

## Build and run

```bash
node --test tests/motion.test.mjs
```

## Talk-specific rules

- Keep motion in `slides/motion.css` and `slides/assets/motion.js`: finite effects, a reduced-motion fallback, and complete static slides in the PDF. Run the motion test after changing either.

## Readme

- Keep the readme sections in this order: Slides, Recordings, Resources, Contact.
- When a new recording of the talk is published, add it at the top of `## Recordings` as `- [Event Year](https://www.youtube.com/watch?v=VIDEO_ID)`. When the video's title differs from the talk's, add an em dash and the recorded title after the event. Keep the list newest first.
- The talk also appears on <https://chris-ayers.com/speaking/> (source: `content/speaking.md` in [codebytes/codebytes.github.io](https://github.com/codebytes/codebytes.github.io)); new events and recordings belong there too.

## General

- Keep changes scoped to the request; don't reformat unrelated slides or code.
- Never commit secrets, keys, or connection strings. Demo placeholders must be obviously fake.
