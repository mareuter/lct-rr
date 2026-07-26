import { useEffect, useState, type ReactNode } from 'react'

import GeoLocationContext, {
  type GeoLocationContextType,
  type Location,
} from './geolocation_context'

const GeoLocationProvider = ({ children }: { children: ReactNode }) => {
  const [location, setLocation] = useState({
    latitude: 0,
    longitude: 0,
    good: false,
  } as Location)

  useEffect(() => {
    function fetchPosition(pos: GeolocationPosition) {
      console.log('D')
      setLocation({
        latitude: pos.coords.latitude,
        longitude: pos.coords.longitude,
        good: true,
      })
    }

    function showError(error: GeolocationPositionError) {
      let message
      switch (error.code) {
        case GeolocationPositionError.PERMISSION_DENIED:
          console.log('CCCCC')
          message = 'User denied the request for Geolocation.'
          break
        case GeolocationPositionError.POSITION_UNAVAILABLE:
          message = 'Location information is unavailable.'
          break
        case GeolocationPositionError.TIMEOUT:
          message = 'The request to get user location timed out.'
          break
        default:
          message = 'An unknown error occurred.'
          break
      }
      message += ' Using average latitude/longitude from timezone.'
      message += ' Inaccurate information shown in italics!'
      console.log('CCC')
      alert(message)
      setLocation({
        latitude: 0,
        longitude: 0,
        good: false,
      })
    }

    navigator.geolocation.getCurrentPosition(fetchPosition, showError)
  }, [])

  const context: GeoLocationContextType = { location, setLocation }

  return <GeoLocationContext value={context}>{children}</GeoLocationContext>
}

export default GeoLocationProvider
