import { expect } from '@playwright/test'
import 'dotenv/config'

export default class AllProductsPage {
  
   constructor(page) {
    this.page = page
  }

 async visit() {
    await this.page.goto(process.env.ALL_PRODUCTS_PAGE);
 }
 async verifyProductCount() {
    await expect(this.page.locator('[data-test="inventory-item"]')).toHaveCount(6)
 }
async verifyDefaultSortOrder(firstName) {
    await expect(this.page.locator('[data-test="product-sort-container"]')).toHaveValue('az')
    await expect(this.page.locator('[data-test="inventory-item-name"]').first()).toHaveText(firstName)
}
async applyFilter(option, expectedFirstName, expectedFirstPrice) {
  await this.page.locator('[data-test="product-sort-container"]').selectOption(option)
  await expect(this.page.locator('[data-test="product-sort-container"]')).toHaveValue(option)
  await expect(this.page.locator('[data-test="inventory-item-name"]').first()).toHaveText(expectedFirstName)
  await expect(this.page.locator('[data-test="inventory-item-price"]').first()).toHaveText(expectedFirstPrice)
}
 async verifyFilterOrdered() {
    await this.page.locator('[data-test="product-sort-container"]').selectOption('az');
    await expect(this.page.locator('[data-test="product-sort-container"]')).toHaveValue('az')
 }
async addToCart(productId) {
  await this.page.locator(`[data-test="add-to-cart-${productId}"]`).click()
  await expect(this.page.locator('[data-test="shopping-cart-badge"]')).toHaveText('1')
}

 async removeFromCart() {
  await this.page.locator('[data-test="remove-sauce-labs-backpack"]').click()
  await expect(this.page.locator('[data-test="shopping-cart-badge"]')).not.toBeVisible()
}

}