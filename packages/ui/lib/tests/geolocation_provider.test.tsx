import { mockBadGeoLocation, mockGoodGeoLocation } from './geolocation.mock'

import { type ReactNode } from 'react'
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest'
import { render } from 'vitest-browser-react'

import GeoLocationProvider from '../helpers/geolocation_provider'
import GeoLocationTester from './geolocation_tester'

const AllTheProviders = ({ children }: { children: ReactNode }) => {
  return <GeoLocationProvider>{children}</GeoLocationProvider>
}

describe('Test GeoLocation Context', () => {
  beforeEach(() => {
    globalThis.alert = vi.fn()
  })

  afterEach(() => {
    vi.restoreAllMocks()
  })

  it('Render default', async () => {
    Object.defineProperty(globalThis.navigator, 'geolocation', {
      configurable: true,
      value: mockBadGeoLocation,
    })

    const screen = await render(<GeoLocationTester />, {
      wrapper: AllTheProviders,
    })

    expect(globalThis.alert).toHaveBeenCalledTimes(1)
    expect(globalThis.alert).toHaveBeenCalledWith(
      'User denied the request for Geolocation. Using average latitude/longitude from timezone. Inaccurate information shown in italics!',
    )

    const latLocator = screen.getByTitle('lat')
    await expect.poll(() => latLocator).toHaveTextContent('0')
    const lonLocator = screen.getByTitle('lon')
    await expect.poll(() => lonLocator).toHaveTextContent('0')
    const goodLocator = screen.getByTitle('good')
    await expect.poll(() => goodLocator).toHaveTextContent('false')
  })

  it('Render good location', async () => {
    Object.defineProperty(globalThis.navigator, 'geolocation', {
      configurable: true,
      value: mockGoodGeoLocation,
    })
    const screen = await render(<GeoLocationTester />, {
      wrapper: AllTheProviders,
    })
    const latLocator = screen.getByTitle('lat')
    await expect.poll(() => latLocator).toHaveTextContent('35.96')
    const lonLocator = screen.getByTitle('lon')
    await expect.poll(() => lonLocator).toHaveTextContent('-84.32')
    const goodLocator = screen.getByTitle('good')
    await expect.poll(() => goodLocator).toHaveTextContent('true')
  })
})
