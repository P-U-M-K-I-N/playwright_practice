import { Page, Locator } from '@playwright/test';

export class HomeLocators {
    readonly page: Page;
    readonly homeImage: Locator;
    readonly cardElementText: Locator;

    constructor(page: Page) {
        this.page = page;
        // กำหนดตำแหน่งไว้ที่นี่ที่เดียว
        this.homeImage = page.locator('xpath=//*[@id="root"]/header/a');
        this.cardElementText = page.getByRole('heading', { name: 'Elements' });
    }
}