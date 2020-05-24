const chromium = require("chrome-aws-lambda")
const HTML5ToPDF = require('html5-to-pdf')

/**
 * Cloud Function
 */
exports.generatePdf = async (req, res) => {
    /// Check body
    if(req.body === '') return res.status(400)

    /// Generate PDF
    const html5ToPDF = new HTML5ToPDF({
        inputBody: req.body,
        pdf: {
            printBackground: true,
            format: 'A4'
        },
        launchOptions: {
            args: chromium.args,
            defaultViewport: chromium.defaultViewport,
            executablePath: await chromium.executablePath,
            headless: chromium.headless
        },
    })
    await html5ToPDF.start().catch(err => console.error(err))
    const buffer = await html5ToPDF.build().then(file => file).catch(err => console.error(err))
    await html5ToPDF.close().catch(err => console.error(err))

    /// Check the pdf
    if (undefined === buffer) return res.status(400)

    /// send PDF
    res.setHeader('Content-Type', 'application/pdf')
    res.setHeader('Content-Length', buffer.length)
    res.end(buffer)
}