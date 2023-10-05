class HomePage {
  constructor() {
    this.profileSelector = '//li[@id="Profile"]';
    this.inventorySelector = "//li[@id ='Inventory']";
    this.inventroypageSelector = "//h4[@class='p-0 m-0']";
    this.ProfileLocator = "//div[1]//ul[2]//li[2]//a[1]//div[3]//img[1]";
    this.manageresLocator =
      "//a[@class='text-decoration-underline text-primary text-center fw-bold']";
    this.menuLocator = "//span[normalize-space()='Menu']";
    this.dineLocator = "//span[normalize-space()='Dine In Menu']";
    this.costumerLocator = "//span[normalize-space()='Customer']";
  }
  async;
  async clickInventoryButton() {
    await page.click(this.inventorySelector);
  }

  async clickProfileIcon() {
    await page.click(this.ProfileLocator);
  }

  async clickMenuButton() {
    await page.click(this.menuLocator);
  }
  async clickDineInMenuButton() {
    await page.click(this.dineLocator);
  }
  async clickCostumerButton() {
    await page.click(this.costumerLocator);
  }
}
module.exports = { HomePage };
