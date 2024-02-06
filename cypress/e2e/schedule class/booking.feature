Feature: Schedule for a class

    To get the ideal body
    i want booking yoga class

    Scenario: Schedule booking class
        Given I open web page
        When I choose a class and fill the schedule and my data
        Then I should see the details of my booking order