const { Given, When, Then } = require("@cucumber/cucumber");
const { expect } = require("@playwright/test");

const { HomePage } = require("../pageObject/HomePage.js");
const { CostumerPage } = require("../pageObject/CostumerPage.js");

const homePage = new HomePage();
const costumerPage = new CostumerPage();

When(
  "the user clicks the threedot side button of the costumer then clicks the delete option and click the confirm delete button",
  async function () {
    await costumerPage.deleteCustomer();
  }
);

Then("the costumer should be deleted from the list", async function () {});
