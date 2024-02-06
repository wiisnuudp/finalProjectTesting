const { Given, When, Then } = require ('@badeball/cypress-cucumber-preprocessor');

Given('I open web page', () => {
    // cy.visit('https://fitbybeat.com/schedule/')
    // cy.get('.qodef-btn-text').contains('Book now').click()
    cy.visit('booking.fitbybeat.com/booking/home/step/1')
});

When('I choose a class and fill the schedule and my data', () => {

    cy.get('.proj-margin30').should('contain.text', 'Please follow step by step to book a class')

    cy.get('#class_id').select('69').should('have.value', '69')
    cy.get('#date_id').select('2024-08-26').should('have.value', '2024-08-26')
    cy.get('#time_id').select(1).should('have.value', '17:30:00')
    cy.get('#quantity').select(2).should('have.value', '2')

    cy.get('#btn_submit').click()

    // cy.get('p').should('contain.text', 'Please follow step by step to book a class')
    // cy.url('https://booking.fitbybeat.com/booking/home/step/2')

    cy.origin('https://booking.fitbybeat.com/', () => {
        // Cypress.require('../../support/commands')
        cy.visit('/booking/home/step/2')
        cy.get('input[name="name"]').type('wisnu')
        cy.get('input[name="email"]').type('dputra')
        cy.get('input[name="whatsapp"]').type('123456')
        cy.get('.proj-uppercase').contains('Next').click()
    })
});

Then('I should see the details of my booking order', () => {
    cy.get('.proj-margin10').should('contain.text', 'Please check your booking')    
});