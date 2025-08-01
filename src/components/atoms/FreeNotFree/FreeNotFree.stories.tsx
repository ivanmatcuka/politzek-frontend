import type { Meta, StoryObj } from '@storybook/react';

import { FreeNotFree as Component } from './FreeNotFree';

const meta = {
  component: Component,
  tags: ['autodocs'],
  title: 'Atoms/FreeNotFree',
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof Component>;

export default meta;
type Story = StoryObj<typeof meta>;

export const FreeNotFree: Story = {
  args: { free: 535, notFree: 32865 },
};
