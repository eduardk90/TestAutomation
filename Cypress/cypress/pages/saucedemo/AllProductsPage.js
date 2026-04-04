export default class AllProductsPage {
  visit() {
    cy.visit(Cypress.env('ALL_PRODUCTS_PAGE'))
  }

  verifyProductCount() {
    cy.get('[data-test="inventory-item"]').should('have.length', 6)
  }

  verifyDefaultSortOrder(firstName) {
    cy.get('[data-test="product-sort-container"]').should('have.value', 'az')
    cy.get('[data-test="inventory-item-name"]').first().should('have.text', firstName)
  }

  applyFilter(option, expectedFirstName, expectedFirstPrice) {
    cy.get('[data-test="product-sort-container"]').select(option)
    cy.get('[data-test="product-sort-container"]').should('have.value', option)
    cy.get('[data-test="inventory-item-name"]').first().should('have.text', expectedFirstName)
    cy.get('[data-test="inventory-item-price"]').first().should('have.text', expectedFirstPrice)
  }

  addToCart(productId) {
    cy.get(`[data-test="add-to-cart-${productId}"]`).click()
    cy.get('[data-test="shopping-cart-badge"]').should('have.text', '1')
  }
}