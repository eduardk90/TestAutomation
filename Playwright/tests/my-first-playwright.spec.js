import { test, expect } from '@playwright/test';
import ActionsPage from '../pages/ActionsPage'

let actionsPage

test.beforeEach(async ({ page }) => {
  console.log(`Running ${test.info().title}`);
  actionsPage = new ActionsPage(page)
  await actionsPage.visit()
});

test.afterEach(async ({ page }, testInfo) => {
  if (testInfo.status !== testInfo.expectedStatus) {
    await page.screenshot({ path: `screenshots/${testInfo.title}.png` })
  }
})

test('Verify Email', async ({ page }) => {
  await actionsPage.typeEmail('Eduard@test.com')
  await actionsPage.verifyEmail('Eduard@test.com')

});

test('Check and verify checkboxes', async ({ page }) => {
  await actionsPage.checkCheckboxes()
  await actionsPage.verifyCheckboxes()

});