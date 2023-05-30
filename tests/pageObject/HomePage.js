class HomePage {
  constructor() {
    this.profileSelector = '//li[@id="Profile"]';
    this.inventorySelector = "//li[@id ='Inventory']";
    this.inventroypageSelector ="//h4[@class='p-0 m-0']"
  }
  async clickInventoryButton(){
    await page.click(this.inventorySelector);
  }
}
module.exports = { HomePage };
