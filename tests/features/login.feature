Feature:
    As a user
    I want to login to the restrox
    So that I want to use the features of restrox


    Scenario Outline:Logging in with not registered account credentials
        Given User has navigated to login page
        When the user enters email as "<email>" and password as "<password>" and clicks the login button
        Then the error message "error message" should throw

        Examples:
            |email                 |password              |message                                    |
            |ritaadhikari@gmail.com|something             |User with such email or phone doesn't exist|                          
            |sandesh@gmail.com     |password              |User with such email or phone doesn't exist|                  
            |abdc@gmail.com        |loljlekheni           |User with such email or phone doesn't exist|



    Scenario:Logging registered account with invalid  email and password
        Given User has navigated to login page
        When the user enters email as "<email>" and password as "<password>" and clicks the login button
        Then the error message "error message" should throw

        Examples:
            |email                       |password              |message                                    |
            |ritaadhikari@gmail.com      |something             |Incorrect Password                         |                          
            |sandesh.blacktech@gmail.com |sandesh               |Incorrect Password                         |                  
            |abdc@gmail.com              |loljlekheni           |User with such email or phone doesn't exist|



    Scenario:Logging registered account with valid  email and password
        Given User has navigated to login page
        When the user enters email as "<email>" and password as "<password>" and clicks the login button
        Then the user should be logged in to the home page

        Examples:
            |email                      |password              |                                    
            |rita.blacktech@gmail.com   |something             |                         
            |sandesh.blacktech@gmail.com|password              |                 
            |9746304844                 |password              |





        



        