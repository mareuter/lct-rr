import type { Meta, StoryObj } from '@storybook/react-vite'

import AboutInfo from '../lib/components/about-info'

const meta: Meta<typeof AboutInfo> = {
  component: AboutInfo,
}

export default meta
type Story = StoryObj<typeof AboutInfo>

export const Default: Story = {
  args: {
    version: '0.1.0',
  },
}
