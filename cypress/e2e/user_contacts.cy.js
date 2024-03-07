import { homePage } from "../pages/homePage"
import { contactsPage } from "../pages/contactsPage"
import { registerData } from '../fixtures/registerData.json'

let newEmail
let newUserLogin

describe('Sending contact message', () => {

    before(() => {
        let max = 1000;
        cy.task("randomNumber", max).then(number => {
            let numberRandom = number
            let numberstring = numberRandom.toString()
            newEmail = registerData.email + numberstring + "@gmail.com"
            newUserLogin = registerData.userLogin + numberstring
        })

        //Clear cookies
        cy.clearCookies()
        cy.clearLocalStorage()
    })

    it('Send a successfully contact message', () => {

        //Visit home page
        cy.visit(Cypress.env().baseUrl, { failOnStatusCode: false })

        cy.wait(5000)
        //Accept pop up
        cy.contains("Got it").click()

        //Click on Contacts link
        homePage.goToContactsPage()

        //Completing form
        contactsPage.completeForm("Bren", newEmail, "Prueba", "test")

        //Select Category
        cy.category('Technical questions')

        //Sending the form
        contactsPage.sendForm()

        //Verify successful message
        cy.contains(' Thanks! ').should("have.class", "notification__title")

    })
})