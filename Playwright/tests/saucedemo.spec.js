import { test, expect } from '@playwright/test';
import LoginPage from '../pages/saucedemo/LoginPage';

let loginPage

test.beforeEach(async ({ page }) => {
  console.log(`Running ${test.info().title}`);
  loginPage = new LoginPage(page)
  await loginPage.visit()
});

test('Successful login with credentials', async ({ page }) => {
    await loginPage.typeUsername('standard_user')
    await loginPage.typePassword('secret_sauce')
    await loginPage.clickLoginButton()
    await loginPage.verifySuccessfulLogin()
});

test('Unsuccessful login with credentials', async ({ page }) => {
    await loginPage.typeUsername('wrong_user')
    await loginPage.typePassword('secret_saucer')
    await loginPage.clickLoginButton()
    await loginPage.verifyErrorMessage()
});

