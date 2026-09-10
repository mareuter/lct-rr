import type { Meta, StoryObj } from '@storybook/react-vite'

import CurrentPhase from '../lib/components/current-phase'
import dashboardInfo from '@repo/data/query/dashboard.json' with { type: 'json' }

const meta: Meta<typeof CurrentPhase> = {
  component: CurrentPhase,
}

export default meta
type Story = StoryObj<typeof CurrentPhase>

export const Default: Story = {
  args: {
    phaseName: dashboardInfo.phase,
    moonAge: dashboardInfo.age,
    fraction: dashboardInfo.fractional_phase,
    colong: dashboardInfo.colong,
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
