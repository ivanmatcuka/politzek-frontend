import type { Meta, StoryObj } from '@storybook/react';

import { SelectorItem as Component } from './SelectorItem';

const meta = {
  component: Component,
  tags: ['autodocs'],
  title: 'Atoms/SelectorItem',
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof Component>;

export default meta;
type Story = StoryObj<typeof meta>;

export const SelectorItem: Story = {
  args: { children: 'по полу и возрасту', variant: 'subtitle1' },
};
