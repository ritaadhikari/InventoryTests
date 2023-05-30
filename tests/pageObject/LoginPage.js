class LoginPage {
  constructor() {
    this.baseUrl = "https://web.restrox.co/login";
    this.emailSelector = "//input[@type='text']";
    this.passwordSelector = "//input[@type='password']";
    this.loginButtonSelector = "//button[@type='submit']";
  }

  async navigateToLoginPage() {
    await page.goto(this.baseUrl);
  }

  async login(email, password) {
    await page.type(this.emailSelector, email);
    await page.type(this.passwordSelector, password);
    await page.click(this.loginButtonSelector);
  }

  

  // async getErrorMessageText() {
  //   const messageLocator = page.locator(this.messageSelector);
  //   const [innerText] = await messageLocator.allInnerTexts();
  //   return innerText;
  // }
}
module.exports = { LoginPage };
