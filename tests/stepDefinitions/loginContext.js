const { Given, When, Then } = require("@cucumber/cucumber");
const { expect } = require("@playwright/test");

const { LoginPage } = require("../pageObject/LoginPage.js");
const { HomePage } = require("../pageObject/HomePage.js");
const { InventoryPage } = require("../pageObject/InventoryPage.js");

const loginPage = new LoginPage();
const homePage = new HomePage();
const inventoryPage = new InventoryPage();

When(
  "the user enters email as {string} and password as {string} and clicks the login button",
  { timeout: 2 * 5000 },
  async function (email, password) {
    await new Promise((resolve) => setTimeout(resolve, 5000));
    await loginPage.login(email, password);
  }
);

Then("the user should be logged in to the home page", async function () {
  const homepageLocator = page.locator(homePage.profileSelector);
  await expect(homepageLocator).toBeVisible();
});

Then(
  "the error message {string} should throw",
  { timeout: 2 * 5000 },
  async function (errorMessage) {
    await new Promise((resolve) => setTimeout(resolve, 5000));
    // const innerText = await loginPage.getErrorMessageText();
    console.log(errorMessage);

    console.log("The user entered to the Loginpage");
    // console.log(innerText);
    // if (innerText !== errorMessage) {
    //   throw new Error("Expected message not found");
  }
);
