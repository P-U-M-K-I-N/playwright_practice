import { Page, expect } from '@playwright/test';
import { HomeLocators } from '../locators/home_locator.ts';

export class HomePage {
    readonly page: Page;
    readonly locators: HomeLocators;

    constructor(page: Page) {
        this.page = page;
        this.locators = new HomeLocators(page); // เรียกใช้ Locator Library
    }

    // Keyword
    async goto() {
        await this.page.goto('https://demoqa.com');
    }

    async clickElementsCard(itemName: string) {
        await this.locators.cardElementText.click();
    }

}