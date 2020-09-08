# tradesy assessment

How to run e2e test:

- git clone https://github.com/ajubair84/tradesy.git
- npm install
- npm install nightwatch -g or --save-dev
- nightwatch <test/path.js> (e.g nightwatch tests/e2e_tests/addItemToCart.js)

Nightwatch documentation https://nightwatchjs.org/gettingstarted/installation/

If I had more time:

	- Create reusble functions (not too use cases found with the two tests)
	- Use tags to run tests based on (Smoke, regression, browsers, environment)
	- Create scripts to run all tests


Test Cases: https://docs.google.com/spreadsheets/d/1SQzIs7lXIxjQQTVCrcLXqA5awEgwXOk94516azUwV60/edit#gid=0

If I had more time:

  	- Perform negative testing
	- Test Recently viewed section
	- Add 15 - 20 items to see if the cart page behaves differently
	- Remove items from product detail page (PDP) after adding to the cart and verify its also removed from shopping cart
	- Check out functionality
	- Price for multiple items adding correctly and removing updates the price
	- Footer items
