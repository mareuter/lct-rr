import type { Meta, StoryObj } from '@storybook/react-vite'

import NoFeaturesVisible from '../lib/components/no-features-visible'

const meta: Meta<typeof NoFeaturesVisible> = {
  component: NoFeaturesVisible,
}

export default meta
type Story = StoryObj<typeof NoFeaturesVisible>

export const Default: Story = {
  args: {},
}
