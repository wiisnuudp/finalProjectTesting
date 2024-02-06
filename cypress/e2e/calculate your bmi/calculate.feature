Feature: Calculate your BMI

    To get the ideal body 
    I have to consider my weight

    Scenario: Calculate BMI
        Given I open the web page
        When I fill data about my body
        Then I should see the result