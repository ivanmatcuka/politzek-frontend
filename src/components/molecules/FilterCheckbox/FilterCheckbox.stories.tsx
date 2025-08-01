import type { Meta, StoryObj } from '@storybook/react';

import { FilterCheckbox as Component } from './FilterCheckbox';

const meta = {
  component: Component,
  tags: ['autodocs'],
  title: 'Molecules/FilterCheckbox',
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof Component>;

export default meta;
type Story = StoryObj<typeof meta>;

export const FilterSlider: Story = {
  args: {
    label: 'возраст',
    options: [
      {
        id: '1',
        value: 'One',
      },
      {
        id: '2',
        value: 'Two',
      },
    ],
  },
};
