import { useEffect, useState, type ReactNode } from 'react'

import GeoLocationContext, {
  type GeoLocationContextType,
  type LocationWithTz,
} from './geolocation-context'

import { getAverageTimezoneCoordinates } from './average-timezone-coordinates'

const GeoLocationProvider = ({ children }: { children: ReactNode }) => {
  const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone
  const avgCoordinates = getAverageTimezoneCoordinates(timezone)
  const [location, setLocation] = useState({
    latitude: avgCoordinates![0]!,
    longitude: avgCoordinates![1]!,
    good: false,
    timezone: timezone,
  } as LocationWithTz)

  useEffect(() => {
    function fetchPosition(pos: GeolocationPosition) {
      setLocation({
        latitude: pos.coords.latitude,
        longitude: pos.coords.longitude,
        good: true,
        timezone: timezone,
      })
    }

    function showError(error: GeolocationPositionError) {
      let message
      console.log('CCCC')
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
      const avgCoordinates = getAverageTimezoneCoordinates(timezone)
      setLocation({
        latitude: avgCoordinates![0]!,
        longitude: avgCoordinates![1]!,
        good: false,
        timezone: timezone,
      })
    }

    navigator.geolocation.getCurrentPosition(fetchPosition, showError)
  }, [timezone])

  const context: GeoLocationContextType = { location, setLocation }

  return <GeoLocationContext value={context}>{children}</GeoLocationContext>
}

export default GeoLocationProvider
