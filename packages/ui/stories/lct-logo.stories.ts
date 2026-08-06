import type { Meta, StoryObj } from '@storybook/react-vite'

import LctLogo from '../lib/components/lct-logo'

const meta: Meta<typeof LctLogo> = {
  component: LctLogo,
}

export default meta
type Story = StoryObj<typeof LctLogo>

export const Default: Story = {
  args: {},
}
