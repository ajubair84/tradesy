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
    browser.page.header()
      .waitForElementVisible('@tradesyLogo')
  },

  'Navigate to Shopping cart page': browser => {
    browser.page.header()
      .waitForElementVisible('@shoppingBagIcon')
      .click('@shoppingBagIcon')
  },

  'Verify shopping cart page URL': browser => {
    browser.assert.urlEquals(`${HomePath}cart`)
    browser.page.shoppingCart()
      .waitForElementVisible('@shoppingCartH1')
  },

  'Validate search input box': browser => {
    browser.page.header()
      .waitForElementVisible('@searchInput')
      .assert.attributeContains('@searchInput', 'placeholder', "Search 'Louis Vuitton Totes'")
      .click('@searchInput')
      .waitForElementVisible('@searchSuggestionList')
  },

  'Perform a search': browser => {
    browser.page.header()
      .setValue('@searchInput', 'Louis Vuitton Totes')
      .click('@searchButton')
  },

  'validate search results page': browser => {
    browser.page.header()
      .waitForElementVisible('@categoryHeader')
      .expect.element('@categoryHeader').text.to.contain('Louis Vuitton Totes')
  },

}