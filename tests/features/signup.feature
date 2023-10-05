Feature:
    As a user
    I want to signup 
    So that I can have my own restrox account


    Scenario:Signup with email
        Given the user navigated to the signup page
        When the user clicks the use with email button and enters the email as"ritaadhikari987654" and waits for the email code and enters the code and clicks and enters the name as <name> and password as <password>
        Then the user should be navigated to home page
    


