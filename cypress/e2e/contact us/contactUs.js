const { Given, When, Then } = require ('@badeball/cypress-cucumber-preprocessor');

Given('I open the web page', () => {
    cy.visit('https://fitbybeat.com/contact-us/')
});

When('I fill my personal data', () => {
    cy.get('input[name="first-name"]').type('wisnu')
    cy.get('input[name="last-name"]').type('putra')
    cy.get('input[name="phone"]').type('123456789')
    cy.get('input[name="email"]').type('wisnu@123.com')
    cy.get('.message').type('hehe')
    cy.get('input[type="submit"]').click()
});

Then('I should see the status for my message', () => {
    cy.get('.wpcf7-mail-sent-ok').should('contain.text','Thank you for your message. It has been sent.')   
});