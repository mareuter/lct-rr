import phase_placeholder from '../../assets/phase_placeholder.png'
import first_quarter from '../../assets/first_quarter.png'
import full_moon from '../../assets/full_moon.png'
import new_moon from '../../assets/new_moon.png'
import third_quarter from '../../assets/third_quarter.png'
import { type PhaseIcon } from '../definitions'

const moonPhaseIcons: PhaseIcon = {
  new_moon: new_moon,
  first_quarter: first_quarter,
  full_moon: full_moon,
  last_quarter: third_quarter,
}

const PhaseCard = ({
  phase_name,
  phase_date,
  phase_time,
}: {
  phase_name: string | undefined
  phase_date: string
  phase_time: string
}) => {
  let phase_image
  if (phase_name === undefined) {
    phase_image = phase_placeholder
  } else {
    phase_image = moonPhaseIcons[phase_name as keyof PhaseIcon]
  }

  return (
    <div className="grid grid-cols-2 rounded-md border-4">
      <div className="aspect-square align-bottom">
        <img src={phase_image} alt="Moon phase image" sizes="auto" />
      </div>
      <div className="grid grid-rows-2 justify-center-safe">
        <p className="flex items-center text-2xl">{phase_date}</p>
        <p className="flex items-center text-2xl">{phase_time}</p>
      </div>
    </div>
  )
}

export default PhaseCard
