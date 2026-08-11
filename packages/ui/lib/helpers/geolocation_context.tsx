import { createContext, type Dispatch, type SetStateAction } from 'react'

export type LocationWithTz = {
  latitude: number
  longitude: number
  good: boolean
  timezone: string
}

export type GeoLocationContextType = {
  location: LocationWithTz
  setLocation: Dispatch<SetStateAction<LocationWithTz>>
}

const GeoLocationContext = createContext<GeoLocationContextType>(
  {} as GeoLocationContextType,
)

export default GeoLocationContext
