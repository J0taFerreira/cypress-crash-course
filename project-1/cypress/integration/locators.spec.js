/// <reference types="cypress" />

describe("locators", () => {
    beforeEach(() => {
        cy.visit("/elements")
    })

    it("locating elements with get", () => {
         cy.get("button")
         cy.getBytestId("btn-id-1")
    })

}) 