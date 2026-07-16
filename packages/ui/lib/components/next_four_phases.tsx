import { type FormattedPhase, type PhaseList } from '../definitions'
import PhaseCard from './phase_card'
import { formatTimeWithMinutesSplit } from '../helpers/formatters'

const NextFourPhases = ({
  phaseList,
  timezone,
}: {
  phaseList: PhaseList
  timezone: string
}) => {
  const emptyPhase: FormattedPhase = {
    phaseName: undefined,
    phaseDate: '0000-00-00',
    phaseTime: '00:00 UTC',
  }

  let nextFourPhases: FormattedPhase[] = new Array(4)
  if (Object.entries(phaseList).length === 0) {
    nextFourPhases.fill(emptyPhase)
  } else {
    nextFourPhases = []
    for (const [_index, value] of Object.entries(phaseList)) {
      // console.log(_index)
      // console.log(value.datetime)
      // console.log(timezone)
      const formatted = formatTimeWithMinutesSplit(value.datetime, timezone)
      nextFourPhases.push({
        phaseName: value.phase,
        phaseDate: formatted.date,
        phaseTime: formatted.time,
      })
    }
  }

  return (
    <div>
      <h1 className="xs:text-4xl pb-2 pl-8 text-2xl">Next Four Phases</h1>
      <div>
        {nextFourPhases.map((phase, index) => (
          <div key={index} className="px-2 pb-2">
            <PhaseCard {...phase} />
          </div>
        ))}
      </div>
    </div>
  )
}

export default NextFourPhases
