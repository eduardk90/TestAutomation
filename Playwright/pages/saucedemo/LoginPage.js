import { expect } from '@playwright/test'
import 'dotenv/config'

export default class LoginPage {
  
   constructor(page) {
    this.page = page
  }

 async visit() {
    await this.page.goto(process.env.LOGIN_PAGE);
  }

 async typeUsername(username) {
    await this.page.locator('[data-test="username"]').fill(username);
 }
 async typePassword(password) {
    await this.page.locator('[data-test="password"]').fill(password);
 }

 async clickLoginButton() {
    await this.page.locator('[data-test="login-button"]').click();
 }
 async verifySuccessfulLogin() {
    await expect(this.page).toHaveURL(process.env.LOGIN_PAGE + '/inventory.html');
 }
  async verifyErrorMessage() {
    await expect(this.page.locator('[data-test="error"]')).toBeVisible()
 }
}
