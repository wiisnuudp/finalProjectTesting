const { Given, When, Then } = require ('@badeball/cypress-cucumber-preprocessor');

Given('I open the web page', () => {
    cy.visit('https://fitbybeat.com/')
});

When('I fill data about my body', () => {
    cy.get('input[name="height"]').type('160')
    cy.get('input[name="weight"]').type('50')
    cy.get('input[name="age"]').type('23')
    cy.get('.selection').contains('Sex').click()
    cy.get('.select2-results__option').contains('Male').click()
    cy.get('.selection').contains('Select an activity factor:').click()
    cy.get('.select2-results__option')
    .contains('Very heavy exercise/ physical job/ training 2 x/ day').click()
    cy.get('.qodef-btn-text').contains('Calculate').click()
    cy.wait(3000)
});

Then('I should see the result', () => {
    cy.get('.qodef-bmic-normal').should('be.visible') 
});