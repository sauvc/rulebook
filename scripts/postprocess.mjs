// Finish the page built by generate-md:
// - number the ## and ### headings, the matching contents entries, and the figures
// - give each image its size, lazy loading and a link to the full-size file
// Usage: node scripts/postprocess.mjs <page.html>

import { readFileSync, writeFileSync } from 'node:fs'
import { dirname, join } from 'node:path'

const page = process.argv[2]
if (!page) {
  console.error('Usage: node scripts/postprocess.mjs <page.html>')
  process.exit(2)
}
let html = readFileSync(page, 'utf8')

// Number h2 and h3 headings as 1, 1.1, 1.2, 2, ... and mark h4 headings with §.
// The contents heading is not numbered.
const numbers = new Map()
let h2 = 0, h3 = 0
html = html.replace(/<h([234]) id="([^"]+)"><a class="header-link" href="#\2"><\/a>/g, (tag, level, id) => {
  if (id === 'contents') return tag
  let label = '§'
  if (level === '2') label = `${++h2}`, h3 = 0
  if (level === '3') label = `${h2}.${++h3}`
  if (level !== '4') numbers.set(id, label)
  return `<h${level} id="${id}"><a class="header-link" href="#${id}">${label}</a> `
})

// Number the contents entries from the headings they link to, and check they list every numbered heading in order
const [toc] = html.match(/<nav class="toc"[\s\S]*?<\/nav>/) ?? []
if (!toc) throw new Error('No <nav class="toc"> found')
const listed = [...toc.matchAll(/<a href="#([^"]+)">/g)].map(m => m[1])
const expected = [...numbers.keys()]
const missing = expected.filter(id => !listed.includes(id)), extra = listed.filter(id => !numbers.has(id))
if (missing.length || extra.length || listed.join() !== expected.join()) {
  console.error('The contents list in rulebook.md does not match the ## and ### headings.')
  if (missing.length) console.error(`  Missing: ${missing.join(', ')}`)
  if (extra.length) console.error(`  Not a ## or ### heading: ${extra.join(', ')}`)
  if (!missing.length && !extra.length) console.error('  The entries are out of order.')
  process.exit(1)
}
html = html.replace(toc, toc.replace(/<a href="#([^"]+)">/g, (_, id) => `<a href="#${id}"><span class="toc-num">${numbers.get(id)}</span> `))

// Number the figures, in the caption that follows each image
let figure = 0
html = html.replace(/(<p class="img-container">[\s\S]*?<\/p>)(\s*<p class="image-caption"[^>]*>)?/g,
  (_, image, caption = '') => image + (++figure, caption && `${caption}Figure ${figure}: `))

// Read width and height from a PNG or JPEG header
function size(file) {
  const b = readFileSync(file)
  if (b.readUInt32BE(0) === 0x89504e47) return [b.readUInt32BE(16), b.readUInt32BE(20)]
  for (let i = 2; i < b.length; i += 2 + b.readUInt16BE(i + 2)) {
    const m = b[i + 1]
    if (m >= 0xc0 && m <= 0xcf && ![0xc4, 0xc8, 0xcc].includes(m)) return [b.readUInt16BE(i + 7), b.readUInt16BE(i + 5)]
  }
  throw new Error(`Unknown image format: ${file}`)
}

html = html.replace(/<img src="([^"]+)"([^>]*)>/g, (_, src, rest) => {
  const [w, h] = size(join(dirname(page), src))
  return `<a class="figure-link" href="${src}"><img src="${src}"${rest} width="${w}" height="${h}" loading="lazy" decoding="async"></a>`
})

writeFileSync(page, html)
