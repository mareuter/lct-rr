import type { Meta, StoryObj } from '@storybook/react-vite'

import { SkeletonPhaseCard } from '../lib/components/skeletons'

const meta: Meta<typeof SkeletonPhaseCard> = {
  component: SkeletonPhaseCard,
  title: 'Skeletons/SkeletonPhaseCard',
}

export default meta
type Story = StoryObj<typeof SkeletonPhaseCard>

export const Default: Story = {
  args: {},
}
