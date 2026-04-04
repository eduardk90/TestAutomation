export default class CartPage {
  visit() {
    cy.get('[data-test="shopping-cart-link"]').click()
  }

  verifyProductInCart(productName) {
    cy.get('[data-test="inventory-item-name"]').should('have.text', productName)
  }

  proceedToCheckout() {
    cy.get('[data-test="checkout"]').click()
  }
}