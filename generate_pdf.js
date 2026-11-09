import puppeteer from 'puppeteer'
import path from 'node:path'

const pagesToCapture = [
  { name: '01_Ana_Sayfa', url: 'http://localhost:8443/' },
  { name: '02_Faaliyet_Alanlari', url: 'http://localhost:8443/faaliyet-alanlari' },
  { name: '03_Promosyon_Urunleri', url: 'http://localhost:8443/promosyon' },
  { name: '04_Ajanda_Defter_Kalem', url: 'http://localhost:8443/promosyon/ajanda-defter-kalem' },
  { name: '05_Projelerimiz', url: 'http://localhost:8443/projeler' },
  { name: '06_Proje_Maslak_Tower', url: 'http://localhost:8443/projeler/proje-1' },
  { name: '07_Proje_Zorlu_LED', url: 'http://localhost:8443/projeler/proje-5' },
  { name: '08_Hakkimizda', url: 'http://localhost:8443/hakkimizda' },
  { name: '09_Iletisim', url: 'http://localhost:8443/iletisim' },
]

async function generatePDF() {
  console.log('Puppeteer başlatılıyor...')
  const browser = await puppeteer.launch({
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox'],
  })

  const page = await browser.newPage()
  await page.setViewport({ width: 1440, height: 900, deviceScaleFactor: 1.5 })

  const outputPdfPath = 'C:\\Users\\semih\\Desktop\\Mutekavvim_Website_Sunum.pdf'
  const tempPdfs = []

  const { PDFDocument } = await import('pdf-lib')
  const mergedPdf = await PDFDocument.create()

  for (const item of pagesToCapture) {
    console.log(`Yükleniyor: ${item.name} (${item.url})`)
    await page.goto(item.url, { waitUntil: 'networkidle0', timeout: 30000 })
    await page.evaluate(() => new Promise((resolve) => setTimeout(resolve, 1500)))

    const pdfBuffer = await page.pdf({
      format: 'A4',
      printBackground: true,
      margin: { top: '15mm', right: '15mm', bottom: '15mm', left: '15mm' },
    })

    const pdfDoc = await PDFDocument.load(pdfBuffer)
    const copiedPages = await mergedPdf.copyPages(pdfDoc, pdfDoc.getPageIndices())
    copiedPages.forEach((p) => mergedPdf.addPage(p))
  }

  const mergedPdfBytes = await mergedPdf.save()
  const fs = await import('node:fs/promises')
  await fs.writeFile(outputPdfPath, mergedPdfBytes)

  console.log(`PDF Başarıyla Oluşturuldu: ${outputPdfPath}`)
  await browser.close()
}

generatePDF().catch((err) => {
  console.error('PDF Oluşturma Hatası:', err)
  process.exit(1)
})
