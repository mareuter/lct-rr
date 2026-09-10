import { test, expect } from '@playwright/test'
import dashboardInfo from '@repo/data/query/dashboard.json' with { type: 'json' }

test('Does app launch', async ({ page }) => {
  await page.route('**/dashboard*', async (route) => {
    await route.fulfill({ status: 200, json: dashboardInfo })
  })
  await page.goto('/')
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
  await expect(page.getByRole('heading', { name: 'Next Phase' })).toBeVisible()
  await expect(
    page.getByRole('heading', { name: 'Lunar Club Summary' }),
  ).toBeVisible()
  await expect(
    page.getByRole('heading', { name: 'Lunar Two Summary' }),
  ).toBeVisible()
})
