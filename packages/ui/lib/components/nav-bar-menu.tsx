import { type ReactNode, type RefObject, useRef, useState } from 'react'
import { Bars3Icon } from '@heroicons/react/24/solid'
import { useOnClickOutside } from 'usehooks-ts'
import LctLogo from './lct-logo'
import Footer from './footer'
import { type LocationWithTz } from '../helpers/geolocation-context'
import ThemeSwitcher from './theme-switcher'
import full_moon_icon from '../../assets/full_moon_icon.png'

const NavBarMenu = ({
  currentDate,
  currentLocationWithTz,
  children,
}: {
  currentDate: Date
  currentLocationWithTz: LocationWithTz
  children: ReactNode
}) => {
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
    <div className="flex flex-row items-center justify-between">
      <button onClick={toggleMenu} className="lg:hidden">
        <Bars3Icon className="mx-1 size-8 hover:outline-1 hover:outline-blue-700" />
        <p className="sr-only">Side Menu</p>
      </button>
      <div className="hidden lg:block">
        <img
          src={full_moon_icon}
          alt="Full Moon"
          sizes="auto"
          width="50px"
          height="50px"
        />
      </div>
      <p className="px-2 align-middle text-lg lg:text-2xl">Lunar Club Tools</p>
      <div className="h-10 w-16 grow" />
      <ThemeSwitcher />
      <div
        id="menu"
        ref={ref}
        className={`xs:w-[35vw] fixed top-0 left-0 z-100 h-screen w-[60vw] bg-gray-100 transition-colors lg:z-0 lg:mt-12 lg:w-[20vw] lg:transform-none dark:bg-gray-700 ${isMenuOpen ? 'animate-slide-in-left transform-[translate3d(0vw,0,0)] overflow-hidden' : 'transform-[translate3d(-60vw,0,0)]'}`}
      >
        <LctLogo />
        <div className="py-2" />
        {children}
        <div className="fixed bottom-0">
          <Footer
            currentDate={currentDate}
            currentLocationWithTz={currentLocationWithTz}
          />
        </div>
      </div>
    </div>
  )
}

export default NavBarMenu
