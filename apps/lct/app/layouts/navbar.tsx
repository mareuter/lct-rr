import { Outlet } from 'react-router'

import { LctLogo } from '@repo/ui'

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
      <div>
        <Outlet />
      </div>
    </>
  )
}

export default NavBarLayout
