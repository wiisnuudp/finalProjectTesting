const { Given, When, Then } = require ('@badeball/cypress-cucumber-preprocessor');

Given('I open the web page', () => {
    cy.visit('https://fitbybeat.com/classes/')
});

When('I Choose the class', () => {
    cy.get('h3').contains('Lesmills Body Jam').click()
    cy.url('https://fitbybeat.com/events/lesmills-body-jam/')
});

Then('I should see description of my class', () => {
    cy.get('h2').should('contain.text', 'Lesmills Body Jam')
});