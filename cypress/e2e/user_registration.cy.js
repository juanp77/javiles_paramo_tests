/// <reference types="cypress" />

import { homePage } from '../pages/homePage';
import { registerPage } from '../pages/registrationPage';
import { registerData } from '../fixtures/registerData.json'

let newEmail
let newUserLogin

describe('Register User', () => {

  before(() => {

    let max = 10000;
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

  it('Should register new user successfully', () => {

    //Visit home page
    cy.visit(Cypress.env().baseUrl, { failOnStatusCode: false })


    cy.wait(5000)

    //Accept pop up
    cy.contains("Got it", { timeout: 600000 }).click()

    //Click on sing up botton
    homePage.clickOnsingUpBtn()

    //Verify URL - -  Registration page
    cy.url().should('eq', 'https://demo.casino/user/registration')

    //Complete user and password and check Terms and Conditions
    registerPage.setRegistrationInputForm(newEmail, registerData.password)

    //Accept terms and conditions
    registerPage.acceptTerms(true)

    //Select EUR currency
    cy.currencyOption('EUR')

    //Submit form
    registerPage.createAccount()

    //Verify account has been created
    //Note: is failing due a captcha introduced on application 
    cy.contains('Congratulations!').should("have.class", "notification__title")
  })

})