import {
  formatCoordinateLabel,
  formatTimeWithSecondsSplit,
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

  const formatted = formatTimeWithSecondsSplit(
    currentDate.getTime() / 1000.0,
    currentLocationWithTz.timezone,
    true,
    true,
  )

  return (
    <div className="max-w-xs shadow-md shadow-gray-800 dark:shadow-gray-200">
      <hr />
      <div className="grid grid-cols-6 gap-x-2">
        <p className="col-span-2 pl-1 text-xs">Date:</p>
        <p className="col-span-4 text-xs">{formatted.date}</p>
        <p className="col-span-4 col-start-3 row-start-2 text-xs">
          {formatted.time}
        </p>
        <p className="col-span-2 row-start-3 pr-1 pl-1 text-xs">Location:</p>
        <p className={coordStyling + ' col-span-4 text-xs'}>
          {formatCoordinateLabel(currentLocationWithTz.latitude, 'N S')}
        </p>
        <p className={coordStyling + ' col-span-4 col-start-3 text-xs'}>
          {formatCoordinateLabel(currentLocationWithTz.longitude, 'E W')}
        </p>
      </div>
    </div>
  )
}

export default Footer
