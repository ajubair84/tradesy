exports.command = function (browser) {
    this
        .url('https://t1.qa.tradesy.com/')
        //bypassing Your connection is not private screen on Chrome
        .click('[id="details-button"]')
        .click('[id="proceed-link"]')
        .waitForElementVisible('[name="q"]')
}