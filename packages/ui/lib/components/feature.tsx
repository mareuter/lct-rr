import { InformationCircleIcon } from '@heroicons/react/24/solid'

import { type LunarFeature } from '../definitions'

const Feature = ({ feature }: { feature: LunarFeature }) => {
  return (
    <li className="xs:max-w-md flex flex-row flex-nowrap items-center justify-between rounded-md border-2">
      <div className="xs:text-4xl pl-2 text-2xl">{feature.name}</div>
      <button>
        <InformationCircleIcon className="xs:size-12 size-8 text-blue-700 hover:text-blue-500 dark:text-blue-300" />
        <p className="sr-only">Feature Information</p>
      </button>
    </li>
  )
}

export default Feature
