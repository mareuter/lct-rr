import type { Meta, StoryObj } from '@storybook/react-vite'

import CurrentVisibility from '../lib/components/current-visibility'
import moonInfo from '../lib/data/query/moon-info.json' with { type: 'json' }

const meta: Meta<typeof CurrentVisibility> = {
  component: CurrentVisibility,
}

export default meta
type Story = StoryObj<typeof CurrentVisibility>

export const Default: Story = {
  args: {
    altitude: moonInfo.altitude,
    azimuth: moonInfo.azimuth,
    coordsGood: true,
  },
}

export const Up: Story = {
  args: {
    altitude: 45.0,
    azimuth: 225.0,
    coordsGood: true,
  },
}

export const BadCoords: Story = {
  args: {
    altitude: moonInfo.altitude,
    azimuth: moonInfo.azimuth,
    coordsGood: false,
  },
}

export const UpBadCoords: Story = {
  args: {
    altitude: 45.0,
    azimuth: 225.0,
    coordsGood: false,
  },
}
