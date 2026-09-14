import type { Meta, StoryObj } from '@storybook/react-vite'

import { SkeletonNextFourPhases } from '../lib/components/skeletons'

const meta: Meta<typeof SkeletonNextFourPhases> = {
  component: SkeletonNextFourPhases,
  title: 'Skeletons/SkeletonNextFourPhases',
}

export default meta
type Story = StoryObj<typeof SkeletonNextFourPhases>

export const Default: Story = {
  args: {},
}
