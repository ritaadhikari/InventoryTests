const { Given, When, Then } = require("@cucumber/cucumber");
const { expect } = require("@playwright/test");

const { LoginPage } = require("../pageObject/LoginPage.js");
const { HomePage } = require("../pageObject/HomePage.js");
const { InventoryPage } = require("../pageObject/InventoryPage.js");
const { IndetailsPage } = require("../pageObject/IndetailsPage.js");

const loginPage = new LoginPage();
const homePage = new HomePage();
const inventoryPage = new InventoryPage();
const detailPage = new IndetailsPage();

When(
  "the user clicks the ellipsis button of the inventory name as {string} and clicks the delete button and clicks the delete inventory button",
  async function (string) {
    await inventoryPage.clickthreedotButton();
  }
);

Then(
  "the inventory with the inventory name {string} should not be there in the list",
  async function (string) {
    const sucessmessageLocator = page.locator(inventoryPage.deletemessage);
    await expect(sucessmessageLocator).toBeVisible();
  }
);
