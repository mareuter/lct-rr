import type { Meta, StoryObj } from '@storybook/react-vite'

import LunarClubCard from '../lib/components/lunar-club-card'
import dashboardInfo from '@repo/data/query/dashboard.json' with { type: 'json' }

const meta: Meta<typeof LunarClubCard> = {
  component: LunarClubCard,
}

export default meta
type Story = StoryObj<typeof LunarClubCard>

export const Default: Story = {
  args: {
    summary: dashboardInfo.lunar_club,
  },
}
