const { Given, When, Then } = require ('@badeball/cypress-cucumber-preprocessor');

Given('I open login page', () => {
    cy.visit('https://fitbybeat.com/login')
});

When('I submit login with wrong credential', () => {
    cy.get('#user_login').type('Username')
    cy.get('#user_pass').type('Password')
    cy.get('input[name="submit"]').click()
});

Then('I should see error message', () => {
    cy.get('.tml-errors').should('be.visible')    
});