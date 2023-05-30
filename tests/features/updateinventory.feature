Feature: 
    As User
    I want to update the inventory
    So that I can remove the unwanted inventory from the list

    Background:
        Given User has navigated to login page
        And User enters email "sandesh.blacktech@gmail.com" and password "password"
        And the user has navigated to the home page
        And the user has clicked the Inventory button
        And the user navigated to Inventory page

    Scenario:Updating the particular inventory name from the list of inventory
            When the user clicks the dish he want to update with name "nmdgshgd" and the inventory details page opens and clicks the edit button and enters the name of the Inventory as "Dal" and clicks the update item button
            Then the sucess meassage "Inventory item modified sucessfully" will be shown


    Scenario:Updating the particular inventory name fromm the list of inventory
            When the user clicks the dish he want to update and the inventory details page opens and clicks the edit button and enters the name of the name as "Dal" and clicks the update item button
            Then the sucess meassage "Inventory item modified sucessfully" will be shown



    Scenario:Updating the particular inventory price from the list of inventory
            When the user clicks the dish he want to update and the inventory details page opens and clicks the edit button and enters the price of the inventory as "45" and clicks the update item button
            Then the sucess meassage "Inventory item modified sucessfully" will be shown



    Scenario:Updating the particular inventory measuringunit from the list of inventory
            When the user clicks the dish he want to update and the inventory details page opens and clicks the edit button and clicks the measuringUnit of the price as "gram" and clicks the update item button
            Then the sucess meassage "Inventory item modified sucessfully" will be shown
        
        
     Scenario:Updating without any changes
            When the user clicks the dish he want to update and the inventory details page opens and clicks the edit button and clicks the update item button
            Then the sucess meassage "Inventory item modified sucessfully" will be shown