import type { Meta, StoryObj } from '@storybook/react';

import { Logo as Component } from './Logo';

const meta = {
  component: Component,
  tags: ['autodocs'],
  title: 'Atoms/Logo',
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof Component>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Logo: Story = {
  args: {},
};
