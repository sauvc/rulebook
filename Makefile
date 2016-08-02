.PHONY: clean

index.html rulebook.pdf: rulebook.md
	generate-md --layout github --input rulebook.md --output .
	mv rulebook.html index.html
	wkhtmltopdf --no-print-media-type index.html rulebook.pdf

clean:
	rm -rf rulebook.pdf
	rm -rf index.html
