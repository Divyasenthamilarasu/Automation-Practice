class tableValue1
{
constructor(page)
{
        this.page=page;
        this.valueLocator=page.locator('.left-align #product tbody tr td');
}

async pickValue(tableValue)
{
       const valueLocator=this.valueLocator;
const valueCount=await valueLocator.count()
for(let i=0;i<valueCount;i++)
{
  const cellValue=await valueLocator.nth(i).textContent();
  if(cellValue.trim()===tableValue)
  {
    const priceValue=await valueLocator.nth(i-1).textContent();
    console.log(priceValue);
  }
}
}
}
module.exports={tableValue1};