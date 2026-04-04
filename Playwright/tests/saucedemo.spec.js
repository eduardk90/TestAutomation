import { test, expect } from '@playwright/test';
import LoginPage from '../pages/saucedemo/LoginPage';
import AllProductsPage from '../pages/saucedemo/AllProductsPage';
import CartPage from '../pages/saucedemo/CartPage';
import CheckoutPage from '../pages/saucedemo/CheckoutPage';

let loginPage
let allProductsPage
let cartPage
let checkoutPage

test.beforeEach(async ({ page }) => {
  loginPage = new LoginPage(page)
  allProductsPage = new AllProductsPage(page)
  cartPage = new CartPage(page)
  checkoutPage = new CheckoutPage(page)
  await loginPage.visit()
  await loginPage.typeUsername(process.env.SAUCE_USERNAME)
  await loginPage.typePassword(process.env.SAUCE_PASSWORD)
  await loginPage.clickLoginButton()
})

test('Successful login', async ({ page }) => {
  await loginPage.verifySuccessfulLogin()
})

test('Unsuccessful login', async ({ page }) => {
  await loginPage.visit()
  await loginPage.typeUsername('wrong_user')
  await loginPage.typePassword('wrong_password')
  await loginPage.clickLoginButton()
  await loginPage.verifyErrorMessage()
})

test('Verify 6 products are displayed', async ({ page }) => {
  await allProductsPage.verifyProductCount()
})

test('Verify default sort order is A to Z', async ({ page }) => {
  await allProductsPage.verifyDefaultSortOrder('Sauce Labs Backpack')
})

test('Apply Z to A filter', async ({ page }) => {
  await allProductsPage.applyFilter('za', 'Test.allTheThings() T-Shirt (Red)', '$15.99')
})

test('Full checkout flow', async ({ page }) => {
  await allProductsPage.addToCart('sauce-labs-backpack')
  await cartPage.visit()
  await cartPage.verifyProductInCart('Sauce Labs Backpack')
  await cartPage.proceedToCheckout()
  await checkoutPage.fillDetails('Test', 'User', '12345')
  await checkoutPage.continue()
  await checkoutPage.finish()
  await checkoutPage.verifyOrderComplete()
})

test('Apply Low to High price filter', async ({ page }) => {
  await allProductsPage.applyFilter('lohi', 'Sauce Labs Onesie', '$7.99')
})

test('Apply High to Low price filter', async ({ page }) => {
  await allProductsPage.applyFilter('hilo', 'Sauce Labs Fleece Jacket', '$49.99')
})