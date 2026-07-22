import type { Meta, StoryObj } from '@storybook/react-vite'

import CurrentPhase from '../lib/components/current_phase'
import moonInfo from '../lib/data/query/moon_info.json' with { type: 'json' }

const meta: Meta<typeof CurrentPhase> = {
  component: CurrentPhase,
}

export default meta
type Story = StoryObj<typeof CurrentPhase>

export const Default: Story = {
  args: {
    phaseName: moonInfo.phase,
    moonAge: moonInfo.age,
    fraction: moonInfo.fractional_phase,
    colong: moonInfo.colong,
  },
}

export const LongPhaseName: Story = {
  args: {
    phaseName: 'Waxing Gibbous',
    moonAge: 10.72863,
    fraction: 0.7843,
    colong: 60.0,
  },
}
