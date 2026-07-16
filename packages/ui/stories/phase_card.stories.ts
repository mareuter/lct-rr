import type { Meta, StoryObj } from '@storybook/react-vite'

import PhaseCard from '../lib/components/phase_card'

const meta: Meta<typeof PhaseCard> = {
  component: PhaseCard,
}

export default meta
type Story = StoryObj<typeof PhaseCard>

export const Undefined: Story = {
  args: {
    phaseName: undefined,
    phaseDate: '0000-00-00',
    phaseTime: '00:00 UTC',
  },
}

export const FirstQuarter: Story = {
  args: {
    phaseName: 'first_quarter',
    phaseDate: '2024-10-20',
    phaseTime: '23:43 UTC',
  },
}
