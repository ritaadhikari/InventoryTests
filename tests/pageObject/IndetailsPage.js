class IndetailsPage {
  constructor() {
    // this.editbutton =
    //   "//button[@class='waves-effect inventory-back-btn edit-icon btn btn-outline-secondary']";
    this.namefield = "//input[@placeholder=' Item Name']";
    this.updatebutton = "//button[@type='submit']";
    this.editbutton =
      "//button[@class='waves-effect inventory-back-btn edit-icon btn btn-outline-secondary']//*[name()='svg']";

    this.sucessmessageLocator = "//div[@class='toastify-header']";
    this.pricefieldSelector = "//input[@placeholder='Enter Item Price Name']";
    this.measuringFieldSElector =
      "//div[@class='select__value-container select__value-container--has-value css-hlgwow']";
  }
  async getText() {
    const messageLocator = page.locator(this.namefield);
    const [innerText] = await messageLocator.allInnerTexts();
    return innerText;
  }
  async updatename(newname) {
    await page.fill(this.namefield, newname);
  }
  async updateprice(price) {
    await page.fill(this.pricefieldSelector, price);
  }
  async updatemeasuringunit(measuringunit) {
    await page.fill(this.measuringFieldSElector, measuringunit);
  }
  async clickupdateButton() {
    await page.click(this.updatebutton);
  }
  
  async clickeditButton() {
    await page.click(this.editbutton);
  }
  async getText() {
    const sucessmessageLocator = page.locator(this.sucessmessageSelector);
    const [innerText] = await sucessmessageLocator.allInnerTexts();
    return innerText;
  }
}
module.exports = { IndetailsPage };
