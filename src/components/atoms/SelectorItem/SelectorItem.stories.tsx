import type { Meta, StoryObj } from '@storybook/react';

import { SelectorItem as Component } from './SelectorItem';

const meta = {
  title: 'Atoms/SelectorItem',
  component: Component,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Component>;

export default meta;
type Story = StoryObj<typeof meta>;

export const SelectorItem: Story = {
  args: { children: 'по полу и возрасту', variant: 'subtitle1' },
};
