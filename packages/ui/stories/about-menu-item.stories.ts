import type { Meta, StoryObj } from '@storybook/react-vite'

import AboutMenuItem from '../lib/components/menu/about-menu-item'

const meta: Meta<typeof AboutMenuItem> = {
  component: AboutMenuItem,
  argTypes: {
    isActive: {
      control: {
        type: 'boolean',
      },
    },
  },
}

export default meta
type Story = StoryObj<typeof AboutMenuItem>

export const Default: Story = {
  args: {
    isActive: false,
  },
}
