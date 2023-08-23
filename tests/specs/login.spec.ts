import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/login';

test.describe('Book Store Login', () => {
  let loginPage;

  test.beforeEach(async ({ page }) => {
    await page.goto('https://demoqa.com/books');

    loginPage = new LoginPage(page);
  });

  test.only('successfull login', async ({ page }) => {
    await loginPage.login();
    await expect(loginPage.userNameValue).toHaveText('gabis');
  });

  test('wrong user', async ({ page }) => {
  });

  test('wrong password', async ({ page }) => {
  });

  test('blank fields', async ({ page }) => {
  });

  test('successfull logout', async ({ page }) => {
   });

});
