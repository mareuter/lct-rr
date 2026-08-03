import type { DateContextType } from './date_context'
import type { GeoLocationContextType } from './geolocation_context'
import { createUrl } from './urls'

export const getData = async (
  api: string,
  dateCtx: DateContextType,
  geoLocCtx: GeoLocationContextType,
) => {
  const url = createUrl(api, dateCtx, geoLocCtx)
  const response = await fetch(url)
  const data = await response.json()
  return data
}
