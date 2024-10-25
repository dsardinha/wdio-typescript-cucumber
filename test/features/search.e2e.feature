Feature: Search

    Background: 
        Given the user is on the home page

    Scenario Outline: Search with results
        When the user searches for <query>
        Then search returns results
        And a successful search results message is displayed mentioning <query>

        Examples:
            | query     | 
            | "bank"    |
            | "account" | 

    Scenario: Search without results
        When the user searches for "apple"
        Then no results are returned
        And a search results message is displayed mentioning that there are no results for "apple"
