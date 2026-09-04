const {test,expect} = require('@playwright/test'); 
const {readExcel}=require('../utils/excelReader');



test('login',async({page})=>
{
const testData=await readExcel('C://Users//Arasu Divya//Documents//exceldata1.xlsx','login');

await page.goto("https://freelance-learn-automation.vercel.app/login");
for(const data of testData)
{
     await page.locator("#email1").fill(data.email);
    await page.locator("#password1").fill(data.password);
    console.log(await page.locator("#email1").inputValue());
   console.log(await page.locator("#password1").inputValue());
   await page.getByRole("button",{name:'Sign in'}).click();
  page.pause()
}
})

test('signin',async({page})=>
{
const testData=await readExcel('C://Users//Arasu Divya//Documents//exceldata1.xlsx','signin');
await page.goto("https://freelance-learn-automation.vercel.app/login");
 for(const data of testData)
 {
    await page.getByRole("link",{name:'New user? Signup'}).click();
     page.waitForLoadState("domcontentloaded");
await page.locator("#name").fill(data.Name);
await page.locator("#email").fill(data.email);
await page.locator("#password").fill(data.Password);
const interests=data.Interest.split(',');
console.log(interests)
for(const interest of interests)
 {
await page.locator(".interest-div").getByLabel(interest,{exact:true}).check();
 }
    await page.locator(".genders-div").locator(`input[value="${data.Gender}"]`).check();

await page.locator("#state").selectOption(data.State);
await page.locator("#hobbies").selectOption(data.Hobbies);
console.log(await page.getByRole("button",{name:'Sign up'}).isEnabled());
 }

})