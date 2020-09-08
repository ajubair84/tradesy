module.exports = {
    elements: {
        tradesyLogo: '[alt="Tradesy - Logo"]',
        shoppingBagIcon: '.icon--bag',
        shoppingBagCount: {
            selector: '//span[@class="lamp js-cart-count-lamp lamp--active"]',
            locateStrategy: 'xpath',
            },
        searchInput: '[name="q"]',
        searchSuggestionList: '.header-search__list',
        searchButton: '.header-search__submit',
        categoryHeader: '[id=category-header]',
    },
}

