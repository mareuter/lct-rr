import full_moon from '../../assets/full_moon.png'

const LctLogo = () => {
  return (
    <div className="flex flex-row items-center leading-none">
      <img
        src={full_moon}
        alt="Full Moon"
        sizes="auto"
        width="300px"
        height="300px"
      />
      <p className="text-xl sm:text-2xl">Lunar Club Tools</p>
    </div>
  )
}

export default LctLogo
