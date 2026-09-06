import type { Meta, StoryObj } from '@storybook/react-vite'

import LunarTwoCard from '../lib/components/lunar-two-card'
import dashboardInfo from '@repo/data/query/dashboard.json' with { type: 'json' }

const meta: Meta<typeof LunarTwoCard> = {
  component: LunarTwoCard,
}

export default meta
type Story = StoryObj<typeof LunarTwoCard>

export const Default: Story = {
  args: {
    summary: dashboardInfo.lunar_two,
  },
}
