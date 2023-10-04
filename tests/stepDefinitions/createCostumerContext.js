const { Given, When, Then } = require("@cucumber/cucumber");
const { expect } = require("@playwright/test");

const { HomePage } = require("../pageObject/HomePage.js");
const { CostumerPage } = require("../pageObject/CostumerPage.js");

const homePage = new HomePage();
const costumerPage = new CostumerPage();
const costumerSelect =
  "//div[@class='rounded m-0 card-body']//div[@class='d-flex justify-content-between align-items-center cursor-pointer']";

Given("the user clicks the costumer button", async function () {
  // Write code here that turns the phrase above into concrete actions
  await homePage.clickCostumerButton();
});

Given(
  "the user has navigated to the costumer page",
  { timeout: 2 * 50000 },
  async function () {
    // Write code here that turns the phrase above into concrete actions
    await new Promise((resolve) => setTimeout(resolve, 10000));
    const costumerSelector = page.locator(costumerSelect);
    await expect(costumerSelector).toBeVisible();
  }
);

When(
  "the user clicks the create costumer button and enters costumer name as {string} and number as {string} and with due amount as {string} and  clicks the create costumer button",
  { timeout: 2 * 50000 },

  async function (name, number, string3) {
    await new Promise((resolve) => setTimeout(resolve, 10000));
    await costumerPage.costumerCreate(name, number);
    console.log("navigation completed");
  }
);

Then(
  "the sucess {string} should pop up and  the {string} should be added to the list",
  async function (errorMessage, name) {
    // Write code here that turns the phrase above into concrete actions
    const message = await costumerPage.costumerCreateSucess();
    console.log("string", message);
    console.log("string", errorMessage);

    if (errorMessage == message) {
      console.log("Test Passed");
    }
    const nameAdded = await costumerPage.costumerListAdded();
    if (nameAdded == name) {
      console.log("Test Passed");
    }

    // console.log(costumerPage.costumerCreateSucess());
  }
);
