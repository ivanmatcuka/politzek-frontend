import type { Meta, StoryObj } from '@storybook/react';

import { FreeNotFree as Component } from './FreeNotFree';

const meta = {
  title: 'Atoms/FreeNotFree',
  component: Component,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Component>;

export default meta;
type Story = StoryObj<typeof meta>;

export const FreeNotFree: Story = {
  args: { free: 535, notFree: 32865 },
};
