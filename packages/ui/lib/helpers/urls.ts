import type { DateContextType } from './date_context'
import type { GeoLocationContextType } from './geolocation_context'

const WEB_API = 'https://lct-web.onrender.com'

export const createUrl = (
  api: string,
  dateCtx: DateContextType,
  geoLocCtx: GeoLocationContextType,
): string => {
  const timestamp = dateCtx.date.getTime() / 1000.0
  const params = new URLSearchParams({
    date: timestamp.toString(),
    lat: geoLocCtx.location.latitude.toString(),
    lon: geoLocCtx.location.longitude.toString(),
  })

  if (api == 'moon_info') {
    params.append('tz', geoLocCtx.location.timezone)
  }

  const url = new URL(api, WEB_API)
  params.forEach((value, key) => {
    url.searchParams.set(key, value)
  })

  return url.toString()
}
