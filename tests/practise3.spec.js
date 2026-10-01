const {test,expect}=require('@playwright/test');
const baseurl='https://www.way2automation.com/automationpracticesite1.html';
const serach1='Red Hoodie';


test('search',async({page})=>{
await page.goto(baseurl);
await page.locator('//a[text()="Products"]').first().click();
page.waitForLoadState('domcontentloaded');
await page.getByRole('checkbox',{name:' T-Shirts'}).uncheck();
await page.locator('#search-input').fill(serach1);
await page.locator('#search-input').press('Enter');
await expect(page.getByText('No products found')).toBeVisible();
await page.locator('#search-input').clear();
await page.locator('#search-input').press('Enter');
const products= page.locator('.text-sm.text-indigo-600.mb-1');
const count=await products.count();
console.log('count:', count);
for(let i=0;i<count;i++)
{
    const productText = await products.nth(i).textContent();
    console.log(productText);
    if(productText!=='T-Shirts')
    {
        console.log('Test passed');
    }
}
})



test('signin',async({page})=>{
await page.goto(baseurl);
const name='Divya';
const email='divya@gmail.com'
const password='divya123';
await page.locator('//a[text()="Signup"]').first().click();
await expect(page.locator('.text-3xl.font-bold.text-center.mb-2')).toHaveText('Create New Account');
await page.locator('#reg-name').fill(name);
await page.locator('#reg-email').fill(email);
await page.locator('#reg-password').fill(password);
page.on('dialog',async dialog=>{
    console.log(dialog.message());
    await dialog.accept();
})
await page.getByRole('button',{name:'Create Account'}).click();

})


test('login',async({page})=>
{
    await page.goto(baseurl);
    await page.locator('//a[text()="Login"]').first().click();
    await page.locator('#login-username').fill('Divya');
    await page.locator('#login-password').fill('admin');
    await page.getByRole('button',{name:'Login'}).click();
    await expect(page.locator('#login-message')).toHaveText('❌ Invalid credentials. Use admin / admin')
})

test('Valid login',async({page})=>
{
    await page.goto(baseurl);
    await page.locator('//a[text()="Login"]').first().click();
    await page.locator('#login-username').fill('admin');
    await page.locator('#login-password').fill('admin');
    await page.getByRole('button',{name:'Login'}).click();
await expect(page.locator('#login-message')).toHaveText('✅ Login successful! Welcome to the demo dashboard.You can now test cart, products, etc.')
//await page.waitForLoadState('domcontentloaded',{timeout:80000});
await page.locator('.text-4xl.font-bold.mb-2').waitFor({state:'visible',timeout:50000});
    console.log(await page.locator('.text-4xl.font-bold.mb-2').isVisible());

})