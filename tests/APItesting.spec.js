const { test, expect, request } = require('@playwright/test');


//Token is Not there, so using storagestate(cookies) to login
test.beforeAll(async ({ browser }) => {
const context=await browser.newContext();
    const page=await context.newPage();
    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
    await page.getByPlaceholder("Username").fill("Admin");
    await page.getByPlaceholder("Password").fill("admin123");
    await page.getByRole('button', { name: ' Login ' }).click();
    await expect(page).toHaveURL(/dashboard/);
    await page.context().storageState({ path: 'auth.json' }); //context()- return current browser context.
})                                  //storageStae- Cache/cookies


test("Testing API", async ({ browser }) => {
    const context = await browser.newContext({storageState: 'auth.json'})
    const page = await context.newPage();
    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index");
    console.log(page.url());
    await expect(page.getByRole('heading', { name: 'Dashboard' })).toBeVisible();
    
})