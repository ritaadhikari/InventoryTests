const { Given, When, Then } = require("@cucumber/cucumber");
const { expect } = require("@playwright/test");

const { LoginPage } = require("../pageObject/LoginPage.js");
const { HomePage } = require("../pageObject/HomePage.js");
const { InventoryPage } = require("../pageObject/InventoryPage.js");

const loginPage = new LoginPage();
const homePage = new HomePage();
const inventoryPage = new InventoryPage();
Given("User has navigated to login page", async function () {
  console.log("User has navigated to the login dashboard");

  await loginPage.navigateToLoginPage();
});

Given(
  "User enters email {string} and password {string}",
  async function (email, password) {
    await loginPage.login(email, password);
  }
);

Given("the user has navigated to the home page", async function () {
  const homepageLocator = page.locator(homePage.profileSelector);
  await expect(homepageLocator).toBeVisible();
});

Given("the user has clicked the Inventory button", async function () {
  const inventoryLocator = page.locator(homePage.inventorySelector);
  await expect(inventoryLocator).toBeVisible();
  await homePage.clickInventoryButton();
});

Given(
  "the user navigated to Inventory page",
  { timeout: 2 * 5000 },
  async function () {
    await new Promise((resolve) => setTimeout(resolve, 5000));
    await inventoryPage.navigateToInventoryPage();
    const inventoryaddLocator = page.locator(
      inventoryPage.inventoryaddSelector
    );
    await expect(inventoryaddLocator).toBeVisible();
  }
);

When("the user adds create new inventory", async function () {
  const inventoryLocator = page.locator(inventoryPage.inventoryaddSelector);
  await expect(inventoryLocator).toBeVisible();
  await inventoryPage.clickInventoryAddButton();
});

Then("the inventory form toast should appear", async function () {
  const inventorytoastLocator = page.locator(inventoryPage.addpopSelector);
  await expect(inventorytoastLocator).toBeVisible();
});

When(
  "the user clicks create new inventory and enters item name as {string}> ,item price as {string}  and select {string} from {string} and clicks add item button",
  { timeout: 2 * 5000 },
  async function (name, price, measuringunit, dropdown) {
    await new Promise((resolve) => setTimeout(resolve, 5000));
    const inventoryLocator = page.locator(
      inventoryPage.createinventorySelector
    );
    await expect(inventoryLocator).toBeVisible();
    await inventoryPage.clickInventoryAddButton();
    await page.pause();

    const addpageLocator = page.locator(inventoryPage.addpageSelector);
    await expect(addpageLocator).toBeVisible();

    await inventoryPage.fillAddInventorytFields(
      name,
      price,
      measuringunit,
      dropdown
    );
    await page.pause();
  }
);

Then(
  "the item with as {string}> ,item price as {string}  and measuring unit as {string} should appear",
  function (string, string2, string3) {
    // Write code here that turns the phrase above into concrete actions
    return "pending";
  }
);
