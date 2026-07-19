import { type ReactNode } from 'react'

const InfoBox = ({
  title,
  children,
}: {
  title: string
  children: ReactNode
}) => {
  return (
    <div className="xs:max-w-md rounded-md border-2 shadow-md shadow-gray-600 dark:shadow-gray-400">
      <h1 className="xs:text-base pl-2 text-sm">{title}</h1>
      <hr className="mx-1 text-gray-700 dark:text-gray-300" />
      {children}
    </div>
  )
}

export default InfoBox
