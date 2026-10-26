# rulebook

Rules for the Singapore AUV Challenge (SAUVC), published at [sauvc.org/rulebook](https://sauvc.org/rulebook/) as a web page and a [PDF](https://sauvc.org/rulebook/rulebook.pdf).

## Development

### Prerequisites

- [Node.js](https://nodejs.org/) 24 (see `.node-version`)
- [pnpm](https://pnpm.io/installation). The version is pinned in `package.json`, and pnpm switches to it automatically.
- [Google Chrome](https://www.google.com/chrome/), used headless to render the PDF. Set `CHROME_PATH` to use a different Chrome or Chromium binary.

### Build

```sh
pnpm install
make
```

This writes the web page and the PDF to `dist/`:

- `dist/index.html` and `dist/img/`
- `dist/rulebook.pdf`

`make clean` removes `dist/`.

### How it works

```mermaid
flowchart LR
    MD[rulebook.md] --> GM[generate-md] --> POST[scripts/postprocess.mjs] --> HTML[dist/index.html]
    T[template/page.html] --> GM
    HTML --> PDF[scripts/pdf.mjs] --> OUT[dist/rulebook.pdf]
```

1. [markdown-styles](https://github.com/mixu/markdown-styles) (`generate-md`) turns `rulebook.md` into HTML using the layout in `template/page.html`.
2. `scripts/postprocess.mjs` numbers the sections, the contents entries and the figures, and gives each image its width and height, lazy loading, and a link to the full-size file.
3. `scripts/pdf.mjs` opens that page in headless Chrome through [playwright-core](https://playwright.dev/) and prints it to an A4 PDF with page numbers.

The page uses the stylesheet and font from [sauvc.org](https://sauvc.org), so the build needs network access. The PDF build fails if any stylesheet, font or image fails to load.

The PDF is printed with the screen styles, because the print styles on sauvc.org remove all colours. Page-break rules in `template/page.html` keep figures, table rows and headings from splitting across pages.

## Editing

- The rules are in `rulebook.md`. The front matter at the top sets `title`, `version`, `last_updated_date` and `year`, which appear on the cover.
- Section numbers (such as 9.7) are added automatically to `##` and `###` headings. Don't type numbers into headings.
- The contents list at the top of `rulebook.md` is maintained by hand. It must list every `##` and `###` heading, in order; the build stops with an error naming the missing entry if it doesn't. Update it when you add, move or rename a section.
- Images go in `img/`. Keep photos under 2000 px wide. Describe what the image shows in its alt text (`![alt text](img/file.jpg)`), and put a `<p class="image-caption">Caption.</p>` on the next line to get a numbered figure caption.
- Figure numbers change when images are added, so don't refer to "Figure 5" in the text. Give the caption an id (`<p class="image-caption" id="fig-arena">`) and link to it: `[arena diagram](#fig-arena)`.
- Highlight points with `<span class="info">`, penalties with `<span class="penalty">`, the end of an attempt with `<span class="emphasis">`, aborts with `<span class="important">` and officials with `<span class="inverse">`. Prop colours use `<span class="indicate-red">` (also `-green`, `-blue`, `-yellow` and `-orange`). The key in the "Key terms" section lists these.
- In tables, left-align text columns (`:--`) and right-align number columns (`--:`).

## Versioning

The `version` in `rulebook.md` follows `YYYY.MAJOR.PATCH`.

- `YYYY` is the competition year, e.g. `2027`.
- `MAJOR` goes up when the rules change. It starts at `1` each year.
- `PATCH` goes up for fixes that don't change the rules, such as typos and wording. It resets to `1` when `MAJOR` goes up.

## Publishing

The [Build and Deploy](.github/workflows/deploy.yml) workflow builds the web page and PDF on every push and pull request.

- **Pull requests:** the output is attached to the workflow run as the `rulebook` artifact, so you can review the PDF before merging.
- **`master`:** the output is deployed to GitHub Pages.

Dependabot opens monthly pull requests to keep the GitHub Actions and npm dependencies up to date.
