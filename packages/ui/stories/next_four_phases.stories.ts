import type { Meta, StoryObj } from '@storybook/react-vite'

import NextFourPhases from '../lib/components/next_four_phases'
import moonInfo from '../lib/data/query/moon_info.json' with { type: 'json' }

const meta: Meta<typeof NextFourPhases> = {
  component: NextFourPhases,
}

export default meta
type Story = StoryObj<typeof NextFourPhases>

export const Undefined: Story = {
  args: {
    phaseList: {},
    timezone: '',
  },
}

export const Filled: Story = {
  args: {
    phaseList: moonInfo.next_four_phases,
    timezone: 'America/New_York',
  },
}
