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


## Publishing

The [deploy](.github/workflows/deploy.yml) action will automatically deploy any changes to the `master` branch
