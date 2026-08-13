const AboutInfo = ({ version }: { version: string }) => {
  return (
    <div className="xs:max-w-md flex flex-col items-center-safe">
      <h1 className="py-1 text-3xl">Lunar Club Tools</h1>
      <h2 className="py-1 text-2xl">Version: {version}</h2>
      <p>
        This application assists in the determination of visibility of targets
        related to the Astronomical League's Lunar Club and Lunar II observing
        programs.
      </p>
      <h3 className="py-1 text-lg">Credits</h3>
      <p>
        The pictures of the moon used in this application are derived from a
        Lunar Reconnaissance Orbiter (NASA/GSFC/ASU) image.
      </p>
    </div>
  )
}

export default AboutInfo
