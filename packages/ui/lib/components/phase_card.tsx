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
  phaseName,
  phaseDate,
  phaseTime,
}: {
  phaseName: string | undefined
  phaseDate: string
  phaseTime: string
}) => {
  let phaseImage
  if (phaseName === undefined) {
    phaseImage = phase_placeholder
  } else {
    phaseImage = moonPhaseIcons[phaseName as keyof PhaseIcon]
  }

  return (
    <div className="xs:max-w-md grid grid-cols-2 rounded-md border-2">
      <div className="align-center flex aspect-square items-center pl-2">
        <img
          src={phaseImage}
          alt="Moon phase image"
          sizes="auto"
          width="300px"
          height="300px"
        />
      </div>
      <div className="grid grid-rows-2 justify-center-safe">
        <p className="xs:text-4xl flex items-center pt-4 text-2xl">
          {phaseDate}
        </p>
        <p className="xs:text-4xl flex items-center pb-4 text-2xl">
          {phaseTime}
        </p>
      </div>
    </div>
  )
}

export default PhaseCard
