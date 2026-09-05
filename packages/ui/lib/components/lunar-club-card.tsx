import { StarIcon } from '@heroicons/react/24/solid'

import type { LunarClubSummary } from '../definitions'
import InfoBox from './info-box'

const LunarClubCard = ({ summary }: { summary: LunarClubSummary }) => {
  const styling = 'size-6 xs:size-8'
  let timeEventsIconStyling = styling
  if (summary.time_events) {
    timeEventsIconStyling += ' text-blue-500'
  }
  let phaseEventsIconStyling = styling
  if (summary.phase_events) {
    phaseEventsIconStyling += ' text-blue-500'
  }

  return (
    <InfoBox title="Lunar Club Summary">
      <div className="grid grid-cols-5 grid-rows-2 items-center justify-center justify-items-center gap-x-1 px-1 pt-1 text-center">
        <p className="xs:text-base text-sm">Time Events</p>
        <p className="xs:text-base text-sm">Phase Events</p>
        <p className="xs:text-base text-sm">Naked Eye</p>
        <p className="xs:text-base text-sm">Binocular</p>
        <p className="xs:text-base text-sm">Telescope</p>
        <StarIcon className={timeEventsIconStyling} />
        <StarIcon className={phaseEventsIconStyling} />
        <p className="xs:text-lg">{summary.naked_eye}</p>
        <p className="xs:text-lg">{summary.binocular}</p>
        <p className="xs:text-lg">{summary.telescope}</p>
      </div>
    </InfoBox>
  )
}

export default LunarClubCard
