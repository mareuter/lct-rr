import {
  formatCoordinateLabel,
  formatTimeWithSeconds,
} from '../helpers/formatters'
import { type LocationWithTz } from '../helpers/geolocation-context'

const Footer = ({
  currentDate,
  currentLocationWithTz,
}: {
  currentDate: Date
  currentLocationWithTz: LocationWithTz
}) => {
  let coordStyling = 'no-italic'
  if (!currentLocationWithTz.good) {
    coordStyling = 'italic'
  }

  return (
    <div className="max-w-xs shadow-md shadow-gray-800 dark:shadow-gray-200">
      <hr />
      <div className="grid grid-cols-6">
        <p className="col-span-2 pl-1">Date:</p>
        <p className="col-span-4">
          {formatTimeWithSeconds(
            currentDate.getTime() / 1000.0,
            currentLocationWithTz.timezone,
            true,
            true,
          )}
        </p>
        <p className="col-span-2 pl-1">Location:</p>
        <p className={coordStyling + ' col-span-2'}>
          {formatCoordinateLabel(currentLocationWithTz.latitude, 'N S')}
        </p>
        <p className={coordStyling + ' col-span-2'}>
          {formatCoordinateLabel(currentLocationWithTz.longitude, 'E W')}
        </p>
      </div>
    </div>
  )
}

export default Footer
