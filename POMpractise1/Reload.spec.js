import { expect } from "@playwright/test";



class Reload{
    constructor(page)
    {
        this.page=page;
        this.hover=page.locator('#mousehover');
this.hoverContent=page.locator('.mouse-hover-content');
this.reload=page.locator('.mouse-hover-content a:has-text("Reload")');

    }
    async reloadFunctionality()
    {
await this.hover.hover();
await this.hoverContent.isVisible();

const before = await this.page.evaluate(() => performance.now());
await this.reload.click();
await this.page.waitForLoadState('load');

const after = await this.page.evaluate(() => performance.now());
console.log('Reload occurred:', after < before);
await expect(this.hover).toBeVisible();

    }
}
module.exports={Reload};