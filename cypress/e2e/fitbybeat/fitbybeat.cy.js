/// <reference types="cypress" />

describe('final project', () => {

    it('fill data calculate your BMI', () => {
        cy.visit('https://fitbybeat.com/')

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

        cy.get('.qodef-bmic-normal').should('be.visible')
    });

    it('login form', () => {
        cy.visit('https://fitbybeat.com/login')


        cy.get('#user_login').type('Username')
        cy.get('#user_pass').type('Password')

        cy.get('input[name="submit"]').click()

        cy.get('.tml-errors').should('be.visible')
        
    });
    it('contact us', () => {
        cy.visit('https://fitbybeat.com/contact-us/')

        cy.get('input[name="first-name"]').type('wisnu')
        cy.get('input[name="last-name"]').type('putra')
        cy.get('input[name="phone"]').type('123456789')
        cy.get('input[name="email"]').type('wisnu@123.com')
        cy.get('.message').type('hehe')
        cy.get('input[type="submit"]').click()

        cy.get('.wpcf7-mail-sent-ok').should('contain.text','Thank you for your message. It has been sent.')        
    });

    it('schedule studio 1', () => {
        // cy.visit('https://fitbybeat.com/schedule/')

        // cy.get('.qodef-btn-text').contains('Book now').click()

        cy.visit('booking.fitbybeat.com/booking/home/step/1')

        cy.get('.proj-margin30').should('contain.text', 'Please follow step by step to book a class')

        cy.get('#class_id').select('69').should('have.value', '69')
        cy.get('#date_id').select('2024-08-26').should('have.value', '2024-08-26')
        cy.get('#time_id').select(1).should('have.value', '17:30:00')
        cy.get('#quantity').select(2).should('have.value', '2')

        cy.get('#btn_submit').click()

        // cy.get('p').should('contain.text', 'Please follow step by step to book a class')
        cy.url('https://booking.fitbybeat.com/booking/home/step/2')

        cy.origin('booking.fitbybeat.com/booking/home/step/2', () => {
            cy.get('input[name="name"]').type('wisnu')
            cy.get('input[name="email"]').type('dputra')
            cy.get('input[name="whatsapp"]').type('123456')
            cy.get('.proj-uppercase').contains('Next').click()
    
            cy.get('.proj-margin10').should('contain.text', 'Please check your booking')
        })    
    });

    it('classes studio 3', () => {
        cy.visit('https://fitbybeat.com/classes/')

        cy.get('h3').contains('Lesmills Body Jam').click()
        cy.url('https://fitbybeat.com/events/lesmills-body-jam/')

        cy.get('h2').should('contain.text', 'Lesmills Body Jam')
    });
});
