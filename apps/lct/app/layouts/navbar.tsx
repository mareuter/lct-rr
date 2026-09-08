import { NavLink, Outlet } from 'react-router'

import { AboutMenuItem, NavBarMenu } from '@repo/ui'

export function HydrateFallback() {
  return <h1 className="h-screen w-screen text-4xl">Loading Game1...</h1>
}

const NavBarLayout = () => {
  return (
    <>
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
