import phase_placeholder from '../../assets/phase_placeholder.png'
import first_quarter from '../../assets/fq_moon.png'
import full_moon from '../../assets/full_moon.png'
import new_moon from '../../assets/new_moon.png'
import third_quarter from '../../assets/tq_moon.png'
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
    <div className="xs:max-w-md flex flex-row justify-evenly rounded-md border-2 bg-gray-300 py-2 shadow-md shadow-gray-600 dark:bg-gray-600 dark:shadow-gray-400">
      <div className="align-center flex aspect-square items-center">
        <img
          src={phaseImage}
          alt="Moon phase image"
          sizes="auto"
          width="100px"
          height="100px"
        />
      </div>
      <div className="grid grid-rows-2 justify-center-safe">
        <p className="xs:text-3xl flex items-center pt-1 text-xl">
          {phaseDate}
        </p>
        <p className="xs:text-3xl flex items-center pb-1 text-xl">
          {phaseTime}
        </p>
      </div>
    </div>
  )
}

export default PhaseCard
