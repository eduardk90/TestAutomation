import { expect } from '@playwright/test'

export default class CheckoutPage {
  constructor(page) {
    this.page = page
  }

  async fillDetails(firstName, lastName, postalCode) {
    await this.page.locator('[data-test="firstName"]').fill(firstName)
    await this.page.locator('[data-test="lastName"]').fill(lastName)
    await this.page.locator('[data-test="postalCode"]').fill(postalCode)
  }

  async continue() {
    await this.page.locator('[data-test="continue"]').click()
  }

  async finish() {
    await this.page.locator('[data-test="finish"]').click()
  }

  async verifyOrderComplete() {
    await expect(this.page.locator('[data-test="complete-header"]')).toHaveText('Thank you for your order!')
  }
}