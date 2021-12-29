import { browser } from "protractor";
import { SearchPageObject } from "../pages/searchPage";
const { Given } = require("cucumber");
const chai = require("chai").use(require("chai-as-promised"));
const expect = chai.expect;

const search: SearchPageObject = new SearchPageObject();

Given(/^User is in MyStore main page$/, async (text) => {

    await search.MainPageSearchBox.sendKeys("blouse");
    await search.MainPageSearchButton.click();
});

When(/^User search a product from the input box and clicks on search button$/, async (text) => {

    await search.selectFirstImage.click();
    await browser.switchTo().frame(0);


});

And(/^user selects a size and a color, add it to the chard$/, async (text) => {
    await search.SelectQuantity.click();
    await search.selectSize.click();
    await search.selectColor.click();
    await search.addToCart.click();
});

Then(/^User should be able to see item is visible in the car$/, async (text) => {

    // await Assert.assertEquals("Product successfully added to your shopping cart",mainPageLocator.addtocart.getText());
    expect(browser.getTitle()).toEqual('http://automationpractice.com/index.php');

});
