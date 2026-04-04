import { expect } from '@playwright/test'

export default class CartPage {
  constructor(page) {
    this.page = page
  }

  async visit() {
    await this.page.locator('[data-test="shopping-cart-link"]').click()
  }

  async verifyProductInCart(productName) {
    await expect(this.page.locator('[data-test="inventory-item-name"]')).toHaveText(productName)
  }

  async proceedToCheckout() {
    await this.page.locator('[data-test="checkout"]').click()
  }
}