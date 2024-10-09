const puppeteer = require('puppeteer');

(async () => {
    try {
        const browser = await puppeteer.launch();
        console.log(await browser.version());
        await browser.close();
    } catch (error) {
        console.error('Error:', error);
    }
})();
