Feature: 
    As User
    I want to create restaurent menu
    So that I can add menus to my menu

    Background:
        Given User has navigated to login page
        And User enters email "sandesh.blacktech@gmail.com" and password "password"
        And the user has navigated to the home page
        And the user has clicked the  menu button
        And the user has clicked the  dine in menu button

    Scenario:Adding new menu to the the menu list
        When the user clicks add menu button and enters name and select image from the photo library and selects department from the dropdown  and clicks on save menu button
        |name|
        |Olivia|
        |Benjamin|
        |Sophia|
        |Elijah|
        |Ava|
        |Liam|
        |Mia|
        |Noah|
        |Isabella|
        |Lucas|
        |Charlotte|
        |Ethan|
        |Amelia|
        |Mason|
        |Harper|
        |Logan|
        |Evelyn|
        |James|
        |Abigail|
        |Alexander|
        Then the sucess message "Menu sucessfully should be created" should be thrown
