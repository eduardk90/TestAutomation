import ActionsPage from '../pages/ActionsPage'

const page = new ActionsPage()

describe('Actions Page', () => {
  it('types and verifies an email', () => {
    page.visit()
    page.typeEmail('Eduard@test.com')
    page.verifyEmail('Eduard@test.com')
  })
  it('checks checkboxes', () => {
    page.visit()
    page.checkCheckboxes()
    cy.get('.action-checkboxes [type="checkbox"]').not('[disabled]').should('be.checked')
  })
})