import type { Meta, StoryObj } from '@storybook/react-vite'

import CurrentVisibility from '../lib/components/current_visibility'
import moonInfo from '../lib/data/query/moon_info.json' with { type: 'json' }

const meta: Meta<typeof CurrentVisibility> = {
  component: CurrentVisibility,
}

export default meta
type Story = StoryObj<typeof CurrentVisibility>

export const Default: Story = {
  args: {
    altitude: moonInfo.altitude,
    azimuth: moonInfo.azimuth,
  },
}
