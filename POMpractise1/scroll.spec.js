class scroll{
    constructor(page)
{
        this.page=page;
        this.scroll=page.locator('.tableFixHead');
        this.locator=page.locator('.tableFixHead #product tbody tr td');
       this.total= page.locator('.totalAmount')
}

async scrollFunctionality(cell)
{

await this.scroll.scrollIntoViewIfNeeded();
const values=await this.locator;
const countcell=await values.count();
for(let i=0;i<countcell;i++)
{
  const cellValue=await values.nth(i).textContent();
  if(cellValue.includes(cell))
  {
    const Position=await values.nth(i+1).textContent();
const city=await values.nth(i+2).textContent();
const Amount=await values.nth(i+3).textContent();
    console.log("Position: " + Position + ", City: " + city + ", Amount: " + Amount);
  }
}
console.log(await this.total.textContent());
}
}
module.exports={scroll};