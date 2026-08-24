const { test, expect } = require('@playwright/test');

test('validar título de Example Domain', async ({ page }) => {
  await page.goto('https://example.com');

  await expect(page).toHaveTitle('Example Domain');
});