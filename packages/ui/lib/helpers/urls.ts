import type { LocationWithTz } from './geolocation-context'

const WEB_API = 'https://lct-web.onrender.com'

export const createUrl = (
  api: string,
  date: Date,
  location: LocationWithTz,
): string => {
  const timestamp = date.getTime() / 1000.0
  const params = new URLSearchParams({
    date: timestamp.toString(),
    lat: location.latitude.toString(),
    lon: location.longitude.toString(),
  })

  if (api == 'moon_info') {
    params.append('tz', location.timezone)
  }

  const url = new URL(api, WEB_API)
  params.forEach((value, key) => {
    url.searchParams.set(key, value)
  })

  return url.toString()
}
