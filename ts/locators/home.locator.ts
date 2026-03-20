import { Page, Locator } from '@playwright/test';

export class HomeLocators {
    readonly page: Page;
    readonly homeImage: Locator;
    readonly lblCardElement: Locator;
    readonly lblCardForm: Locator;
    readonly lblCardAlertsFrameAndWindows: Locator;
    readonly lblCardWidgets: Locator;
    readonly lblCardInteractions: Locator;

    constructor(page: Page) {
        this.page = page;
        // กำหนดตำแหน่งไว้ที่นี่ที่เดียว
        this.homeImage = page.locator('xpath=//*[@id="root"]/header/a');
        this.lblCardElement = page.getByRole('heading', { name: 'Elements' });
        this.lblCardForm = page.getByRole('heading', { name: 'Forms' });
        this.lblCardAlertsFrameAndWindows = page.getByRole('heading', { name: 'Alerts, Frame & Windows' });
        this.lblCardWidgets = page.getByRole('heading', { name: 'Widgets' });
        this.lblCardInteractions = page.getByRole('heading', { name: 'Interactions' });
    }
}