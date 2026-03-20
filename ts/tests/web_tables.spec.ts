import { test } from '@playwright/test';
import { WebTablesPage } from '../pages/elements/web_tables.page.ts';

test.describe('Web Tables Functionality', () => {
    let web_tables: WebTablesPage;

    test.beforeEach(async ({ page }) => {
        web_tables = new WebTablesPage(page);
        test.step('Go to Web Tables Page', async () => {
            await web_tables.goto();
        });
    });
    
    test('เข้า Elements', async ({ page }) => {        
        await web_tables.clickElementsCard();

    });

});