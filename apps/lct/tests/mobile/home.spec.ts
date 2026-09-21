import { test, expect } from '@playwright/test'
import dashboardInfo from '@repo/data/query/dashboard.json' with { type: 'json' }

test.describe('Main app interactions', () => {
  test.beforeEach(async ({ page }) => {
    await page.route('**/dashboard*', async (route) => {
      await route.fulfill({ status: 200, json: dashboardInfo })
    })
    await page.goto('/')
  })

  test('Cycle side bar menu', async ({ page }) => {
    await expect(
      page.getByRole('link').filter({ hasText: 'About' }),
    ).not.toBeInViewport()
    await page.getByRole('button').filter({ hasText: 'Side Menu' }).click()
    await expect(
      page.getByRole('link').filter({ hasText: 'About' }),
    ).toBeInViewport()
    await page.getByText('days old').first().click()
    await expect(
      page.getByRole('link').filter({ hasText: 'About' }),
    ).not.toBeInViewport()
  })

  test('Navigate to about page', async ({ page }) => {
    await page.getByRole('button').filter({ hasText: 'Side Menu' }).click()
    await page.getByRole('link').filter({ hasText: 'About' }).click()

    await expect(
      page.getByRole('heading', { name: 'Lunar Club Tools' }),
    ).toBeVisible()
    await expect(page.getByRole('heading', { name: 'Version' })).toBeVisible()
    await expect(page.getByRole('heading', { name: 'Notes' })).toBeVisible()
  })
})
