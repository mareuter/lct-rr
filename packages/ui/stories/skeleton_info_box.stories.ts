import type { Meta, StoryObj } from '@storybook/react-vite'

import { SkeletonInfoBox } from '../lib/components/skeletons'

const meta: Meta<typeof SkeletonInfoBox> = {
  component: SkeletonInfoBox,
}

export default meta
type Story = StoryObj<typeof SkeletonInfoBox>

export const Default: Story = {
  args: {},
}
