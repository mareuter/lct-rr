import type { Meta, StoryObj } from '@storybook/react-vite'

import NextPhase from '../lib/components/next-phase'
import dashboardInfo from '@repo/data/query/dashboard.json' with { type: 'json' }

const meta: Meta<typeof NextPhase> = {
  component: NextPhase,
}

export default meta
type Story = StoryObj<typeof NextPhase>

export const Default: Story = {
  args: {
    phaseList: dashboardInfo.next_phase,
    timezone: 'America/New_York',
  },
}
