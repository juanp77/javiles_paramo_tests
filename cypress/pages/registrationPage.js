class register {
    elements = {
        email: () => cy.get("[data-test='input-email']"),
        password: () => cy.get("[data-test='input-password']"),
        reenterPassword: () => cy.get("[data-test='input-password_confirmation']"),
        checkTyC: () => cy.get(".input__wrapper > label"),
        createAccountBtn: () => cy.get("[data-test='control-submit']")
    }

    setRegistrationInputForm(email, password) {
        this.elements.email().type(email)
        this.elements.password().type(password)
        this.elements.reenterPassword().type(password)
    }

    acceptTerms(boolean) {
        if (boolean) {
            this.elements.checkTyC().click()
        }
    }


    createAccount() {
        cy.wait(2000)
        this.elements.createAccountBtn().click({ force: true })
    }
}

export const registerPage = new register();