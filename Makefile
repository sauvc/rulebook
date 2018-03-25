.PHONY: clean

index.html rulebook.pdf: rulebook.md template/page.html
	# create PDF file
	generate-md --layout github --input rulebook.md --output .
	wkhtmltopdf --no-print-media-type rulebook.html rulebook.pdf

	# create web page
	generate-md --layout template --input rulebook.md --output .
	mv rulebook.html index.html

clean:
	rm -rf rulebook.pdf
	rm -rf rulebook.html
	rm -rf index.html
