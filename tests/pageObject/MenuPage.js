class MenuPage {
  constructor() {
    this.menuLocator = "//span[normalize-space()='Menu']";
    this.dineinmenuLocator = "//a[@class='active']";
    this.addMenuButtonSelector = "//span[normalize-space()='Add new Menu']"; // Replace with the actual selector for the add menu button
    this.menuNameInputSelector = "//input[@placeholder='Menu Name']"; // Replace with the actual selector for the menu name input field
    this.photoLibrarySelector =
      "//div[contains(@class,'upload-//div[contains(@class,'library-suggest-grid')]//div[1]//div[1]//img[1]-img-//div[contains(@class,'library-suggest-grid')]//div[1]//div[1]//img[1]')]";
    this.photoLocator =
      "body > div:nth-child(3) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(13) > div:nth-child(1) > img:nth-child(1)"; // Replace with the actual selector for the photo library button
    this.departmentDropdownSelector =
      "//div[contains(@class,'select__input-container css-19bb58m')]";
    this.photoSaveButton = "//button[normalize-space()='Save']"; // Replace with the actual selector for the department dropdown
    this.saveMenuButtonSelector = "//button[@type='submit']"; // Replace with the actual selector for the save menu button
    this.successMessageSelector = "//div[@class='toastify-header']"; // Replace with the actual selector for the success message
    this.imagebutton =
      "//div[@class='upload-dish-img-container']//*[name()='svg']";
  }

  clickAddMenuButton() {
    page.click(this.addMenuButtonSelector);
  }

  enterMenuName(name) {
    page.fill(this.menuNameInputSelector, name);
  }

  selectImageFromPhotoLibrary() {
    page.click(this.photoLibrarySelector);
  }

  selectDepartment(department) {
    page.selectOption(this.departmentDropdownSelector, department);
  }

  clickSaveMenuButton() {
    page.click(this.saveMenuButtonSelector);
  }
  async verifySuccessMessage(message) {
    await page.waitForSelector(this.successMessageSelector);
    const successMessage = await this.page.textContent(
      this.successMessageSelector
    );
    expect(successMessage).toContain(message);
  }
  async clickImage() {
    await page.click(this.imagebutton);
  }
}

module.exports = { MenuPage };
