.PHONY: clean

index.html rulebook.pdf: rulebook.md template/page.html
	# create PDF file
	# if bonus.md exists, append it to rulebook.md
	[ -f bonus.md ] && cat rulebook.md bonus.md > rulebook.tmp.md || cp rulebook.md rulebook.tmp.md
	generate-md --layout template --input rulebook.tmp.md --output .
	wkhtmltopdf --enable-local-file-access --disable-smart-shrinking --no-print-media-type --dpi 300 rulebook.tmp.html rulebook.pdf

	# create web page
	mv rulebook.tmp.html index.html
	rm -f rulebook.tmp.md

clean:
	rm -rf rulebook.pdf
	rm -rf rulebook.html
	rm -rf index.html
