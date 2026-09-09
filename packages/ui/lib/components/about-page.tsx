import type { ReactNode } from 'react'

import AboutInfo from './about-info'

const AboutPage = ({
  version,
  children,
}: {
  version: string
  children: ReactNode
}) => {
  return (
    <>
      <div className="bg-moon absolute inset-0 -z-1 h-full bg-contain bg-center bg-no-repeat opacity-30" />
      <div className="flex flex-col items-center px-2 align-middle">
        <AboutInfo version={version} />
        <div className="xs:max-w-md pt-10 pb-4 text-center">{children}</div>
      </div>
    </>
  )
}

export default AboutPage
