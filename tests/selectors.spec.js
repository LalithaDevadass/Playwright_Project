import { test, expect} from '@playwright/test'

test('Selector Demo', async({page}) => {

    await page.goto('https://www.saucedemo.com/')
    await page.pause()
    //using any object property
    await page.click('id=user-name')
    await page.locator('id=user-name').fill('Edison')
    await page.locator('id=user-name').fill('Einstein')

    //using CSS selector - #login-button
    await page.locator('#login-button').click()

    //usinh XPath
    await page.locator('xpath=//input[@name="login-button"]').click()
    await page.locator('//input[@name="login-button"]').click()

    //using Text
    await page.locator('text=LOGIN').click()
    await page.locator('input:has-text("LOGIN")').click()

});