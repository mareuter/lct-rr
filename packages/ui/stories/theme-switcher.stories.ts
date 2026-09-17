import type { Meta, StoryObj } from '@storybook/react-vite'

import ThemeSwitcher from '../lib/components/theme-switcher'

const meta: Meta<typeof ThemeSwitcher> = {
  component: ThemeSwitcher,
  title: 'NavBar/ThemeSwitcher',
  async beforeEach() {
    localStorage.removeItem('theme')
  },
}

export default meta
type Story = StoryObj<typeof ThemeSwitcher>

export const Default: Story = {
  args: {},
}
