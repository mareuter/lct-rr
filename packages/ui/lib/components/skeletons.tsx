import { type ReactNode } from 'react'

export const SkeletonPhaseCard = () => {
  return (
    <div className="xs:max-w-md flex flex-row justify-evenly rounded-md border-2 bg-gray-300 py-2 shadow-md shadow-gray-600 dark:bg-gray-600 dark:shadow-gray-400">
      <div className="align-center xs:size-32 flex aspect-square size-24 items-center">
        <div className="size-full animate-pulse bg-gray-400 dark:bg-gray-300" />
      </div>
      <div className="grid grid-rows-2 items-center-safe px-2">
        <div className="xs:h-10 xs:w-40 h-6 w-30 animate-pulse bg-gray-400 dark:bg-gray-300" />
        <div className="xs:h-10 xs:w-40 h-6 w-30 animate-pulse bg-gray-400 dark:bg-gray-300" />
      </div>
    </div>
  )
}

export const SkeletonNextFourPhases = () => {
  return (
    <div className="rounded-md border-2 shadow-md shadow-gray-600 dark:shadow-gray-400">
      <h1 className="xs:text-2xl text-l pl-2">Next Four Phases</h1>
      <div>
        {[...Array(4)].map((_, i) => (
          <div key={i} className="px-2 pb-2">
            <SkeletonPhaseCard />
          </div>
        ))}
      </div>
    </div>
  )
}

export const SkeletonInfoBox = ({
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
      <div className="xs:h-10 m-1 h-5 animate-pulse bg-gray-400 dark:bg-gray-300" />
      {children}
    </div>
  )
}

export const SkeletonCurrentPhase = () => {
  return (
    <SkeletonInfoBox title="Current Phase">
      <div />
      <div className="flex justify-center px-2 pb-2">
        <div className="size-20 animate-pulse bg-gray-400 dark:bg-gray-300" />
      </div>
    </SkeletonInfoBox>
  )
}

export const SkeletonCurrentVisibility = () => {
  return (
    <SkeletonInfoBox title="Current Visibility">
      <div />
    </SkeletonInfoBox>
  )
}

export const SkeletonDashboard = () => {
  return (
    <div className="grid gap-4">
      <SkeletonCurrentVisibility />
      <SkeletonCurrentPhase />
      <SkeletonNextFourPhases />
    </div>
  )
}
