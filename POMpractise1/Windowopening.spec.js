class WindowPage
{
constructor(page)
    {
        this.page=page;
        this.context=page.context();
        this.openWindowButton=page.locator('#openwindow');
      
    }
    async clickOpenWindowButton()
    {
const [newPage]= await Promise.all([this.context.waitForEvent('page'),this.openWindowButton.click()]);
   await newPage.waitForLoadState();
   console.log(await newPage.url());
   await newPage.bringToFront()
   await newPage.waitForTimeout(8000)
   await newPage.close();
   return newPage;

    }
}
module.exports={WindowPage};