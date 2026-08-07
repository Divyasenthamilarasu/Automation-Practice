//Generated using Claude AI

import { test, expect } from '@playwright/test';

test('filter Recruitment candidates by Senior QA Lead vacancy', async ({ page }) => {
  await page.goto('https://opensource-demo.orangehrmlive.com/');

  // Login with OrangeHRM demo credentials
  await page.getByPlaceholder('Username').fill('Admin');
  await page.getByPlaceholder('Password').fill('admin123');
  await page.getByRole('button', { name: 'Login' }).click();

  // Confirm Dashboard, then open Recruitment
  await expect(page).toHaveURL(/dashboard/);
  await page.getByRole('link', { name: 'Recruitment', exact: true }).click();
  await expect(page).toHaveURL(/recruitment/);

  // Select Vacancy: Senior QA Lead
  const vacancyField = page
    .locator('.oxd-input-group')
    .filter({ hasText: 'Vacancy' })
    .locator('.oxd-select-text');

  await vacancyField.click();
  await page.getByRole('option', { name: 'Senior QA Lead', exact: true }).click();

  // Search
  await page.getByRole('button', { name: 'Search', exact: true }).click();

  // Extract and print result rows
  await page.locator('.oxd-table-body .oxd-table-card').first().waitFor();

  const results = await page
    .locator('.oxd-table-body .oxd-table-card')
    .allTextContents();

  console.log(`Found ${results.length} result(s):`);
  results.forEach((result, index) => {
    console.log(`${index + 1}. ${result.replace(/\s+/g, ' ').trim()}`);
  });
});