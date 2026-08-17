import { AboutInfo } from '@repo/ui'
// Top-level package.json
import packageJson from '../../../../package.json'

const About = () => {
  return (
    <div className="px-2">
      <AboutInfo version={packageJson.version} />
    </div>
  )
}

export default About
