/// <reference types="cypress" />

describe("Accomplishments Dashboard", () =>{
    beforeEach(() => {
        cy.visit("/accomplishments")
    })

    it("Should showcase error if information is missing", () => {
        cy.get("[data-cy='accomplishment-title-input']").type("My Basketball Accomplishment")
        cy.get("[data-cy='accomplishment-input']").type("I made 10 threes in a row")
        cy.contains("Submit Accomplishment").click()
        cy.contains("Complete the items above to continue").should("be.visible")
    })

    it("Should display validation component if all information is input", () => {
        cy.get("[data-cy='accomplishment-title-input']").type("My Basketball Accomplishment")
        cy.get("[data-cy='accomplishment-input']").type("I made 10 threes in a row")
        cy.get("[type='checkbox']").click()
        cy.contains("Submit Accomplishment").click()
        cy.contains("This Accomplisment was Successfully Submitted").should("be.visible")
    })

        it("Should go back to accomplishment with empty input", () => {
        cy.get("[data-cy='accomplishment-title-input']").type("My Basketball Accomplishment")
        cy.get("[data-cy='accomplishment-input']").type("I made 10 threes in a row")
        cy.get("[type='checkbox']").click()
        cy.contains("Submit Accomplishment").click()
        cy.contains("Go Back").click()
        cy.get("[data-cy='accomplishment-title-input']").should("have.value", "")
        cy.get("[data-cy='accomplishment-input']").should("have.value", "")
        cy.get("[type='checkbox'").should("not.be.checked")
    })
})