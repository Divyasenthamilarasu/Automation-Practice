class newTab
{

constructor(page)
{
this.page=page;
this.tab=page.locator('#opentab');
this.context=page.context();
}

async tabOpening()
{
 const [newTab]= await Promise.all([this.context.waitForEvent('page'),this.tab.click()]);
   await newTab.waitForLoadState();
   console.log(await newTab.url());
   await newTab.close();
   return newTab;
}

}
module.exports={newTab};