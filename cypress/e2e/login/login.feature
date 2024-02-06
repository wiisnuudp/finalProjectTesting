Feature: Login to Application

    as a valid user i want
    to login into Application

    Scenario: Invalid Login
        Given I open login page
        When I submit login with wrong credential
        Then I should see error message