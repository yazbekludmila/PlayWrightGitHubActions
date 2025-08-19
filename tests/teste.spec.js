// tests/teste.spec.js
const { test, expect } = require('@playwright/test');

test('basic test', async ({ page }) => {
  await page.goto('https://react-redux.realworld.io/#/login');

  await page.fill('input[type="email"]', 'alanvoigt@yahoo.com.br');
  await page.press('input[type="email"]', 'Tab');
  await page.type('input[type="password"]', 'test123');
  await page.click('form >> text=Sign in');

  //const html = await page.innerHTML('.feed-toggle');

  // Screenshot
  await page.screenshot({ path: 'SignIn.png', fullPage: true });

  // Exemplo de verificação sucesso 19 agosto
//  await expect(page.locator('.feed-toggle')).toContainText('Global Feed');
});