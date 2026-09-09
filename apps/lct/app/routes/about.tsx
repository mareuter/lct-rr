import { NavLink } from 'react-router'

import { AboutPage } from '@repo/ui'
// Top-level package.json
import packageJson from '../../../../package.json'

const About = () => {
  return (
    <AboutPage version={packageJson.version}>
      <NavLink to="/" className="hover:bg-blue-500">
        Return to Dashboard
      </NavLink>
    </AboutPage>
  )
}

export default About
