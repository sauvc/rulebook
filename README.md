# rulebook

[![Build Status](https://travis-ci.org/sauvc/rulebook.svg?branch=master)](https://travis-ci.org/sauvc/rulebook)

Rules for the Singapore AUV Challenge

## Development

1. Download [wkhtmltopdf](https://github.com/wkhtmltopdf/wkhtmltopdf/releases/tag/0.12.6) version `0.12.6` (with patched Qt)
1. Install [markdown-styles](https://github.com/mixu/markdown-styles) using `npm install`
1. Generate HTML and PDF

    ```sh
    make index.html rulebook.pdf
    ```