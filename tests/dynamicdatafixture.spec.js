 //const {test,td}=require('../Fixturedata/multilogin');
//const {test,td} = require('../Fixturedata/singlelogin');


//*****multilogin */
// for (const testdata of td)
// {
//  test(`login fixture-${testdata.email}`,async ({page})=>
// {
//     await page.goto("https://freelance-learn-automation.vercel.app/login");
//     await page.locator("#email1").fill(testdata.email);
//     await page.locator("#password1").fill(testdata.password);
//     await page.getByRole("button",{name:'Sign in'}).click()
//     //await page.pause()
// })
// }


//******single login */
//  test("login fixture",async ({page,login})=>
// {
//     await page.goto("https://freelance-learn-automation.vercel.app/login");
//     await page.locator("#email1").fill(login.email);
//     await page.locator("#password1").fill(login.password);
//     await page.getByRole("button",{name:'Sign in'}).click()
// });




const {test,testdata}=require('../Fixturedata/Multilogin2')
for(const data of testdata)
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