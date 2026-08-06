class Button
{
    
constructor(page)
{
this.page=page;
this.logoLocator=page.locator(".logoClass");
this.title=page.title()
this.PracticePageHeading=page.getByRole('heading',{name:'Practice Page'})
this.radioLocator=page.locator('input[value="radio2"]')
this.autocomplete=page.locator('#autocomplete')
this.checkBox=page.locator('#checkBoxOption2')
this.keyboard=page.keyboard
}

async clickButton(country)
{
await this.logoLocator.isVisible();
console.log(await this.title)
console.log(await this.PracticePageHeading.isVisible());
await this.radioLocator.click();
await this.autocomplete.fill(country);
await this.keyboard.press('Enter')
console.log(await this.autocomplete.inputValue())
await this.checkBox.check()
}
}
module.exports={Button};