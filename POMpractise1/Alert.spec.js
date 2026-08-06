class Alert
{
constructor(page)
{
this.page=page;
this.name=page.locator('#name');
this.alertButton=page.getByRole('button', { name: 'Alert' })
this.confirmButton=page.getByRole('button', { name: 'Confirm' });

}
async alertmessage(name)
{
    await this.name.fill(name);
  this.page.once('dialog', dialog => {
    console.log(`Dialog message: ${dialog.message()}`);
    dialog.dismiss().catch(() => {});
  });
await this.alertButton.click();

await this.name.fill(name);
  this.page.once('dialog', dialog => {
    console.log(`Dialog message: ${dialog.message()}`);
    dialog.dismiss().catch(() => {});
  });
  await this.confirmButton.click();
}

}
module.exports={Alert};