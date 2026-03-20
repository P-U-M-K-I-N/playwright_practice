import { test } from '@playwright/test';
import { HomePage } from '../pages/home_page.ts';

test.describe('Home Page Functionality', () => {

    test('เข้า Elements', async ({ page }) => {
        const home = new HomePage(page);

        // ใช้งานเสมือนเรียก Library/Keywords
        await home.goto();
        await home.clickElementsCard('Elements');

    });

});