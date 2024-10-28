@skip
Feature: Homepage E2E

    Scenario: User sees the available online banking features
        Given the user is on the homepage
        Then the user can see the different online banking features headers
