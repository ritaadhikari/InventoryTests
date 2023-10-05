const { Given, When, Then } = require("@cucumber/cucumber");
const { expect } = require("@playwright/test");

const { LoginPage } = require("../pageObject/LoginPage.js");
const { HomePage } = require("../pageObject/HomePage.js");
const { InventoryPage } = require("../pageObject/InventoryPage.js");

const loginPage = new LoginPage();
const homePage = new HomePage();


When('the user clicks the user profile and clicks manage restaurent and clicks create restaurent and enters restaurent name as <name> and clicks create restaurent button', function (dataTable) {
    
  });

Then('the sucessfull message {string} should pop up', function (string) {
    // Write code here that turns the phrase above into concrete actions
    return 'pending';
  });