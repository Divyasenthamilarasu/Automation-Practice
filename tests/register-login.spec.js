const { test, expect } = require('@playwright/test');

test('register, login and navigate to home page', async ({ page }) => {
  const firstName = 'Divya';
  const email = `aaa${Date.now()}@gmail.com`;
  const password = 'a1234b';

  await page.goto('https://rahulshettyacademy.com/client/#/auth/login', { waitUntil: 'domcontentloaded' });

  await page.locator('a[href="#/auth/register"]').click();

  await page.locator('input[placeholder="First Name"]').fill(firstName);
  await page.locator('input[placeholder="Last Name"]').fill('User');
  await page.locator('input[placeholder="email@example.com"]').fill(email);
  await page.locator('input[placeholder="enter your number"]').fill('9876543210');
  await page.locator('select').selectOption('Student');
  await page.getByRole('radio', { name: 'Female' }).check();
  await page.locator('input[placeholder="Passsword"]').fill(password);
  await page.locator('input[placeholder="Confirm Passsword"]').fill(password);
  await page.locator('input[type="checkbox"]').check({ force: true });
  await page.getByRole('button', { name: 'Register' }).click();

  await page.waitForTimeout(4000);

  await page.goto('https://rahulshettyacademy.com/client/#/auth/login', { waitUntil: 'domcontentloaded' });

  await page.locator('input[placeholder="email@example.com"]').fill(email);
  await page.locator('input[placeholder="enter your passsword"]').fill(password);
  await page.getByRole('button', { name: 'Login' }).click();

  await page.waitForTimeout(5000);
  await expect(page).not.toHaveURL(/auth\/login/i, { timeout: 60000 });
  await expect(page.locator('body')).toContainText(/Shop|Products|My Orders|Cart/i, { timeout: 60000 });
});
