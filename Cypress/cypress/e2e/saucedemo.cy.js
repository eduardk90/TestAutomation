import LoginPage from '../pages/saucedemo/LoginPage'
import AllProductsPage from '../pages/saucedemo/AllProductsPage'
import CartPage from '../pages/saucedemo/CartPage'
import CheckoutPage from '../pages/saucedemo/CheckoutPage'

let loginPage
let allProductsPage
let cartPage
let checkoutPage

describe('Saucedemo', () => {
  beforeEach(() => {
    loginPage = new LoginPage()
    allProductsPage = new AllProductsPage()
    cartPage = new CartPage()
    checkoutPage = new CheckoutPage()
    loginPage.visit()
    loginPage.typeUsername(Cypress.env('SAUCE_USERNAME'))
    loginPage.typePassword(Cypress.env('SAUCE_PASSWORD'))
    loginPage.clickLoginButton()
  })

  it('Successful login', () => {
    loginPage.verifySuccessfulLogin()
  })

  it('Unsuccessful login', () => {
    loginPage.visit()
    loginPage.typeUsername('wrong_user')
    loginPage.typePassword('wrong_password')
    loginPage.clickLoginButton()
    loginPage.verifyUnsuccessfulLogin()
  })

  it('Verify 6 products are displayed', () => {
    allProductsPage.verifyProductCount()
  })

  it('Verify default sort order is A to Z', () => {
    allProductsPage.verifyDefaultSortOrder('Sauce Labs Backpack')
  })

  it('Apply Z to A filter', () => {
    allProductsPage.applyFilter('za', 'Test.allTheThings() T-Shirt (Red)', '$15.99')
  })

  it('Apply Low to High price filter', () => {
    allProductsPage.applyFilter('lohi', 'Sauce Labs Onesie', '$7.99')
  })

  it('Apply High to Low price filter', () => {
    allProductsPage.applyFilter('hilo', 'Sauce Labs Fleece Jacket', '$49.99')
  })

  it('Full checkout flow', () => {
    allProductsPage.addToCart('sauce-labs-backpack')
    cartPage.visit()
    cartPage.verifyProductInCart('Sauce Labs Backpack')
    cartPage.proceedToCheckout()
    checkoutPage.fillDetails('Test', 'User', '12345')
    checkoutPage.continue()
    checkoutPage.finish()
    checkoutPage.verifyOrderComplete()
  })
})