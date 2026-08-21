import { test, expect } from '@playwright/test'

test('Has about page', async ({ page }) => {
  await page.goto('./about')
  await expect(page.getByRole('heading', { name: 'Version' })).toBeVisible()
  await expect(page.getByRole('heading', { name: 'Notes' })).toBeVisible()
})
