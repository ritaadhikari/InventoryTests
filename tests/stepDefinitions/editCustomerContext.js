const { Given, When, Then } = require("@cucumber/cucumber");
const { expect } = require("@playwright/test");

const { HomePage } = require("../pageObject/HomePage.js");
const { CostumerPage } = require("../pageObject/CostumerPage.js");

// const homePage = new HomePage();
const costumerPage = new CostumerPage();
// const costumerSelect = "//div[@class='rounded m-0 card-body']//div[@class='d-flex justify-content-between align-items-center cursor-pointer']";
const successMessage = "//div[@class='toastify-header']";

When(
  "the user clicks the threedot side button of the costumer then clicks the edit option  then removes the text from the name and number filed and enters new {string} and {string} and clicks the update button",
  { timeout: 2 * 50 },

  async function (name, number) {
    await new Promise((resolve) => setTimeout(resolve, 100));
    await costumerPage.editCustomerInfo(name, number);
  }
);

Then(
  "the costumer with new name {string} should be seen in the list of the customer and the sucess message {string} should be thrown",

  async function (name, expectMessage) {
    const sucesslocator = page.locator(successMessage);
    await expect(sucesslocator).toBeVisible();
  }
);
