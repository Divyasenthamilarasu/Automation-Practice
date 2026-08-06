class tableValue2
{
constructor(page)
{
        this.page=page;
        this.valueLocator2=page.locator('.left-align #product tbody tr td');
}

async pickValue2(tableValue)
{
       const valueLocator=this.valueLocator2;
const valueCount=await valueLocator.count()
for(let i=0;i<valueCount;i++)
{
  const cellValue=await valueLocator.nth(i).textContent();
  if(cellValue.includes('0'))
  {
    const priceValue=await valueLocator.nth(i-1).textContent();
    console.log(priceValue);
  }
}
}
}
module.exports={tableValue2};