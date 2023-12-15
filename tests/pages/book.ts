import { type Locator, type Page } from '@playwright/test';

export class BookPage {
    readonly page: Page;

    readonly search: Locator;
    readonly buttonSearch: Locator;
    readonly typeSearch: Locator;
    readonly userNameValue: Locator;
    readonly list: Locator;
    readonly itemList: Locator;

    constructor(page: Page) {
        this.page = page;
        this.search = page.getByPlaceholder('Type to search');
        this.buttonSearch = page.locator('#basic-addon2');
        this.typeSearch = page.getByPlaceholder('Type to search');
        this.userNameValue = page.locator('#userName-value');
        this.list = page.locator('//span[@class="mr-2"]//a');
        this.itemList = page.locator('.mr-2');
    }

}
