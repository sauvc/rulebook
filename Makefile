.PHONY: clean

dist/index.html dist/rulebook.pdf: rulebook.md template/page.html
	# create PDF file
	mkdir -p dist
	npm run build
	wkhtmltopdf --enable-local-file-access --disable-smart-shrinking --no-print-media-type --dpi 300 rulebook.html dist/rulebook.pdf

	# create web page
	mv rulebook.html dist/index.html
	cp -r img dist/

clean:
	rm -rf dist/rulebook.pdf
	rm -rf dist/rulebook.html
	rm -rf dist/index.html
