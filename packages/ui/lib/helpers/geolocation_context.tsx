import { createContext, type Dispatch, type SetStateAction } from 'react'

export type Location = {
  latitude: number
  longitude: number
  good: boolean
  timezone: string
}

export type GeoLocationContextType = {
  location: Location
  setLocation: Dispatch<SetStateAction<Location>>
}

const GeoLocationContext = createContext<GeoLocationContextType>(
  {} as GeoLocationContextType,
)

export default GeoLocationContext
