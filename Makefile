.PHONY: clean

index.html rulebook.pdf: rulebook.md template/page.html
	# create PDF file
	generate-md --layout template --input rulebook.md --output .
	wkhtmltopdf --enable-local-file-access --disable-smart-shrinking --no-print-media-type --dpi 300 rulebook.html rulebook.pdf

	# create web page
	mv rulebook.html index.html

clean:
	rm -rf rulebook.pdf
	rm -rf rulebook.html
	rm -rf index.html
