Feature: 
    As User
    I want to delete the inventory
    So that I can remove the unwanted inventory from the list

    Background:
        Given User has navigated to login page
        And User enters email "sandesh.blacktechgmail.com" and password "password"
        And the user has navigated to the home page
        And the user has clicked the Inventory button
        And the user navigated to Inventory page

    Scenario:Deleting the particular dish from the list
        When the user clicks the ellipsis button of the inventory name as "chana" and clicks the delete button and clicks the delete inventory button
        Then the inventory with the inventory name "chana" should not be there in the list

   