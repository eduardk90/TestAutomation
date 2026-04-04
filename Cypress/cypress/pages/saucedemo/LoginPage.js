export default class LoginPage {
  
  visit() {
    cy.visit(Cypress.env('LOGIN_PAGE'))
  }
  typeUsername(username) {
    cy.get('[data-test="username"]').invoke('attr', 'autocomplete', 'off').clear().type(username)
  }
  typePassword(password) {
    cy.get('[data-test="password"]').clear().type(password)
  }
  clickLoginButton() {
    cy.get('[data-test="login-button"]').click()
  }
  verifySuccessfulLogin() {
    cy.url().should('eq', Cypress.env('LOGIN_PAGE') + '/inventory.html')
  }
  verifyUnsuccessfulLogin() {
    cy.get('[data-test="error"]').should('be.visible')
  }
}