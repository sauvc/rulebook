.PHONY: all clean
.DELETE_ON_ERROR:

all: dist/index.html dist/rulebook.pdf

# Web page, with its images alongside
dist/index.html: rulebook.md template/page.html scripts/postprocess.mjs $(wildcard img/*)
	pnpm run build:html
	mv dist/rulebook.html dist/index.html
	rm -rf dist/img
	cp -r img dist/
	node scripts/postprocess.mjs dist/index.html

# PDF, rendered from the web page by headless Chrome
dist/rulebook.pdf: dist/index.html scripts/pdf.mjs
	pnpm run build:pdf

clean:
	rm -rf dist rulebook.html
