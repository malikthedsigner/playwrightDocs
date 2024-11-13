import { test, expect } from '@playwright/test';

test('A/B Testing', async ({ page }) => {
    await page.goto('https://the-internet.herokuapp.com/');
    await page.getByRole('link', { name: 'A/B Testing' }).click();
    await page.goto('https://the-internet.herokuapp.com/');
});


test('Add & Remove', async ({ page }) => {
    await page.goto('https://the-internet.herokuapp.com/');
    await page.getByRole('link', { name: 'Add/Remove Elements' }).click();
    await page.getByRole('button', { name: 'Add Element' }).click();
    await page.getByRole('button', { name: 'Add Element' }).click();
    await page.getByRole('button', { name: 'Add Element' }).click();
    await page.getByRole('button', { name: 'Delete' }).nth(1).click();
    await page.getByRole('button', { name: 'Delete' }).first().click();
    await page.getByRole('button', { name: 'Delete' }).click();
});

test('Broken Images', async ({ page }) => {
    await page.goto('https://the-internet.herokuapp.com/');
   
    await page.getByRole('link', { name: 'Broken Images' }).click();
    await page.goBack;
  
    await page.getByRole('link', { name: 'Challenging DOM' }).click();
    await page.getByRole('row', { name: 'Iuvaret0 Apeirian0 Adipisci0' }).getByRole('link').first().click();
    await page.getByRole('row', { name: 'Iuvaret2 Apeirian2 Adipisci2' }).getByRole('link').first().click();
    await page.getByRole('row', { name: 'Iuvaret9 Apeirian9 Adipisci9' }).getByRole('link').nth(1).click();
    await page.goto('https://the-internet.herokuapp.com/');
  });

  test('Checkbox', async ({ page }) => {
    await page.goto('https://the-internet.herokuapp.com/');
    await page.getByRole('link', { name: 'Checkboxes' }).click();
    await expect(page.getByText('checkbox 1 checkbox')).toBeVisible();
    await page.getByRole('checkbox').nth(1).uncheck();
    await expect(page.getByText('checkbox 1 checkbox')).toBeVisible();
    await page.getByRole('checkbox').first().check();
  });