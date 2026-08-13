import { vi } from 'vitest'
import type { DateContextType } from '../helpers/date-context'
import type { GeoLocationContextType } from '../helpers/geolocation-context'

export const dateContext: DateContextType = {
  date: new Date(Date.UTC(2013, 9, 18, 22, 0, 0)),
  setDate: vi.fn(),
}

export const geoLocationContext: GeoLocationContextType = {
  location: {
    latitude: 35.96,
    longitude: -84.32,
    good: true,
    timezone: 'America/New_York',
  },
  setLocation: vi.fn(),
}
