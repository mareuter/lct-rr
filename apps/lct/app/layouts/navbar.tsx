import { use } from 'react'
import { NavLink, Outlet } from 'react-router'

import {
  AboutMenuItem,
  NavBarMenu,
  DateContext,
  type DateContextType,
  GeoLocationContext,
  type GeoLocationContextType,
} from '@repo/ui'

export function HydrateFallback() {
  return <h1 className="h-screen w-screen text-4xl">Loading Game1...</h1>
}

const NavBarLayout = () => {
  const { date } = use(DateContext) as DateContextType
  const { location } = use(GeoLocationContext) as GeoLocationContextType

  return (
    <>
      <NavBarMenu currentDate={date} currentLocationWithTz={location}>
        <NavLink to="/about">
          {(props) => <AboutMenuItem isActive={props.isActive} />}
        </NavLink>
      </NavBarMenu>
      <div>
        <Outlet />
      </div>
    </>
  )
}

export default NavBarLayout
