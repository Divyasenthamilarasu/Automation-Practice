const {test,expect} = require('@playwright/test');
   
//web site-https://rahulshettyacademy.com/AutomationPractice/'



//Radiobutton, checkbox, dropdown, autocomplete
test('validating End-to-end page',async({page})=>
{
    await page.goto("https://rahulshettyacademy.com/AutomationPractice/");
    page.waitForLoadState('domcontentloaded')
   // console.log(await page.content());
   await page.locator(".logoClass").isVisible();
   console.log(await page.title())
  console.log(await page.getByRole('heading',{name:'Practice Page'}).isVisible());
  await page.locator('input[value="radio2"]').click();
  await page.locator('#autocomplete').fill('India');
await page.keyboard.press('Enter')
  console.log(await page.locator('#autocomplete').inputValue())
   await page.locator('#checkBoxOption2').check()
})

//New window opening
test('new window',async({page})=>
{
    await page.goto("https://rahulshettyacademy.com/AutomationPractice/");
    page.waitForLoadState('domcontentloaded')
const [newPage]= await Promise.all([page.context().waitForEvent('page'),page.locator('#openwindow').click()]);
   await newPage.waitForLoadState();
   console.log(await newPage.url());
   await newPage.bringToFront()
   await newPage.waitForTimeout(8000)
   await newPage.close();
})


//new tab opening
test('Newtab',async({page})=>
{
    await page.goto("https://rahulshettyacademy.com/AutomationPractice/");
    page.waitForLoadState('domcontentloaded')
    const [newTab]= await Promise.all([page.context().waitForEvent('page'),
      page.locator('#opentab').click()]);
   await newTab.waitForLoadState();
   console.log(await newTab.url());
   await newTab.close();
})

//Alertbox
test('Alertbox', async ({ page }) => {
  await page.goto('https://rahulshettyacademy.com/AutomationPractice/');
await page.locator('#name').fill("Divya");
  page.once('dialog', dialog => {
    console.log(`Dialog message: ${dialog.message()}`);
    dialog.dismiss().catch(() => {});
  });
await page.getByRole('button', { name: 'Alert' }).click();

await page.locator('#name').fill("Divya");
  page.once('dialog', dialog => {
    console.log(`Dialog message: ${dialog.message()}`);
    dialog.dismiss().catch(() => {});
  });
  await page.getByRole('button', { name: 'Confirm' }).click();

});

// Pick only cell that has '0'(exact value)
test('Table pick value 0', async ({ page }) => {
await page.goto('https://rahulshettyacademy.com/AutomationPractice/');
const valueLocator=page.locator('.left-align #product tbody tr td')
const valueCount=await valueLocator.count()
for(let i=0;i<valueCount;i++)
{
  const cellValue=await valueLocator.nth(i).textContent();
  if(cellValue.trim()===('0'))
  {
    const priceValue=await valueLocator.nth(i-1).textContent();
    console.log(priceValue);
  }
}
})

//Pick all any value
test('Table pick any value', async ({ page }) => {
await page.goto('https://rahulshettyacademy.com/AutomationPractice/');
const valueLocator=page.locator('.left-align #product tbody tr td')
const valueCount=await valueLocator.count()
for(let i=0;i<valueCount;i++)
{
  const cellValue=await valueLocator.nth(i).textContent();
  if(cellValue.includes('0'))
  {
    const priceValue=await valueLocator.nth(i-1).textContent();
    console.log(priceValue);
  }
}
})

//scroll functionality
test('Scroll functionality', async ({ page }) => {
await page.goto('https://rahulshettyacademy.com/AutomationPractice/');

await page.locator('.tableFixHead').scrollIntoViewIfNeeded();
const values=await page.locator('.tableFixHead #product tbody tr td');
const countcell=await values.count();
for(let i=0;i<countcell;i++)
{
  const cellValue=await values.nth(i).textContent();
  if(cellValue.includes('Dwayne'))
  {
    const Position=await values.nth(i+1).textContent();
const city=await values.nth(i+2).textContent();
const Amount=await values.nth(i+3).textContent();
    console.log("Position: " + Position + ", City: " + city + ", Amount: " + Amount);
  }
}
console.log(await page.locator('.totalAmount').textContent());
})

//Reload functionality
test('reload Functionality', async ({ page }) => {
await page.goto('https://rahulshettyacademy.com/AutomationPractice/');

await page.locator('#mousehover').hover();
await page.locator('.mouse-hover-content').isVisible();

const before = await page.evaluate(() => performance.now());
await page.locator('.mouse-hover-content a:has-text("Reload")').click();
await page.waitForLoadState('load');

const after = await page.evaluate(() => performance.now());
console.log('Reload occurred:', after < before);
await expect(page.locator('#mousehover')).toBeVisible();
})

//iframe handling
test('iframe handling', async ({ page }) => {
await page.goto('https://rahulshettyacademy.com/AutomationPractice/');
const iframe = await page.frameLocator('#courses-iframe');
console.log(await iframe.getByText('contact@rahulshettyacademy.com').isVisible());
await iframe.getByRole('link', { name: 'VIEW ALL COURSES' }).click(); 
const BrowseProductsTitle=await iframe.getByText('Browse products').isVisible();
console.log(BrowseProductsTitle);
})

//navigation
test('navigation', async ({ page }) => {
await page.goto('https://rahulshettyacademy.com/AutomationPractice/');
await page.getByRole('button', { name: 'Home' }).click();
page.waitForLoadState('load');
console.log(await page.url());
await page.goBack();
page.waitForLoadState('load');
console.log(await page.url());
await page.goForward();
page.waitForLoadState('load');
console.log(await page.url());
})


//Clicking link that opens in a new tab and switching to that tab
test('blinking page', async ({ page }) => {
await page.goto('https://rahulshettyacademy.com/AutomationPractice/');
await page.locator('.blinkingText').isVisible();
const [newPage]=await Promise.all([page.context().waitForEvent('page'),page.locator('#opentab').click()])
console.log(await newPage.url());
})