import type { Meta, StoryObj } from '@storybook/react';

import { FilterSlider as Component } from './FilterSlider';

const meta = {
  title: 'Molecules/FilterSlider',
  component: Component,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Component>;

export default meta;
type Story = StoryObj<typeof meta>;

export const FilterSlider: Story = {
  args: {
    label: 'возраст',
    max: 100,
    min: 0,
  },
};
