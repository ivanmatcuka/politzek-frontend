import type { Meta, StoryObj } from '@storybook/react';

import { SexAge as Component } from './SexAge';

const meta = {
  component: Component,
  tags: ['autodocs'],
  title: 'Atoms/SexAge',
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof Component>;

export default meta;
type Story = StoryObj<typeof meta>;

export const SexAge: Story = {
  args: {
    data: [
      { age: 15, female: 3, label: '15–19', male: 40 },
      { age: 20, female: 4, label: '20-24', male: 70 },
      { age: 25, female: 10, label: '25-29', male: 60 },
      { age: 30, female: 15, label: '30-34', male: 53 },
    ],
  },
};
