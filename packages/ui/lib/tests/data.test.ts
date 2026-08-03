import { afterAll, beforeAll, describe, expect, it, vi } from 'vitest'

import type { DateContextType } from '../helpers/date_context'
import type { GeoLocationContextType } from '../helpers/geolocation_context'
import moonInfo from '../data/query/moon_info.json' with { type: 'json' }
import lunarClubInfo from '../data/query/lunar_club.json' with { type: 'json' }
import lunarTwoInfo from '../data/query/lunar_two.json' with { type: 'json' }
import { getData } from '../helpers/data'
import { dateContext, geoLocationContext } from './contexts.mock'

let date: DateContextType
let geoLoc: GeoLocationContextType
const goodResponse = {
  ok: true,
  status: 200,
  statusText: 'OK',
}

describe('Test data fetching', () => {
  beforeAll(() => {
    date = dateContext
    geoLoc = geoLocationContext
  })
  afterAll(() => {
    vi.resetAllMocks()
  })

  it('Moon Info', async () => {
    const mockResponse = {
      ...goodResponse,
      json: async () => moonInfo,
    }
    globalThis.fetch = vi.fn().mockResolvedValue(mockResponse)
    expect(await getData('moon_info', date, geoLoc)).toMatchObject(moonInfo)
  })

  it('Lunar Club', async () => {
    const mockResponse = {
      ...goodResponse,
      json: async () => lunarClubInfo,
    }
    globalThis.fetch = vi.fn().mockResolvedValue(mockResponse)
    expect(await getData('moon_info', date, geoLoc)).toMatchObject(
      lunarClubInfo,
    )
  })

  it('Lunar II Club ', async () => {
    const mockResponse = {
      ...goodResponse,
      json: async () => lunarTwoInfo,
    }
    globalThis.fetch = vi.fn().mockResolvedValue(mockResponse)
    expect(await getData('moon_info', date, geoLoc)).toMatchObject(lunarTwoInfo)
  })
})
