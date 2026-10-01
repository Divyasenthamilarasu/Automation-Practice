const {test, expect} = require('@playwright/test');
const { EventHubPage } = require('../../POMpractise1/EventHubPage.js');


test('sign in and verify Dilli Diwali Mela is visible', async ({ page }) => {
	const email = process.env.EVENTHUB_EMAIL;
	const password = process.env.EVENTHUB_PASSWORD;

	if (!email || !password) {
		throw new Error('Set EVENTHUB_EMAIL and EVENTHUB_PASSWORD before running this test.');
	}

	const eventHubPage = new EventHubPage(page);
	await eventHubPage.openLoginPage();
	await eventHubPage.signIn(email, password);

await expect(page).toHaveURL('https://eventhub.rahulshettyacademy.com/');
	await expect(eventHubPage.dilliDiwaliMela).toBeVisible();
})