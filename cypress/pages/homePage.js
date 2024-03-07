class home {
    elements = {
        singUpBtn: () => cy.get("[data-test='nav-reg-head']"),
        singIn: () => cy.contains("Sign in").first(),
        contactsLink: () => cy.contains("Contacts")
    }

    clickOnsingUpBtn() {
        this.elements.singUpBtn().click()
    }

    goToContactsPage() {
        this.elements.contactsLink().click({ force: true })
    }
}

export const homePage = new home();