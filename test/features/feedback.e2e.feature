Feature: Feedback E2E

    Scenario: User successfully submits the feedback form
        Given the user is on the feedback page
        When the user correclty fills the feedback form
        Then a success message is displayed for the feedback
