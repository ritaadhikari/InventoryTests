
Feature: 
    As User
    I want to add inventory
    So that I can have information about all the inventories needed

    Background:
        Given User has navigated to login page
        And User enters email "sandesh.blacktech@gmail.com" and password "password"
        And the user has navigated to the home page
        And the user has clicked the Inventory button
        And the user navigated to Inventory page

    Scenario Outline:Adding inventory items to the list with only valid item name and item price and measuring unit
        When the user clicks create new inventory and enters item name as "<ItemName>" ,item price as "<ItemPrice>"  and select "<MeasuringUnit>" from "Dropdown" and clicks add item button
        Then the item with as "<ItemName>" ,item price as "<ItemPrice>"  and measuring unit as "<MeasuringUnit>" should appear

        Examples:
        |ItemName |ItemPrice   |MeasuringUnit       |
        |Mushroom |670         |Gram                |
        |Banana   |390         |Dozens              |
        |Orange   |70          |Kilograms           |
        |Water    |70          |Liter               |
   
