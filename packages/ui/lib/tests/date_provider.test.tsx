import { type ReactNode } from 'react'
import { describe, expect, it } from 'vitest'
import { render } from 'vitest-browser-react'
import DateProvider from '../helpers/date_provider'
import DateTester from './date_tester'

const AllTheProviders = ({ children }: { children: ReactNode }) => {
  return <DateProvider>{children}</DateProvider>
}

describe('Test Date Context', () => {
  it('Render the date', async () => {
    const screen = await render(<DateTester />, { wrapper: AllTheProviders })
    const locator = screen.getByRole('paragraph')
    await expect.poll(() => locator).toHaveTextContent(new Date().toString())
  })
})
