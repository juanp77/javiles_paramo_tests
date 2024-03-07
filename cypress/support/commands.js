// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

//Command for selecting currency value
Cypress.Commands.add('currencyOption', (option) => {
    cy.get(".form__section--registration .selectric").click().then(() => {
        cy.get('.selectric-scroll').eq(1).then(() => {
            switch (option) {
                case "USD":
                    cy.get(".selectric-below [data-index='0']").click()
                    break;

                case "EUR":
                    cy.get(".selectric-below [data-index='1']").click()
                    break;

                case "ILS":
                    cy.get(".selectric-below [data-index='2']").click()
                    break;

                case "mLTC":
                    cy.get(".selectric-below [data-index='3']").click()
                    break;

                case "mDOGE":
                    cy.get(".selectric-below [data-index='4']").click()
                    break;

                case "mBCH":
                    cy.get(".selectric-below [data-index='5']").click()
                    break;

                case "mETH":
                    cy.get(".selectric-below [data-index='6']").click()
                    break;

                case "RUB":
                    cy.get(".selectric-below [data-index='7']").click()
                    break;

                case "BYR":
                    cy.get(".selectric-below [data-index='8']").click()
                    break;
            }
        })
    })
});

//Select Category of Contacts form
Cypress.Commands.add('category', (option) => {
    cy.get('.label').click().then(() => {
        cy.get('.selectric-scroll').then(() => {
            switch (option) {
                case "Financial questions":
                    cy.get(".selectric-below [data-index='1']").click()
                    break;

                case "Game rules":
                    cy.get(".selectric-below [data-index='2']").click()
                    break;

                case "Technical questions":
                    cy.get(".selectric-below [data-index='3']").click()
                    break;

                case "Bonuses":
                    cy.get(".selectric-below [data-index='4']").click()
                    break;
            }
        })
    })
})