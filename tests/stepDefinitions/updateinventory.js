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
  "the user clicks the dish he want to update with name {string} and the inventory details page opens and clicks the edit button and enters the name of the Inventory as {string} and clicks the update item button",
  async function (name, newname) {
    // const innerText = await inventoryPage.getText();
    // console.log("The user clicked to the inventory");
    // if (innerText.trim() !== name) {
    //   throw new Error("Expected inventory not found");
    // }
    // await detailPage.clickupdateButton();
    // const innerText = await inventoryPage.getText();
    // console.log("The user clicked to the inventory");
    // if (innerText.trim() !== name) {
    //   throw new Error("Expected inventory not found");
    // }
    await page.click(inventoryPage.listitemSelector);
    await page.pause();
    await detailPage.clickeditButton();
    const innernameText = await detailPage.editbutton();
    var length = innernameText.length;
    await detailPage.updatename(newname);
    await detailPage.clickupdateButton();
  }
);

When(
  "the user clicks the dish he want to update and the inventory details page opens and clicks the edit button and clicks the update item button",
  async function () {
    await inventoryPage.navigateToInventoryPage();
    await detailPage.clickeditButton();
    await detailPage.clickupdateButton();
  }
);

Then("the inventory name will be updated to {string}", async function (string) {
  await detailPage.clickupdateButton();
});

When(
  "the user clicks the dish he want to update and the inventory details page opens and clicks the edit button and enters the price of the inventory as {string} and clicks the update item button",
  async function (price) {
    // await detailPage.clickupdateButton();
    await page.click(inventoryPage.listitemSelector);
    await page.pause();
    await detailPage.clickeditButton();

    const innernameText = await detailPage.editbutton();
    var length = innernameText.length;
    await detailPage.updateprice(price);
    await detailPage.clickupdateButton();
  }
);

When(
  "the user clicks the dish he want to update and the inventory details page opens and clicks the edit button and clicks the measuringUnit of the price as {string} and clicks the update item button",
  async function (measuringunit) {
    await page.click(inventoryPage.listitemSelector);
    await page.pause();
    await detailPage.clickeditButton();

    const innernameText = await detailPage.editbutton();
    var length = innernameText.length;
    await detailPage.updatmeasuringunit(measuringunit);
    await detailPage.clickupdateButton();
  }
);

Then("the sucess meassage {string} will be shown", async function (sucessmessage) {
  const sucessmessageLocator = page.locator(detailPage.sucessmessageLocator);
  await expect(sucessmessageLocator).toBeVisible();
  const innerText = await detailPage.getText();
    console.log("The user updated to the inventory");
    if (innerText.trim() !== sucessmessage) {
      throw new Error("Expected inventory not found");
    }
});
