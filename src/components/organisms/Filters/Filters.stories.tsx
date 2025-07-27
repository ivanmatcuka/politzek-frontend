import type { Meta, StoryObj } from '@storybook/react';

import { Filters as Component } from './Filters';

const meta = {
  component: Component,
  tags: ['autodocs'],
  title: 'Organisms/Filters',
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof Component>;

export default meta;
type Story = StoryObj<typeof meta>;

export const EmptyFilters: Story = {
  args: {},
};
