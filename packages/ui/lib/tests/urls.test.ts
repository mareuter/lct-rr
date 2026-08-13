import { afterAll, beforeAll, describe, expect, it, vi } from 'vitest'

import type { Location } from '../helpers/geolocation-context'
import { dateContext, geoLocationContext } from './contexts.mock'
import { createUrl } from '../helpers/urls'

let date: Date
let geoLoc: Location

describe('Test URL combinations', () => {
  beforeAll(() => {
    date = dateContext.date
    geoLoc = geoLocationContext.location
  })
  afterAll(() => {
    vi.resetAllMocks()
  })

  it('Moon Info', () => {
    const url = createUrl('moon_info', date, geoLoc)
    expect(url).toBe(
      'https://lct-web.onrender.com/moon_info?date=1382133600&lat=35.96&lon=-84.32&tz=America%2FNew_York',
    )
  })

  it('Lunar Club', () => {
    const url = createUrl('lunar_club', date, geoLoc)
    expect(url).toBe(
      'https://lct-web.onrender.com/lunar_club?date=1382133600&lat=35.96&lon=-84.32',
    )
  })

  it('LunarII Club', () => {
    const url = createUrl('lunar_two', date, geoLoc)
    expect(url).toBe(
      'https://lct-web.onrender.com/lunar_two?date=1382133600&lat=35.96&lon=-84.32',
    )
  })
})
