import type { Meta, StoryObj } from '@storybook/react';

import { SexAge as Component } from './SexAge';

const meta = {
  title: 'Atoms/SexAge',
  component: Component,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Component>;

export default meta;
type Story = StoryObj<typeof meta>;

export const SexAge: Story = {
  args: {
    data: [
      { label: '15–19', age: 15, male: 40, female: 3 },
      { label: '20-24', age: 20, male: 70, female: 4 },
      { label: '25-29', age: 25, male: 60, female: 10 },
      { label: '30-34', age: 30, male: 53, female: 15 },
    ],
  },
};
