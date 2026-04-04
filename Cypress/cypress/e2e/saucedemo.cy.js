import LoginPage from "../pages/saucedemo/LoginPage";

let loginPage

describe('Saucedemo Login Page', () => {
  beforeEach(() => {
    loginPage = new LoginPage()
    loginPage.visit()
  })

  it('Logs in with correct credentials', () => {
    loginPage.typeUsername(Cypress.env('SAUCE_USERNAME'))
    loginPage.typePassword(Cypress.env('SAUCE_PASSWORD'))
    loginPage.clickLoginButton()
    loginPage.verifySuccessfulLogin()
  })

  it('Fails login with wrong credentials', () => {
    loginPage.typeUsername('wrong_user')
    loginPage.typePassword('wrong_password')
    loginPage.clickLoginButton()
    loginPage.verifyUnsuccessfulLogin()
  })
})