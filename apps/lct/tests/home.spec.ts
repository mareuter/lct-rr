import { test, expect } from '@playwright/test'
import moonInfo from '@repo/data/query/moon-info.json' with { type: 'json' }

test('Does app launch', async ({ page }) => {
  await page.route('**/moon_info*', async (route) => {
    await route.fulfill({ status: 200, json: moonInfo })
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
  await expect(
    page.getByRole('heading', { name: 'Next Four Phases' }),
  ).toBeVisible()
})
