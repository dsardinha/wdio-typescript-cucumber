Feature: Feedback

    Scenario: Feedback is successfully submitted
        Given the user is on the feedback page
        When the user correclty fills the feedback form
        Then a success message is displayed for the feedback
