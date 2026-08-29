
const {test, expect} = require('@playwright/test');
//import{test,expect} from '@playwright/test'

//const {hel,helwor} = require('./demo/hello')
//import { hel,helwor } from './demo/hello'

//console.log(hel());
//console.log(helwor());
    
test('My First Test', async ({page}) => 
{
    await page.goto('https://google.com');
    await expect(page).toHaveTitle('Google');
})