# rulebook

Rules for the Singapore AUV Challenge

## Development

1. Download [wkhtmltopdf](https://github.com/wkhtmltopdf/wkhtmltopdf/releases/tag/0.12.6) version `0.12.6` (with patched Qt)
1. Install [markdown-styles](https://github.com/mixu/markdown-styles) using `npm install`
1. Generate HTML and PDF

    ```sh
    make
    ```
1. This generates the output index.html and rulebook.pdf in the `/dists` directory.

## Versioning

The `version` in `rulebook.md` follows `YYYY.MAJOR.PATCH`.

- `YYYY` is the competition year, e.g. `2027`.
- `MAJOR` goes up when the rules change. It starts at `1` each year.
- `PATCH` goes up for fixes that don't change the rules, such as typos and wording. It resets to `1` when `MAJOR` goes up.

## Publishing

The [deploy](.github/workflows/deploy.yml) action will automatically deploy any changes to the `master` branch
