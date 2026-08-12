import full_moon_icon from '../../assets/full_moon_icon.png'

const LctLogo = () => {
  return (
    <div className="flex flex-row items-center justify-start rounded-md bg-gray-300 py-2 pl-1 sm:h-40 sm:max-w-3xs sm:flex-col sm:justify-end dark:bg-gray-500">
      <img
        src={full_moon_icon}
        alt="Full Moon"
        sizes="auto"
        width="50px"
        height="50px"
      />
      <p className="pl-2 text-2xl sm:pl-0">Lunar Club Tools</p>
    </div>
  )
}

export default LctLogo
