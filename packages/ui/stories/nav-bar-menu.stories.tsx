import type { Meta, StoryObj } from '@storybook/react-vite'

import { expect } from 'storybook/test'

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
  play: async ({ canvas, userEvent }) => {
    await expect(document.getElementById('menu')).not.toHaveClass(
      'overflow-hidden',
    )
    await userEvent.click(canvas.getByRole('button', { name: 'Side Menu' }))
    await expect(document.getElementById('menu')).toHaveClass('overflow-hidden')
  },
}
