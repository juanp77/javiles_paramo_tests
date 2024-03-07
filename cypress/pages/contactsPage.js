class contacts {
    elements = {
        name: () => cy.get("[data-test='input-name']"),
        email: () => cy.get("[data-test='input-email']"),
        topic: () => cy.get("[data-test='input-topic']"),
        text: () => cy.get("[data-test='input-text']"),
        saveBtn: () => cy.get("[data-test='control-submit']")
    }

    completeForm(name, email, topic, text) {
        this.elements.name().type(name)
        this.elements.email().type(email)
        this.elements.topic().type(topic)
        this.elements.text().type(text)
    }

    sendForm() {
        this.elements.saveBtn().click()
    }
}

export const contactsPage = new contacts()