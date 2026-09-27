import { type ReactNode } from 'react'
import { describe, expect, it, vi } from 'vitest'
import { render } from 'vitest-browser-react'
import DateProvider from '../helpers/date-provider'
import DateTester from './date-tester'

const AllTheProviders = ({ children }: { children: ReactNode }) => {
  return <DateProvider>{children}</DateProvider>
}

describe('Test Date Context', () => {
  it('Render the date', async () => {
    const fixedDate = new Date(2026, 6, 2, 19, 30, 15)
    vi.setSystemTime(fixedDate)
    const screen = await render(<DateTester />, { wrapper: AllTheProviders })
    const locator = screen.getByRole('paragraph')
    await expect.poll(() => locator).toHaveTextContent(fixedDate.toString())
  })
})
