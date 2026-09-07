import { NavLink, Outlet } from 'react-router'

import { AboutMenuItem, LctLogo, NavBarMenu } from '@repo/ui'

export function HydrateFallback() {
  return <h1 className="h-screen w-screen text-4xl">Loading Game1...</h1>
}

const NavBarLayout = () => {
  return (
    <>
      <div>
        <LctLogo />
      </div>
      <hr className="text-emerald-800" />
      <NavBarMenu>
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
