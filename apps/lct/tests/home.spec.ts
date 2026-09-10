import { test, expect } from '@playwright/test'
import dashboardInfo from '@repo/data/query/dashboard.json' with { type: 'json' }

test.describe('Main app interactions', () => {
  test.beforeEach(async ({ page }) => {
    await page.route('**/dashboard*', async (route) => {
      await route.fulfill({ status: 200, json: dashboardInfo })
    })
    await page.goto('/')
  })

  test('Does app launch', async ({ page }) => {
    await expect(page).toHaveTitle(/Lunar Club Tools/)
    // Ensure info boxes are rendered
    await expect(
      page.getByRole('heading', { name: 'Current Visibility' }),
    ).toBeVisible()
    await expect(page.getByText('DOWN')).toBeVisible()
    await expect(
      page.getByRole('heading', { name: 'Current Phase' }),
    ).toBeVisible()
    await expect(page.getByText('FULL MOON')).toBeVisible()
    await expect(
      page.getByRole('heading', { name: 'Next Phase' }),
    ).toBeVisible()
    await expect(
      page.getByRole('heading', { name: 'Lunar Club Summary' }),
    ).toBeVisible()
    await expect(
      page.getByRole('heading', { name: 'Lunar Two Summary' }),
    ).toBeVisible()
  })

  test('Cycle side bar menu', async ({ page }) => {
    await expect(
      page.getByRole('link').filter({ hasText: 'About' }),
    ).not.toBeInViewport()
    await page.getByRole('button').filter({ hasText: 'Side Menu' }).click()
    await expect(
      page.getByRole('link').filter({ hasText: 'About' }),
    ).toBeInViewport()
    await page.getByText('Lunar Club Tools').first().click()
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
