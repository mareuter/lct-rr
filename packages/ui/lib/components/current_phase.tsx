import InfoBox from './info_box'
import Phase2D from './phase2d'

const CurrentPhase = ({
  phaseName,
  moonAge,
  fraction,
  colong,
}: {
  phaseName: string
  moonAge: number
  fraction: number
  colong: number
}) => {
  const waxing = !(colong >= 90.0 && colong < 270.0)

  return (
    <InfoBox title="Current Phase">
      <div className="flex flex-row flex-nowrap items-center justify-between">
        <p className="text-l xs:text-xl xs:pl-4 pl-2 font-bold">
          {phaseName.toUpperCase()}
        </p>
        <p className="text-l xs:text-xl xs:pr-4 pr-2">
          {moonAge.toFixed(2)} days old
        </p>
      </div>
      <div className="flex flex-row justify-around pb-2">
        <Phase2D fraction={fraction} waxing={waxing} />
      </div>
    </InfoBox>
  )
}

export default CurrentPhase
