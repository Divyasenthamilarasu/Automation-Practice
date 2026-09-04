const { test, expect } = require('@playwright/test');

test("Validation of elements",async({page})=>
{
    await page.goto("https://demoqa.com/elements");
    page.waitForLoadState('domcontentloaded')
    console.log(await expect(page.getByText("Please select an item from left to start practice.")).toBeVisible());
    await page.getByText("Elements").click();
    await page.getByText("Text Box").click();

})