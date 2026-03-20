import { Page, expect, test } from '@playwright/test';
import { WebTablesLocators } from '../../locators/elements/web_tables.locator.ts';

export class WebTablesPage {
    readonly page: Page;
    readonly locators: WebTablesLocators;

    constructor(page: Page) {
        this.page = page;
        this.locators = new WebTablesLocators(page); // เรียกใช้ Locator Library
    }

    // Keyword : Go to Web Tables Page
    async goto() {
        await test.step('Navigate to DemoQA web tables page', async () => {
            await this.page.goto('https://demoqa.com/webtables');
        });
    }
    
    // Keyword : Click
    async clickWebTablesMenu() {
        await test.step('Action: Click on Web Tables Menu', async () => {
            await this.locators.lblSidebarMenu.click();
        });
    }
    
    async clickAddButton() {
        await test.step('Action: Click on Add Button', async () => {
            await this.locators.btnAdd.click();
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