import { StarIcon } from '@heroicons/react/24/solid'

import type { LunarTwoSummary } from '../definitions'
import InfoBox from './info-box'

const LunarTwoCard = ({ summary }: { summary: LunarTwoSummary }) => {
  let iconStyling = 'size-6 xs:size-8'
  if (summary.altitude_events) {
    iconStyling += ' text-blue-500'
  }

  return (
    <InfoBox title="Lunar Two Summary">
      <div className="grid grid-cols-3 grid-rows-2 items-center justify-center justify-items-center gap-x-1 px-1 pt-1 text-center">
        <p className="xs:text-base text-sm">Landing Sites</p>
        <p className="xs:text-base text-sm">Features</p>
        <p className="xs:text-base text-sm">Altitude Events</p>
        <p className="xs:text-lg">{summary.landing_sites}</p>
        <p className="xs:text-lg">{summary.features}</p>
        <StarIcon className={iconStyling} />
      </div>
    </InfoBox>
  )
}

export default LunarTwoCard
