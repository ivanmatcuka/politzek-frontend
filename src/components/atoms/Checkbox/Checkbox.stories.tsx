import type { Meta, StoryObj } from '@storybook/react';

import { Checkbox as Component } from './Checkbox';

const meta = {
  title: 'Atoms/Checkbox',
  component: Component,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Component>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Checkbox: Story = {
  args: {},
};

export const DisabledCheckbox: Story = {
  args: {
    disabled: true,
  },
};
