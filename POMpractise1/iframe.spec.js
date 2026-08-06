class iframe{
    constructor(page)
    {
this.page=page;
this.frameLocator=page.frameLocator('#courses-iframe');
    }
    async iframeHandling()
    {
const iframe = await this.frameLocator;
console.log(await iframe.getByText('contact@rahulshettyacademy.com').isVisible());
await iframe.getByRole('link', { name: 'VIEW ALL COURSES' }).click(); 
const BrowseProductsTitle=await iframe.getByText('Browse products').isVisible();
console.log(BrowseProductsTitle);
    }
}
module.exports={iframe};