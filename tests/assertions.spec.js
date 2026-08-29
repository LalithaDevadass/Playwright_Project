import test, {page,expect} from '@playwright/test'

test('Assertions Demo',async({page}) => {

    await page.goto('https://kitchen.applitools.com')
    await page.pause()
    //Assertions
    //check element present or not
    await expect(page.getByRole('heading', { name: 'The Kitchen' })).toHaveCount(1)
    if (await page.$('heading', { name: 'The Kitchen' })){
        await page.getByRole('heading', { name: 'The Kitchen' }).click()
    }

    //check element hidden or visible
    await expect(page.getByRole('heading', { name: 'The Kitchen' })).toBeVisible()
    //await expect.soft(page.getByRole('heading', { name: 'The Kitchen' })).toBeHidden()

    //check element enabled or disabled
    await expect(page.getByRole('heading', { name: 'The Kitchen' })).toBeEnabled()
    //await expect.soft(page.getByRole('heading', { name: 'The Kitchen' })).toBeDisabled()

    //check text
    await expect(page.getByRole('heading', { name: 'The Kitchen' })).toHaveText('The Kitchen')
    await expect.soft(page.getByRole('heading', { name: 'The Kitchen' })).not.toHaveText('ABCD')

    //check attribute value
    //if you know the exact attribute
    await expect(page.getByRole('heading', { name: 'The Kitchen' })).toHaveAttribute('class','chakra-heading css-dpmy2a')
    //if you don't know the exact attribute
    await expect(page.getByRole('heading', { name: 'The Kitchen' })).toHaveAttribute('class', /.*css-dpmy2a/)
    await expect(page.getByRole('heading', { name: 'The Kitchen' })).toHaveClass(/.*css-dpmy2a/)

    //check page url and title
    //using full url
    await expect(page).toHaveURL('https://kitchen.applitools.com')
    //using partial url
    await expect(page).toHaveURL(/kitchen.applitools.com/)
    //using title
    await expect(page).toHaveTitle(/.*Kitchen/)

    await page.pause()
    //visual validation with screenshot
    await expect(page).toHaveScreenshot()

})