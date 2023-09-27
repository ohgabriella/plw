import { type Locator, type Page } from '@playwright/test';
export class LoginPage {
    readonly page: Page;

    readonly loginButton: Locator;
    readonly userNameInput: Locator;
    readonly passwordInput: Locator;
    readonly userNameValue: Locator;
    readonly idName: Locator;
    readonly logout: Locator;

    constructor(page: Page) {
        this.page = page;
        this.loginButton = page.locator('#login');
        this.userNameInput = page.locator('#userName');
        this.passwordInput = page.locator('#password');
        this.userNameValue = page.locator('#userName-value');
        this.idName = page.locator("#name");
        this.logout = page.getByRole('button', { name: 'Log out' });

    }

    async login(username, password) {
        await this.loginButton.click();
        await this.userNameInput.fill(username);
        await this.passwordInput.fill(password);
        await this.loginButton.click();
    }

}