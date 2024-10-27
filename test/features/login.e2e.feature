Feature: Login E2E

    Background: 
        Given the user is on the login page

    Scenario: User is not logged in when using invalid credentials
        When the user submits the login form with invalid credentials
        Then an error message is displayed
        And the user is not logged in

    Scenario: User is successfuly logged when using valid credentials
        When the user submits the login form with valid credentials
        Then the user is successfully logged in
