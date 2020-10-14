module.exports = {
    launch: {
        headless: true,
        devtools: false,
        // dumpio pipes browser stdout and stderr to process stdout and stderr
        // dumpio: true,
        // slows puppeteer in milliseconds so you can see what is going on
        slowMo: 50,
        ignoreHTTPSErrors: true,
        server: {
            port: 8080
        }
    },
    browser: 'chromium',
    browserContext: 'default'
};
