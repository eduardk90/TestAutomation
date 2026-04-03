describe('My First Test', () => {
    it('Visits the example.com website',() => {
        cy.visit('https://example.cypress.io')
        cy.contains('type').click()
        cy.get('.action-email').type('Eduard').should('have.value', 'Eduard')

    })
    it('Checks checkboxes',() => {
        cy.visit('https://example.cypress.io/commands/actions')
        cy.get('.action-checkboxes [type="checkbox"]').not('[disabled]').check().should('be.checked')

    })
})
