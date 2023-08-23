import { type Locator, type Page } from '@playwright/test';
import dotenv from 'dotenv';

dotenv.config();

export class LoginPage {
    readonly page: Page;

    readonly loginButton: Locator;
    readonly userNameInput: Locator;
    readonly passwordInput: Locator;
    readonly userNameValue: Locator;

    constructor(page: Page) {
        this.page = page;
        this.loginButton = page.locator('#login');
        this.userNameInput = page.locator('#userName');
        this.passwordInput = page.locator('#password');
        this.userNameValue = page.locator('#userName-value');

    }

    async login() {
        await this.loginButton.click();
        await this.userNameInput.fill(process.env.USERNAME!);
        await this.passwordInput.fill(process.env.PASSWORD!);
        await this.loginButton.click();
    }

}