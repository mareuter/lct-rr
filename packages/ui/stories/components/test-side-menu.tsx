import AboutMenuItem from '../../lib/components/menu/about-menu-item'
import NavBarMenu from '../../lib/components/nav-bar-menu'
import type { LocationWithTz } from '../../lib/helpers/geolocation-context'

const TestSideMenu = ({
  currentDate,
  currentLocationWithTz,
}: {
  currentDate: Date
  currentLocationWithTz: LocationWithTz
}) => {
  return (
    <NavBarMenu
      currentDate={currentDate}
      currentLocationWithTz={currentLocationWithTz}
    >
      <AboutMenuItem isActive={false} />
    </NavBarMenu>
  )
}

export default TestSideMenu
