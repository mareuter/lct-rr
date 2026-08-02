import { useEffect, useState, useRef, type ReactNode } from 'react'

import GeoLocationContext, {
  type GeoLocationContextType,
  type Location,
} from './geolocation_context'

import { getAverageTimezoneCoordinates } from './average_timezone_coordinates'

const GeoLocationProvider = ({ children }: { children: ReactNode }) => {
  const timezone = useRef(Intl.DateTimeFormat().resolvedOptions().timeZone)
  const [location, setLocation] = useState({
    latitude: 0,
    longitude: 0,
    good: false,
    timezone: 'UTC',
  } as Location)

  useEffect(() => {
    function fetchPosition(pos: GeolocationPosition) {
      setLocation({
        latitude: pos.coords.latitude,
        longitude: pos.coords.longitude,
        good: true,
        timezone: timezone.current,
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
      const avgCoordinates = getAverageTimezoneCoordinates(timezone.current)
      setLocation({
        latitude: avgCoordinates![0]!,
        longitude: avgCoordinates![1]!,
        good: false,
        timezone: timezone.current,
      })
    }

    navigator.geolocation.getCurrentPosition(fetchPosition, showError)
  }, [])

  const context: GeoLocationContextType = { location, setLocation }

  return <GeoLocationContext value={context}>{children}</GeoLocationContext>
}

export default GeoLocationProvider
