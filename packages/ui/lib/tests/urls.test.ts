import { afterAll, beforeAll, describe, expect, it, vi } from 'vitest'

import type { DateContextType } from '../helpers/date_context'
import type { GeoLocationContextType } from '../helpers/geolocation_context'
import { dateContext, geoLocationContext } from './contexts.mock'
import { createUrl } from '../helpers/urls'

let date: DateContextType
let geoLoc: GeoLocationContextType

describe('Test URL combinations', () => {
  beforeAll(() => {
    date = dateContext
    geoLoc = geoLocationContext
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
