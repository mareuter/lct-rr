import type { Meta, StoryObj } from '@storybook/react-vite'

import TestSideMenu from './test-side-menu'

const meta: Meta<typeof TestSideMenu> = {
  component: TestSideMenu,
  parameters: {
    layout: 'fullscreen',
  },
  decorators: [(storyFn) => <div className="block h-screen">{storyFn()}</div>],
}

export default meta
type Story = StoryObj<typeof TestSideMenu>

export const Default: Story = {
  args: {},
}
