Feature: 
    As User
    I want to create restaurent
    So that I can automate my restaurent\

    Background:
        Given User has navigated to login page
        And User enters email "sandesh.blacktech@gmail.com" and password "password"
        And the user has navigated to the home page
        And the user has clicked the Inventory button
        And the user navigated to Inventory page


    # Scenario:Create Restaurent when you have no restaurent in your account
    #     When the user clicks the user profile and clicks manage restaurent and clicks 

    Scenario:To create restaurent when you already have restaurent
         When the user clicks the user profile and clicks manage restaurent and clicks create restaurent and enters restaurent name as <name> and clicks create restaurent button
         |name   |
         |hello pb|
         |Black imperior|
         |Elogistic|
         Then the sucessfull message "Restaurent sucessfully created" should pop up