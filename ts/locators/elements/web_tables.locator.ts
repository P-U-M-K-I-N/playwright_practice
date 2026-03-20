import { Page, Locator } from '@playwright/test';

export class WebTablesLocators {
    readonly page: Page;
    readonly lblSidebarMenu: Locator;
    readonly lblPageHeader: Locator;
    readonly btnAdd: Locator;
    readonly inputSearch: Locator;
    readonly tableHeaderRows: Locator;
    readonly tableBodyRows: Locator;

    constructor(page: Page) {
        this.page = page;
        // กำหนดตำแหน่งไว้ที่นี่ที่เดียว
        this.lblSidebarMenu = page.locator('.element-group').filter({ hasText: 'Elements' }).getByRole('listitem').filter({ hasText: 'Web Tables' });
        this.lblPageHeader = page.getByRole('heading', { name: 'Web Tables' });
        this.btnAdd = page.locator('#addNewRecordButton');
        this.inputSearch = page.locator('#searchBox');
        this.tableHeaderRows = page.getByRole('table').locator('thead tr');
        this.tableBodyRows = page.getByRole('table').locator('tbody tr');
    }
}