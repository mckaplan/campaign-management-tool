
import { test, expect } from '@playwright/test';

test('Campaign Full Scenario', async ({ page }) => {

  await test.step("Campaign Type Page", async () => {
    await page.goto('/');
    await page.route('**/api/campaign-type', (route) => {
      const result = { "payload": [{ "name": "Sponsored Products", "details": "Promote products to shoppers actively searching with related keywords", "id": 1, "url": "http://www.products.com" }, { "name": "Sponsored Brands", "details": "Help shoppers discover your brand and product", "id": 2, "url": "http://www.brand.com" }, { "name": "Sponsored Display", "details": "Grow your business by reaching relevent audience", "id": 3, "url": "http://www.display.com" }] }

      route.fulfill({
        status: 200,
        contentType: 'application/json',
        body: JSON.stringify(result)
      });
    });
    await page.reload();

    const campaignTypeTitle = page.locator('.campaign-types h1');
    await expect(campaignTypeTitle).toHaveText('Choose your campaign type');
    await page.waitForTimeout(3000);

    await page.click('//*[@id="continue-button"][1]');
    await page.waitForURL('**/campaign-detail');
  });

  await test.step("Campaign Detail Page", async () => {
    const campaignDetailTitle = page.locator('.campaign-detail h1');
    await expect(campaignDetailTitle).toHaveText('Set Your Campaign Budget and Duration');
    await page.click('//*[@id="continue-button"]');
    await page.waitForSelector('.error-messages');
    await page.locator('#campaignName').fill("test");
    await page.locator('#dailyBudget').fill("10");
    await page.locator('#startDate').fill("6/13/2023");
    await page.locator('#endDate').fill("6/20/2023");
    const invalidDateLabel = page.locator('.invalid-date');
    await (invalidDateLabel).isVisible();
    await page.waitForTimeout(3000);

    await page.click('//*[@id="continue-button"]');
    await page.waitForURL('**/products-and-ad-group');

  });

  await test.step("Products and Ad group Page", async () => {
    const productsAndAdGroupTitle = page.locator('.products-and-ad-group h1');
    await expect(productsAndAdGroupTitle).toHaveText('Settings');
    await page.route('**/api/ad-group-product', (route) => {
      const result = { "payload": [{ "id": 1, "name": "Product 1", "price": 10, "stock": "In Stock", "SKU": "PM_1010", "added": false }, { "id": 2, "name": "Product 2", "price": 10, "stock": "In Stock", "SKU": "PM_1010", "added": false }, { "id": 3, "name": "Product 3", "price": 10, "stock": "In Stock", "SKU": "PM_1010", "added": false }, { "id": 4, "name": "Product 4", "price": 10, "stock": "In Stock", "SKU": "PM_1010", "added": false }, { "id": 5, "name": "Product 5", "price": 10, "stock": "In Stock", "SKU": "PM_1010", "added": false }] };

      route.fulfill({
        status: 200,
        contentType: 'application/json',
        body: JSON.stringify(result)
      });
    });

    await page.reload();
    await page.locator('#adGroupName').fill("test");
    await page.click('//*[@id="continue-button"]');
    await page.waitForSelector('.error-messages');
    await page.locator('//*[@class="left-panel"][1]//*[contains(@class, "product-item")][1]').waitFor({ state: 'visible' });
    expect(await page.locator('//*[@class="left-panel"][1]//*[contains(@class, "product-item")]').count()).toBe(5);
    await page.locator('//*[@class="left-panel"][1]//*[contains(@class, "product-item")][1]//*[@id="btn"]').click();
    expect(await page.locator('//*[@class="right-panel"][1]//*[contains(@class, "product-item")]').count()).toBe(1);
    await page.waitForTimeout(3000);

    await page.click('//*[@id="continue-button"]');
    await page.waitForURL('**/keyword-list');

  });

  await test.step("Keywords Page", async () => {
    const keywordsTitle = page.locator('//*[@class="product-keywords"]//h1[1]');
    const notification = page.locator('//*[@class="product-keywords"]//*[@id="notification"][1]');
    await expect(keywordsTitle).toHaveText('Keywords');
    await expect(notification).toHaveText('Please Add Keywords!!!');
    await page.route('**/api/keywords', (route) => {
      const result = { "payload": [{ "name": "test1", "bid": 2 }, { "name": "test2", "bid": 4 }, { "name": "test3", "bid": 8 }] };

      route.fulfill({
        status: 200,
        contentType: 'application/json',
        body: JSON.stringify(result)
      });
    });
    await page.reload();
    await page.click('//*[@id="add-button"]');
    await page.locator('//textarea').fill("test1\ntests2\ntests3");
    await page.click('//mat-dialog-actions//button[contains(@class, "mat-primary")]');
    await page.locator('//*[@class="keyword"]').nth(0).waitFor({ state: 'visible' });
    expect(await page.locator('//*[@class="keyword"]').count()).toBe(3);
    await page.locator('//*[@class="keyword"]').nth(1).locator('//button').click();
    expect(await page.locator('//*[@class="keyword"]').count()).toBe(2);
    await page.waitForTimeout(3000);

    await page.click('//*[@id="continue-button"]');
    await page.waitForURL('**/campaign-list');
  });

  await test.step("Campaign List Page", async () => {
    const campaignListTitle = page.locator('.campaigns h1');
    await expect(campaignListTitle).toHaveText('All Campaigns');
    await page.route('**/api/campaigns', (route) => {
      const result = { "payload": [{ "campaignName": "Holiday Favorites1", "dailyBudget": 1, "startDate": "12-06-2023", "endDate": "01-01-1970" }, { "campaignName": "Holiday Favorites2", "dailyBudget": 2, "startDate": "12-06-2023", "endDate": "01-01-1970" }, { "campaignName": "Holiday Favorites2", "dailyBudget": 3, "startDate": "12-06-2023", "endDate": "01-01-1970" }] };

      route.fulfill({
        status: 200,
        contentType: 'application/json',
        body: JSON.stringify(result)
      });
    });
    await page.reload();
    expect(await page.locator('//*[@id="campaign-list"]//tbody//tr').count()).toBe(3);
    await page.locator('//*[@id="search"]').fill('Favorites1');
    await page.locator('//*[@id="search"]').press('Enter');
    expect(await page.locator('//*[@id="campaign-list"]//tbody//tr').count()).toBe(1);
    await page.waitForTimeout(3000);

  });
});
