export default class ActionsPage {
  visit() {
    cy.visit('https://example.cypress.io/commands/actions')
  }

  typeEmail(email) {
    cy.get('.action-email').type(email)
  }
  verifyEmail(email) {
    cy.get('.action-email').should('have.value', email)
  }
  checkCheckboxes() {
    cy.get('.action-checkboxes [type="checkbox"]').not('[disabled]').check()
  }
}