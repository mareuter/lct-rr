import { use } from 'react'
import GeoLocationContext from '../helpers/geolocation_context'

const GeoLocationTester = () => {
  const { location, setLocation } = use(GeoLocationContext)

  return (
    <div>
      <p title="lat">{location.latitude.toString()}</p>
      <p title="lon">{location.longitude.toString()}</p>
      <p title="good">{location.good.toString()}</p>
    </div>
  )
}

export default GeoLocationTester
