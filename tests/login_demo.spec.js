import { test, expect } from '@playwright/test'

test('Login Demo Test1', async ({ page }) => {

    await page.goto('https://demo.applitools.com/')
    //to enable Playwright Inspector
    //await page.pause()

    //got locator from Playwright Inspector
    //await page.getByRole('textbox', { name: 'Enter your username' }).fill('Test')
    await page.locator('[placeholder="Enter your username"]').fill('Test')

    //got locator from Playwright Inspector
    //await page.getByRole('textbox', { name: 'Enter your password' }).fill('1234')
    await page.locator('[placeholder="Enter your password"]').fill('1234')

    await page.waitForSelector('[id="log-in"]', { timeout: 4000 })
    //got locator from Playwright Inspector
    //await page.getByRole('link', { name: 'Sign in' }).click()
    await page.locator('[id="log-in"]').click()

})

test('Login Demo Test2', async ({ page }) => {

    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    await page.pause()

    await page.getByRole('textbox', { name: 'Username' }).click();
    await page.getByRole('textbox', { name: 'Username' }).fill('Admin');
    await page.getByRole('textbox', { name: 'Password' }).click();
    await page.getByRole('textbox', { name: 'Password' }).fill('admin123');
    await page.getByRole('button', { name: 'Login' }).click();
    await page.getByRole('listitem').filter({ hasText: 'AdminAuto User' }).locator('i').click();
    await page.getByRole('menuitem', { name: 'Logout' }).click();

})

test.only('Login Demo Test3', async ({ page }) => {

    //await page.pause()
    await page.goto('https://www.saucedemo.com/');
    await page.locator('[data-test="username"]').click();
    await page.locator('[data-test="username"]').fill('standard_user');
    await page.locator('[data-test="password"]').click();
    await page.locator('[data-test="password"]').fill('secret_sauce');
    await page.locator('[data-test="login-button"]').click();
    await page.getByRole('button', { name: 'Open Menu' }).click();
    await page.locator('[data-test="logout-sidebar-link"]').click();

})