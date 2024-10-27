Feature: Search E2E

    Background: 
        Given the user is on the homepage

    Scenario Outline: User executes a search and results are returned
        When the user searches for <query>
        Then search returns results
        And a successful search results message is displayed mentioning <query>

        Examples:
            | query     | 
            | "bank"    |
            | "account" | 

    Scenario: User executes a search and results are not returned
        When the user searches for "apple"
        Then no results are returned
        And a search results message is displayed mentioning that there are no results for "apple"
