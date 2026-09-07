import { DocumentTextIcon } from '@heroicons/react/24/solid'

const AboutMenuItem = ({ isActive }: { isActive: boolean }) => {
  return (
    <div
      className={`flex flex-row items-center hover:bg-blue-700 ${isActive ? 'bg-blue-200' : ''}`}
    >
      <DocumentTextIcon className="size-10" />
      <p className="px-2 text-center text-xl">About</p>
    </div>
  )
}

export default AboutMenuItem
