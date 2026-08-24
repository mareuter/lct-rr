import type { Meta, StoryObj } from '@storybook/react-vite'

import Footer from '../lib/components/footer'

const meta: Meta<typeof Footer> = {
  component: Footer,
}

export default meta
type Story = StoryObj<typeof Footer>

export const Default: Story = {
  args: {
    currentDate: new Date(),
    currentLocationWithTz: {
      latitude: 35.96,
      longitude: -84.32,
      good: true,
      timezone: 'America/New_York',
    },
  },
}

export const BadCoords: Story = {
  args: {
    currentDate: new Date(),
    currentLocationWithTz: {
      latitude: 35.96,
      longitude: -84.32,
      good: false,
      timezone: 'America/New_York',
    },
  },
}
