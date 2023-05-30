class InventoryPage {
  constructor() {
    this.createinventorySelector = "//*[text()='Create Inventory']";
    this.inventorypageSelector = "//h4[@class='p-0 m-0']";
    this.inventoryaddSelector = "//span[@class='align-middle ms-25']";
    this.addpopSelector = "//div[@class='modal-content']";
    this.itemNameSelector = "//input[@placeholder=' Item Name']";
    this.itemPriceSelector = "//input[@placeholder='Enter Item Price Name']";
    this.measuringUnitSelector =
      "//div[@class='select__control css-1rv6cxx-control']";
    this.groupSelector = "//*[text()='Select group of the item']";
    this.openingstockSelector =
      "//input[@placeholder='Enter the quantity you want to add']";
    this.recorderlevelSelector = "//input[@placeholder='Reorder Level']";
    this.recorderQuantitySelector = "//input[@placeholder='Reorder Quantity']";
    this.descriptionSelector =
      "//textarea[@placeholder='Enter description of the item']";
    this.addButtonSelector = "Add Item";
    this.cancelButtonSelector = "//*[text()='Cancel']";
    this.addpageSelector = "//h1[text()='Add New Item']";
    this.kilogramselector = "div[@id='react-select-2-option-3']";
    this.listitemSelector = "//div[@id='row-0']//div[@id='cell-items-undefined']";
    this.threedotSelector = "//div[@id='row-6']//span[@aria-haspopup='true']//*[name()='svg']";
    this.deletebuttonSelector = "//div[@id='row-6']//button[2]";
    this.deleteConfirmSelector ="//button[normalize-space()='Yes, delete inventory']";
    this.deletemessage = "//span[@aria-label='toast-text']";
  }
  async navigatetoDetailsPage(){
    await page.click(this.listitemSelector);
    
  }
  async clickthreedotButton() {
    await page.click(this.threedotSelector);
    await page.click(this.deletebuttonSelector);
    await page.click(this.deleteConfirmSelector);
  }
  

  async getText() {
    const messageLocator = page.locator(this.listitemSelector);
    const [innerText] = await messageLocator.allInnerTexts();
    return innerText;
  }

  async navigateToInventoryPage() {
    await page.click(this.inventorypageSelector);
  }

  async clickInventoryAddButton() {
    await page.click(this.createinventorySelector);
  }

  async fillAddInventorytFields(name, price, measuringunit) {
    await page.type(this.itemPriceSelector, name);
    await page.type(this.itemPriceSelector, price);
    await page.pause();
    await page.click(this.measuringUnitSelector, measuringunit);
    await page.pause();
    // await page.click(this.)
  }

  async clickAddBtn() {
    await page.click(this.addButtonSelector);
  }
}
module.exports = { InventoryPage };
