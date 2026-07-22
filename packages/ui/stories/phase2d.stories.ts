import type { Meta, StoryObj } from '@storybook/react-vite'

import Phase2D from '../lib/components/phase2d'

const meta: Meta<typeof Phase2D> = {
  component: Phase2D,
  argTypes: {
    fraction: {
      control: {
        type: 'range',
        min: 0,
        max: 1,
        step: 0.01,
      },
    },
  },
}

export default meta
type Story = StoryObj<typeof Phase2D>

export const Default: Story = {
  args: {
    fraction: 0.2,
    waxing: true,
  },
}
