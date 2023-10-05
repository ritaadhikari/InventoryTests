const { Given, When, Then } = require("@cucumber/cucumber");
const { expect } = require("@playwright/test");

const { LoginPage } = require("../pageObject/LoginPage.js");
const { HomePage } = require("../pageObject/HomePage.js");
const { InventoryPage } = require("../pageObject/InventoryPage.js");
const { MenuPage } = require("../pageObject/MenuPage.js");

const loginPage = new LoginPage();
const homePage = new HomePage();
const menuPage = new MenuPage();

Given("the user has clicked the  menu button", async function () {
  // Write code here that turns the phrase above into concrete actions
  await homePage.clickMenuButton();
});

Given("the user has clicked the  dine in menu button", async function () {
  // Write code here that turns the phrase above into concrete actions
  await homePage.clickDineInMenuButton();
});

When(
  "the user clicks add menu button and enters name and select image from the photo library and selects department from the dropdown  and clicks on save menu button",
  { timeout: 2 * 5000 },
  async function (dataTable) {
    const menuData = dataTable.rows().map((row) => row[0]);

    for (const name of menuData) {
      await menuPage.clickAddMenuButton();
      await menuPage.enterMenuName(name);
      await menuPage.clickImage();
      await menuPage.clickactualImage();
      await menuPage.selectImageFromPhotoLibrary();
      await menuPage.selectDepartment("food"); // Replace with the actual department value
      await menuPage.clickSaveMenuButton();
    }
    await page.pause();
  }
);

Then("the sucess message {string} should be thrown", async function (string) {
  await menuPage.verifySuccessMessage(message);
});
