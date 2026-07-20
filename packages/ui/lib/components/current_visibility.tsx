import { direction } from '../helpers/visibility'
import InfoBox from './info_box'

const CurrentVisibility = ({
  altitude,
  azimuth,
}: {
  altitude: number
  azimuth: number
}) => {
  let upOrDown: string
  if (altitude > 0.0) {
    upOrDown = 'UP'
  } else {
    upOrDown = 'DOWN'
  }

  let skyDirection: string
  if (upOrDown === 'UP') {
    skyDirection = direction(azimuth)
  } else {
    skyDirection = '---'
  }

  return (
    <InfoBox title="Current Visibility">
      <div className="flex flex-row flex-nowrap items-center justify-between">
        <p className="text-l xs:text-xl xs:pl-4 pl-2 font-bold">{upOrDown}</p>
        <p className="text-l xs:text-xl xs:pr-4 pr-2 font-bold">
          {skyDirection}
        </p>
      </div>
    </InfoBox>
  )
}

export default CurrentVisibility
