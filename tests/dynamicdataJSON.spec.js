const {test,expect} = require('@playwright/test');
const testData=JSON.parse(JSON.stringify(require("../testdata.json")));
const testData1=JSON.parse(JSON.stringify(require("../testdata2.json")));



// for(const data of testData)
// {
// test(`dynamicdata- ${data.email}`,async ({page})=>
// {
//     await page.goto("https://freelance-learn-automation.vercel.app/login");
//     await page.locator("#email1").fill(data.email);
//     await page.locator("#password1").fill(data.password);
//     await page.getByRole("button",{name:'Sign in'}).click()
//     page.pause()
// })
// }

for(const data of testData1)
{
test(`signin-${data.Name}`,async({page})=>
{
     await page.goto("https://freelance-learn-automation.vercel.app/login");
     await page.getByRole("link",{name:'New user? Signup'}).click();
     page.waitForLoadState('domcontentloaded');
await page.locator("#name").fill(data.Name);
await page.locator("#email").fill(data.email);
await page.locator("#password").fill(data.Password);
for(const interest of data.Interest)
{
await page.locator(".interest-div").getByLabel(`${interest}`,{exact:true}).check();
}
    await page.locator(".genders-div").locator(`input[value="${data.Gender}"]`).check();

await page.locator("#state").selectOption(data.State);
await page.locator("#hobbies").selectOption(data.Hobbies);
console.log(await page.getByRole("button",{name:'Sign up'}).isEnabled());
})
}