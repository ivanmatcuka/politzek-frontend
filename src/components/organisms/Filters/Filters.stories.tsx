import type { Meta, StoryObj } from '@storybook/react';

import { Filters as Component } from './Filters';

const meta = {
  title: 'Organisms/Filters',
  component: Component,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Component>;

export default meta;
type Story = StoryObj<typeof meta>;

export const EmptyFilters: Story = {
  args: {},
};
