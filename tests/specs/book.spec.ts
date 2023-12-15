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

  test('search a book', async () => {
    await bookPage.search.fill('JavaScript');

  });
  
})

// search
// book details
// learning how to deal with a list
// validate a list
// api book store