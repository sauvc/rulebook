.PHONY: clean

index.html: rulebook.md
	generate-md --layout github --input rulebook.md --output .
	mv rulebook.html index.html

clean:
	rm -rf index.html
