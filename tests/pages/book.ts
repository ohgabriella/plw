import { type Locator, type Page } from '@playwright/test';

export class BookPage {
    readonly page: Page;

    readonly search: Locator;
    readonly buttonSearch: Locator;
    readonly TBody

    constructor(page: Page) {
        this.page = page;
        this.search = page.getByPlaceholder('Type to search');
        this.buttonSearch = page.locator('#basic-addon2');
    }

}

