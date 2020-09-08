const HomePath = 'https://t1.qa.tradesy.com/'
  
module.exports = {
  before: browser => {
    // using start command to launch the browser
    browser.start(browser)
},

after: browser => {
  // using endTest command to close the browser
    browser.endTest(browser)
},

  'Verify home page URL': browser => {
    browser.assert.urlEquals(HomePath)
    browser.page.header().waitForElementVisible('@tradesyLogo')
  },

  'Navigate to Shopping cart page': browser => {
    browser.page.header()
      .waitForElementVisible('@shoppingBagIcon')
      .click('@shoppingBagIcon')
  },

  'Verify shopping cart page URL': browser => {
    browser.assert.urlEquals(`${HomePath}cart`)
    browser.page.shoppingCart().waitForElementVisible('@shoppingCartH1')
  },

  'Click Shop Now Button': browser => {
    browser.page.shoppingCart()
      .waitForElementVisible('@shopNowButton')
      .click('@shopNowButton')
  },

  'Add a item from new arrivals page and navigate to Shopping cart page': browser => {
    browser.page.newArrivals()
        .waitForElementVisible('@newArrivalsHeader')
        .click('@firstItem')
    browser.page.pdp()
        .waitForElementVisible('@addToBagButton')
        .click('@addToBagButton')
    browser.page.shoppingCart()
        .waitForElementVisible('@shoppingCartH3')
  },

  'validate shopping cart page': browser => {
    browser.page.header().waitForElementVisible('@shoppingBagCount')
    browser.page.header().expect.element('@shoppingBagCount').text.to.equals('1')
  },

}