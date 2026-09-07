import { type ReactNode, type RefObject, useRef, useState } from 'react'
import { Bars3Icon } from '@heroicons/react/24/solid'
import { useOnClickOutside } from 'usehooks-ts'

const NavBarMenu = ({ children }: { children: ReactNode }) => {
  const ref = useRef<HTMLDivElement>(null)
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const hideMenu = () => {
    setIsMenuOpen(false)
  }

  useOnClickOutside(ref as RefObject<HTMLElement>, hideMenu)

  return (
    <div className="flex flex-row">
      <button onClick={toggleMenu}>
        <Bars3Icon className="size-8 hover:text-blue-700 hover:outline-1 hover:outline-blue-700" />
        <p className="sr-only">Side Menu</p>
      </button>
      <div
        ref={ref}
        className={`xs:w-[25vw] fixed top-0 left-0 z-100 h-screen w-[50vw] bg-(--color-background-light) transition-colors dark:bg-(--color-background-dark) ${isMenuOpen ? 'animate-slide-in-left transform-[translate3d(0vw,0,0)] overflow-hidden' : 'transform-[translate3d(-50vw,0,0)]'}`}
      >
        {children}
      </div>
    </div>
  )
}

export default NavBarMenu
