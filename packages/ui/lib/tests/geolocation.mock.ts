import { vi } from 'vitest'

export const mockGoodGeoLocation = {
  getCurrentPosition: vi.fn((success, _error, _options) => {
    success({
      coords: {
        latitude: 35.96,
        longitude: -84.32,
      },
    })
  }),
  watchPosition: vi.fn(),
}

export const mockBadGeoLocation = {
  getCurrentPosition: vi.fn((_success, error, _options) => {
    error({
      code: GeolocationPositionError.PERMISSION_DENIED,
    })
  }),
  watchPosition: vi.fn(),
}
