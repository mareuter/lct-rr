export const SkeletonPhaseCard = () => {
  return (
    <div className="xs:max-w-md grid grid-cols-2 rounded-md border-2">
      <div className="align-center flex aspect-square items-center py-1 pl-2">
        <div className="size-full animate-pulse bg-gray-400 dark:bg-gray-600" />
      </div>
      <div className="grid grid-rows-2 items-center-safe px-2">
        <div className="xs:h-20 h-10 animate-pulse bg-gray-400 dark:bg-gray-600" />
        <div className="xs:h-20 h-10 animate-pulse bg-gray-400 dark:bg-gray-600" />
      </div>
    </div>
  )
}

export const SkeletonNextFourPhases = () => {
  return (
    <div>
      <h1 className="xs:text-4xl pb-2 pl-8 text-2xl">Next Four Phases</h1>
      <div>
        {[...Array(4)].map((_, i) => (
          <div key={i} className="pb-2">
            <SkeletonPhaseCard />
          </div>
        ))}
      </div>
    </div>
  )
}

export const SkeletonInfoBox = () => {
  return (
    <div className="xs:max-w-md rounded-md border-2 shadow-md shadow-gray-600 dark:shadow-gray-400">
      <div className="xs:h-5 my-1 ml-2 h-3 w-40 animate-pulse bg-gray-400 dark:bg-gray-600" />
      <hr className="mx-1 text-gray-700 dark:text-gray-300" />
      <div className="xs:h-5 m-1 h-3 animate-pulse bg-gray-400 dark:bg-gray-600" />
    </div>
  )
}
