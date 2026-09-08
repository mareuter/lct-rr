import { type ReactNode, type RefObject, useRef, useState } from 'react'
import { Bars3Icon } from '@heroicons/react/24/solid'
import { useOnClickOutside } from 'usehooks-ts'
import LctLogo from './lct-logo'

const NavBarMenu = ({ children }: { children: ReactNode }) => {
  const ref = useRef<HTMLDivElement>(null)
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const hideMenu = () => {
    if (isMenuOpen) {
      document.getElementById('menu')?.animate(
        [
          { transform: 'translateX(0%)', opacity: 1 },
          { transform: 'translateX(-100%)', opacity: 0 },
        ],
        {
          duration: 800,
          easing: 'ease',
        },
      )
    }
    setIsMenuOpen(false)
  }

  useOnClickOutside(ref as RefObject<HTMLElement>, hideMenu)

  return (
    <div className="flex flex-row justify-between">
      <button onClick={toggleMenu}>
        <Bars3Icon className="size-8 hover:text-blue-700 hover:outline-1 hover:outline-blue-700" />
        <p className="sr-only">Side Menu</p>
      </button>
      <p className="px-2 align-middle text-lg">Lunar Club Tools</p>
      <div className="w-40 py-2" />
      <div
        id="menu"
        ref={ref}
        className={`xs:w-[35vw] fixed top-0 left-0 z-100 h-screen w-[50vw] bg-gray-100 transition-colors dark:bg-gray-700 ${isMenuOpen ? 'animate-slide-in-left transform-[translate3d(0vw,0,0)] overflow-hidden' : 'transform-[translate3d(-50vw,0,0)]'}`}
      >
        <LctLogo />
        <div className="py-2" />
        {children}
      </div>
    </div>
  )
}

export default NavBarMenu
