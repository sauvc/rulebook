# rulebook

[![Build Status](https://travis-ci.org/sauvc/rulebook.svg?branch=master)](https://travis-ci.org/sauvc/rulebook)

Rules for the Singapore AUV Challenge

## Development

1. Download [wkhtmltopdf](https://github.com/wkhtmltopdf/wkhtmltopdf/releases/tag/0.12.3) version `0.12.3` (note the [page size bug](https://github.com/wkhtmltopdf/wkhtmltopdf/issues/3795) in latest version `0.12.4`)
1. Install [markdown-styles](https://github.com/mixu/markdown-styles)
1. Generate HTML and PDF

    ```sh
    make index.html rulebook.pdf
    ```
