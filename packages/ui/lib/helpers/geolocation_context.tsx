import { createContext, type Dispatch, type SetStateAction } from 'react'

export type Location = {
  latitude: number
  longitude: number
  good: boolean
}

export type GeoLocationContextType = {
  location: Location
  setLocation: Dispatch<SetStateAction<Location>>
}

const GeoLocationContext = createContext<GeoLocationContextType>(
  {} as GeoLocationContextType,
)

export default GeoLocationContext
