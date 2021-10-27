const allure = require('@wdio/allure-reporter');

module.exports = {
    afterTest: async function (test, context, result) {
        if (test.failed || result.error) {
            await browser.takeScreenshot(); //there is need
            allure.addAttachment('URL', await browser.getUrl(), 'text/plain')
        }
    }
}