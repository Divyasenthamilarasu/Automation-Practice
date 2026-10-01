const {test,expect} = require('@playwright/test');

// test.afterEach(async({page},testInfo)=>{
//     //await page.waitForTimeout(3000);
// await page.screenshot({path:testInfo.outputPath('image.png'),fullPage:true});
// });




test('practisetc',async({page})=>{
    await page.goto('https://www.way2automation.com/automationpracticesite1.html');
    await page.getByRole('button',{name:'Start Practicing Elements'}).click();
    page.waitForLoadState('domcontentloaded');
await page.getByPlaceholder('Enter your name').fill("divya");
await page.getByText('Laptop').dragTo(await page.locator('#drop-target'));
await page.getByText('Mouse').dragTo(await page.locator('#drop-target'));
await page.getByText('Keyboard').dragTo(await page.locator('#drop-target'));
//await page.screenshot({path:'screenshotnew.png',fullPage:true});
}
);

test('practise1',async({page})=>{
    await page.goto('https://www.way2automation.com/automationpracticesite1.html');
    await page.getByRole('button',{name:'Start Practicing Elements'}).click();
    page.waitForLoadState('domcontentloaded');
    await page.getByRole('button',{name:'Details'}).click();
    console.log(await page.locator('#tab-content-0').textContent());
     await page.getByRole('button',{name:'Reviews'}).click();
    console.log(await page.locator('#tab-content-1').textContent());
     await page.getByRole('button',{name:'Shipping'}).click();
    console.log(await page.locator('#tab-content-2').textContent());
})

test('jsalert',async({page})=>{
     await page.goto('https://www.way2automation.com/automationpracticesite1.html');
    await page.getByRole('button',{name:'Start Practicing Elements'}).click();
    page.waitForLoadState('domcontentloaded');
    page.on('dialog',async(dialog)=>{
        console.log(dialog.message());
        await dialog.accept();
    })
    await page.getByRole('button',{name:'JS Alert'}).click();
})

test('JSConfirm',async({page})=>{
     await page.goto('https://www.way2automation.com/automationpracticesite1.html');
    await page.getByRole('button',{name:'Start Practicing Elements'}).click();
    page.waitForLoadState('domcontentloaded');
    page.on('dialog',async(dialog)=>{
        console.log(dialog.message());
        if(dialog.type()=='confirm'){
        await dialog.dismiss();
        }
        else
        {
            await dialog.accept();
        }
    })
    await page.getByRole('button',{name:'JS Confirm'}).click();
})


test('JSPrompt',async({page})=>{
     await page.goto('https://www.way2automation.com/automationpracticesite1.html');
    await page.getByRole('button',{name:'Start Practicing Elements'}).click();
    page.waitForLoadState('domcontentloaded');
    page.on('dialog',async(dialog)=>{
        console.log(dialog.message());
        if(dialog.type()=='prompt'){
        await dialog.accept('Divya');
        }
        else
        {
            await dialog.accept();
        }
    })
    await page.getByRole('button',{name:'JS Prompt'}).click();

})

test('Slider',async({page})=>{
     await page.goto('https://www.way2automation.com/automationpracticesite1.html');
    await page.getByRole('button',{name:'Start Practicing Elements'}).click();
    page.waitForLoadState('domcontentloaded');
    await page.locator('#demo-slider').fill('750');
    console.log(await page.locator('#demo-slider').inputValue());
})

test('products',async({page})=>{
        await page.goto('https://www.way2automation.com/automationpracticesite1.html');
        await page.getByRole('button',{name:'Start Practicing Elements'}).click();
        page.waitForLoadState('domcontentloaded');
        await page.locator('//a[text()="Products"]').first().click();
        console.log(await page.locator('.text-4xl.font-bold.mb-2').textContent());
        await page.locator('#price-slider').fill('37');
        console.log(await page.locator('#products-grid').textContent());
        //await page.locator('#products-grid').screenshot('image.jpg');
})

test('Checkbox',async({page})=>{
        await page.goto('https://www.way2automation.com/automationpracticesite1.html');
        await page.getByRole('button',{name:'Start Practicing Elements'}).click();
        page.waitForLoadState('domcontentloaded');
        await page.getByRole('checkbox',{name:' Reading'}).check();
        await page.getByLabel(" Traveling").check();
        await page.getByRole('checkbox',{name:' Gaming'}).check();

})

test('RadioButtons',async({page})=>{
        await page.goto('https://www.way2automation.com/automationpracticesite1.html');
        await page.getByRole('button',{name:'Start Practicing Elements'}).click();
        page.waitForLoadState('domcontentloaded');
await page.locator("input[value='other']").click();
await expect(page.locator("input[value='male']")).not.toBeChecked();

})


test('navigation',async({page})=>{

    await page.goto('https://www.way2automation.com/automationpracticesite1.html');
        await page.getByRole('button',{name:'Start Practicing Elements'}).click();
        page.waitForLoadState('domcontentloaded');
        // const [popup] = await Promise.all([page.context().waitForEvent('popup'),
        //     page.getByRole('button',{name:'Beautiful Modal'}).click()]);
await page.getByRole('button',{name:'Beautiful Modal'}).click();
            await page.waitForLoadState();
            console.log(await page.locator('.modal.bg-white.w-full.max-w-md.mx-4.rounded-3xl.p-8.text-center').textContent());
            await page.getByRole('button',{name:'Close Modal'}).click();
})

test('products2',async({page})=>{
        await page.goto('https://www.way2automation.com/automationpracticesite1.html');
        await page.getByRole('button',{name:'Start Practicing Elements'}).click();
        page.waitForLoadState('domcontentloaded');
        const tshirt="Classic Polo Shirt";
        const slideprice='135';
        await page.locator('//a[text()="Products"]').first().click();
        //console.log(await page.locator('.text-4xl.font-bold.mb-2').textContent());
        await page.locator('#price-slider').fill(slideprice);
       // console.log(await page.locator('#products-grid').textContent());
        await page.getByRole('checkbox',{name:' Jeans'}).uncheck();
        await page.getByRole('checkbox',{name:' Shoes'}).uncheck();
       //const finalproduct=await page.locator('#products-grid').textContent()

       const finalproduct1= page.locator('h4.font-semibold.text-lg.mb-3')
       const count=await finalproduct1.count();
       console.log(count);
       // console.log(finalproduct);
        for(let i=0;i<count;i++)
        {
const name=await finalproduct1.nth(i).allTextContents();
console.log(name);

            //console.log(finalproduct[i]);
            if(name.includes(tshirt))
            {
                await page.getByRole('button',{name:'Add to Cart'}).nth(i).click();
                console.log(await page.getByText(`${tshirt} added to cart!`).isVisible());

            }
        }
await page.locator('.fa-solid.fa-shopping-cart.text-2xl.text-gray-700').click();
const cartContent=await page.locator('#cart-items .font-medium').textContent();
console.log(cartContent);
if(cartContent.includes(tshirt))
{
    page.on('dialog',async(dialog)=>{
        console.log(dialog.message());
        await dialog.accept();
    })
    await page.getByRole('button',{name:'Proceed to Checkout'}).click();
}
console.log(page.url());
});