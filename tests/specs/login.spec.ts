import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/login';
//import dotenv from 'dotenv';

//dotenv.config();

test.describe('Book Store Login', () => {
  let loginPage;

  test.beforeEach(async ({ page }) => {
    await page.goto('/books');

    loginPage = new LoginPage(page);
  });

  test('successfull login', async () => {
    await loginPage.login(process.env.USERNAME!, process.env.PASSWORD!);
    await expect(loginPage.userNameValue).toHaveText('gabis');
  });

  test('wrong user', async () => {
    await loginPage.login('wrong user name', process.env.PASSWORD!);
    await expect(loginPage.idName).toHaveText('Invalid username or password!');
  });

  test('wrong password', async () => {
    await loginPage.login(process.env.USERNAME!, 'wrongpassword');
    await expect(loginPage.idName).toHaveText('Invalid username or password!');
  });

  test('blank fields', async () => {
    await loginPage.login('', '');
    await expect(loginPage.userNameValue).not.toBeVisible();
  });

  //in this test maybe I can use a fixture using the login test
  test('successfull logout', async () => {
    await loginPage.login(process.env.USERNAME!, process.env.PASSWORD!);
    await expect(loginPage.userNameValue).toHaveText('gabis');
    await loginPage.logout.click();
    await expect(loginPage.userNameValue).not.toBeVisible();
   });

});