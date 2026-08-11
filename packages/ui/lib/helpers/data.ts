import type { LocationWithTz } from './geolocation_context'
import { createUrl } from './urls'

export const getData = async (
  api: string,
  date: Date,
  location: LocationWithTz,
) => {
  const url = createUrl(api, date, location)
  const response = await fetch(url)
  const data = await response.json()
  return data
}
