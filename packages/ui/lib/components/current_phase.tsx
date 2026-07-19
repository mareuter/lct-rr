import InfoBox from './info_box'

const CurrentPhase = ({
  phaseName,
  moonAge,
}: {
  phaseName: string
  moonAge: number
}) => {
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
    </InfoBox>
  )
}

export default CurrentPhase
