const { expect } = require("@playwright/test");

class CostumerPage {
  constructor() {
    this.costumerLocator = "//span[@class='align-middle ms-25']";
    this.CostumerSelect =
      "//div[@class='rounded m-0 card-body']//div[@class='d-flex justify-content-between align-items-center cursor-pointer']";
    this.nameField = "//input[@placeholder='Customer Name']";
    this.phonenoFiled = "//input[@placeholder='Enter Phone Number']";
    this.submitButton = "//button[@type='submit']";
    this.createButton = "//span[@class='align-middle ms-25']";
    this.sucessToast = "//div[@class='toastify-body']";
    this.costumerAddedLocator =
      "//div[@id='row-0']//div[@id='cell-name-undefined']";
  }

  async costumerPageLocator() {
    const costumerSelector = page.locator(this.CostumerSelect);
    await expect(costumerSelector).toBeVisible();
    await page.pause();
  }

  async costumerCreate(name, number) {
    await page.click(this.createButton);
    await page.pause();
    await page.type(this.nameField, name);
    await page.type(this.phonenoFiled, number);
    await page.pause();
    await page.click(this.submitButton);
    console.log("navigation completed");
  }
  async costumerCreateSucess() {
    const sucessLocator = page.locator(this.sucessToast);
    await expect(sucessLocator).toBeVisible();
    const [innerText] = await sucessLocator.allInnerTexts();
    console.log(innerText);
    return innerText;
  }
  async costumerListAdded() {
    const customerLocator = page.locator(this.costumerAddedLocator);
    const customerNameInnerText = await customerLocator.allInnerTexts();
    return customerNameInnerText;
  }
}

module.exports = { CostumerPage };
