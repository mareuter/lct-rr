import type { Meta, StoryObj } from '@storybook/react-vite'

import Feature from '../lib/components/feature'
import { type LunarFeature } from '../lib/definitions'

const meta: Meta<typeof Feature> = {
  component: Feature,
}

export default meta
type Story = StoryObj<typeof Feature>

const lfeature: LunarFeature = {
  key: 0,
  name: 'Mare Crisium',
  latitude: 16.1773714530001,
  longitude: 59.103747264,
  type: 'Mare',
  diameter: 555.921,
  quadCode: 'LAC-44',
  quadName: 'Cleomedes',
}

export const Default: Story = {
  args: {
    feature: lfeature,
  },
}
