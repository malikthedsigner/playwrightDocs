import { test, expect } from '@playwright/test';


test.describe('navigation', async () => {

    test.beforeEach(async ({ page }) => {
        await page.goto('https://playwright.dev/');
      });

    test('Initial', async ({ page }) => {

        await page.getByText("A/B Testing").click;
        await page.goBack;
    });


    test('Add and Remove Element', async ({page}) => {
        await page.getByText("Add/Remove Elements").click;
        await page.goBack;
    });

    test('Basin Auth', async ({page}) => {
        await page.getByText("Basic Auth").click;
        await page.goBack;
    });

    test('Broken Images', async ({page}) => {
        await page.getByText("Broken Images").click;
        await page.goBack;
    });

    test('Challengind DOM', async ({page}) => {
        await page.getByText("Challenging DOM").click;
        await page.goBack;
    });


});