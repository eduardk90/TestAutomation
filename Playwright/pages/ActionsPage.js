import { expect } from '@playwright/test'
import 'dotenv/config'

export default class ActionsPage {
  
   constructor(page) {
    this.page = page
  }

 async visit() {
    await this.page.goto(process.env.BASE_URL + '/commands/actions');
  }

 async typeEmail(email) {
    await this.page.getByRole('textbox', { name: 'Email address' }).fill(email)
  }
 async verifyEmail(email) {
    await expect(this.page.getByRole('textbox', { name: 'Email address' })).toHaveValue(email)
  }
  async checkCheckboxes() {
    const checkboxes = await this.page.locator('.action-checkboxes [type="checkbox"]:not([disabled])').all()
    for (const checkbox of checkboxes) {
      await checkbox.check()
    }
  }
 async verifyCheckboxes() {
    const checkboxes = await this.page.locator('.action-checkboxes [type="checkbox"]:not([disabled])').all()
    for (const checkbox of checkboxes) {
      await expect(checkbox).toBeChecked()
    }
  }
}