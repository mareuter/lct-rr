import type { PhaseInfo } from '../definitions'
import InfoBox from './info-box'
import PhaseCard from './phase-card'
import { formatTimeWithMinutesSplit } from '../helpers/formatters'

const NextPhase = ({
  phaseList,
  timezone,
}: {
  phaseList: PhaseInfo[]
  timezone: string
}) => {
  const nextPhase = phaseList[0]!
  const formatted = formatTimeWithMinutesSplit(nextPhase.datetime, timezone)

  return (
    <InfoBox title="Next Phase">
      <div className="p-1">
        <PhaseCard
          phaseName={nextPhase.phase}
          phaseDate={formatted.date}
          phaseTime={formatted.time}
        />
      </div>
    </InfoBox>
  )
}

export default NextPhase
