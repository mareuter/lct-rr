import type { Meta, StoryObj } from '@storybook/react-vite'

import TestAboutPage from './components/test-about-page'

const meta: Meta<typeof TestAboutPage> = {
  component: TestAboutPage,
  parameters: {
    layout: 'fullscreen',
  },
  decorators: [(storyFn) => <div className="block h-screen">{storyFn()}</div>],
}

export default meta
type Story = StoryObj<typeof TestAboutPage>

export const Default: Story = {
  args: {},
}
