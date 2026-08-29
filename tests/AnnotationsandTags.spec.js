import {test} from '@playwright/test'

//Annotations
test.skip ('skip this test', async({page}) => {

})

test ('not yet ready', async ({page}) => {
    test.fail();
})

test.fixme('test to be fixed', async({page}) => {

})
//we can use test.only to run only the test
test ('slow test', async({page}) => {
    test.slow();
})


test('skip this test with condition', async ({ page, browserName }) => {
  test.skip(browserName === 'firefox', 'Still working on it');
});

//Tags
test('Test login page @smoke', async({page}) => {

})