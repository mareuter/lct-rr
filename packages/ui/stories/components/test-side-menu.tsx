import AboutMenuItem from '../../lib/components/menu/about-menu-item'
import NavBarMenu from '../../lib/components/nav-bar-menu'

const TestSideMenu = () => {
  return (
    <NavBarMenu>
      <AboutMenuItem isActive={false} />
    </NavBarMenu>
  )
}

export default TestSideMenu
