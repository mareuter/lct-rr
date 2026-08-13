import type { Meta, StoryObj } from '@storybook/react-vite'

import { SkeletonDashboard } from '../lib/components/skeletons'

const meta: Meta<typeof SkeletonDashboard> = {
  component: SkeletonDashboard,
}

export default meta
type Story = StoryObj<typeof SkeletonDashboard>

export const Default: Story = {
  args: {},
}
