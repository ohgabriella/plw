import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/login';
import { BookPage } from '../pages/book';

let loginPage;
let bookPage;

test.describe('Book Store Login', () => {
  
  test.beforeEach(async ({ page }) => {
    await page.goto('/books');

    loginPage = new LoginPage(page);
    bookPage = new BookPage(page);

  });

  test('search a book', async ({ page }) => {
    await bookPage.search.fill('JavaScript');
    await bookPage.typeSearch.press('Enter');
    const listOfElements = await bookPage.list;
    const elText = await listOfElements.allTextContents();
    await elText.forEach((element) => console.log(element.includes('JavaScript') == true));
    //element.match(/JavaScript/)
  });

  test('check a list of book', async ({ page }) => {
    await bookPage.search.fill('JavaScript');
    await bookPage.typeSearch.press('Enter');
    const listOfElements = await page.getByAltText('image');
    await expect(listOfElements).toHaveCount(4);
  });

  test('check a book details', async ({ page }) => {
    await bookPage.search.fill('Learning JavaScript');
    await bookPage.typeSearch.press('Enter');
    const element = await page.locator('//span[@class="mr-2"]//a[1]').textContent();
    await bookPage.itemList.nth(0).click();
    await bookPage.userNameValue.nth(0);
    await expect(bookPage.userNameValue.nth(1)).toContainText(element);
  });
  // api book store
})
