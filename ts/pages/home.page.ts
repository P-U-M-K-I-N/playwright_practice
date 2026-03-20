import { Page, expect, test } from '@playwright/test';
import { HomeLocators } from '../locators/home.locator.ts';

export class HomePage {
    readonly page: Page;
    readonly locators: HomeLocators;

    constructor(page: Page) {
        this.page = page;
        this.locators = new HomeLocators(page); // เรียกใช้ Locator Library
    }

    // Keyword : Go to Home Page
    async goto() {
        await test.step('Navigate to DemoQA home page', async () => {
            await this.page.goto('https://demoqa.com');
        });
    }
    
    // Keyword : Click
    async clickElementsCard() {
        await test.step('Action: Click on Elements Card', async () => {
            await this.locators.lblCardElement.click();
        });
    }
    
    async clickFormsCard() {
        await test.step('Action: Click on Forms Card', async () => {
            await this.locators.lblCardForm.click();
        });
    }
    
    async clickAlertsFrameAndWindowsCard() {
        await test.step('Action: Click on Alerts, Frame & Windows Card', async () => {
            await this.locators.lblCardAlertsFrameAndWindows.click();
        });
    }
    
    async clickWidgetsCard() {
        await test.step('Action: Click on Widgets Card', async () => {
            await this.locators.lblCardWidgets.click();
        });
    }
    
    async clickInteractionsCard() {
        await test.step('Action: Click on Interactions Card', async () => {
            await this.locators.lblCardInteractions.click();
        });
    }
    
    // Keyword : Validate
    async validateHomePage() {
        await test.step('Validate: Home Page is displayed', async () => {
            await expect(this.locators.homeImage).toBeVisible();
        });
    }

    async validateElementsCard() {
        await test.step('Validate: Elements Card is displayed', async () => {
            await expect(this.locators.lblCardElement).toBeVisible();
        });
    }
}