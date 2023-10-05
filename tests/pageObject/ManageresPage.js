class ManageresPage {
  constructor() {
    this.createbuttonLocator =
      "//button[@class='py-1 w-100 text-16 text-primary outline-none border-0 cursor-pointer']";
    this.createnameLocator = "//div[@class='row']//input[@id='basicInput']";
    this.creatAddressLocator =
      "//div[@class='mt-1 row']//input[@id='basicInput']";
  }
  async clickInventoryButton() {}
}
module.exports = { ManageresPage };
