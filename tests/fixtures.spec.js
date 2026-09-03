import { test } from 'playwright/test';

test('Test fixture1', async ({ page }) => {
    console.log('I am in Fixture 1');
    await page.goto('https://playwright.dev/');

})

test('Test fixture2', async ({ page }) => {
    console.log('I am in Fixture 2');
    await page.goto('https://www.saucedemo.com/');
})