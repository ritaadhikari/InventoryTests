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


        Scenario Outline:Adding Costumers to the list with valid name and number
            When the user clicks the create costumer button and enters costumer name as "<Name>" and number as "<Number>" and with due amount as "Due" and  clicks the create costumer button
            Then the sucess "<Message>" should pop up and  the "<Name>" should be added to the list

            Examples:
            |Name                 |Number             |Due           |Message                        |
            |Tamp             |049398485438       |67            |Customer of that name already exists.|
            |Tura               |9838378479348      |7854          |Customer of that name already exists.|

        