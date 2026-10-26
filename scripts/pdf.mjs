// Render the rulebook HTML to PDF with the system Google Chrome.
// Usage: node scripts/pdf.mjs <input.html> <output.pdf>
// Set CHROME_PATH to use a Chrome binary other than the standard install.

import { chromium } from 'playwright-core'
import { pathToFileURL } from 'node:url'

const [input, output] = process.argv.slice(2)
if (!input || !output) {
  console.error('Usage: node scripts/pdf.mjs <input.html> <output.pdf>')
  process.exit(2)
}

const browser = await chromium.launch(
  process.env.CHROME_PATH ? { executablePath: process.env.CHROME_PATH } : { channel: 'chrome' }
)

try {
  const page = await browser.newPage()

  // Collect failed requests so a missing stylesheet, font or image fails the build
  const failures = []
  page.on('requestfailed', req => failures.push(`${req.url()} (${req.failure()?.errorText})`))
  page.on('response', res => { if (res.status() >= 400) failures.push(`${res.url()} (HTTP ${res.status()})`) })

  await page.goto(pathToFileURL(input).href, { waitUntil: 'networkidle' })
  await page.evaluate(() => document.fonts.ready)

  if (failures.length) {
    console.error(`Failed to load:\n  ${failures.join('\n  ')}`)
    process.exitCode = 1
  } else {
    // Screen media keeps the site colours; the site's print CSS turns everything black and white
    await page.emulateMedia({ media: 'screen' })
    await page.pdf({
      path: output,
      format: 'A4',
      printBackground: true,
      margin: { top: '10mm', right: '10mm', bottom: '15mm', left: '10mm' },
      displayHeaderFooter: true,
      headerTemplate: '<span></span>',
      footerTemplate: `
        <div style="width: 100%; font-family: Helvetica, Arial, sans-serif; font-size: 9px; color: #1C455D; text-align: center;">
          Page <span class="pageNumber"></span> of <span class="totalPages"></span>
        </div>`,
    })
    console.log(`Wrote ${output}`)
  }
} finally {
  await browser.close()
}
