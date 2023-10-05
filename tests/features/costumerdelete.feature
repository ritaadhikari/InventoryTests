Feature: 
    As User
    I want to add inventory
    So that I can have information about all the inventories needed

    Background:
        Given User has navigated to login page
        And User enters email "sandesh.blacktech@gmail.com" and password "password"
        And the user has navigated to the home page
        And the user clicks the costumer button
        And the user has navigated to the costumer page


          Scenario Outline:Editing the costumer name number and due
            When the user clicks the threedot side button of the costumer then clicks the delete option and click the confirm delete button
            Then the costumer should be deleted from the list
