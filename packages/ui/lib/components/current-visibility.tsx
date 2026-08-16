import { direction } from '../helpers/visibility'
import InfoBox from './info-box'

const CurrentVisibility = ({
  altitude,
  azimuth,
  coordsGood,
}: {
  altitude: number
  azimuth: number
  coordsGood: boolean
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

  let styling = 'text-l xs:text-xl xs:pr-4 pr-2 font-bold'
  if (!coordsGood) {
    styling += ' italic'
  }

  return (
    <InfoBox title="Current Visibility">
      <div className="flex flex-row flex-nowrap items-center justify-between">
        <p className={styling + ' pl-1'}>{upOrDown}</p>
        <p className={styling}>{skyDirection}</p>
      </div>
    </InfoBox>
  )
}

export default CurrentVisibility
