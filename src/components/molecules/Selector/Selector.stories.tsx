import type { Meta, StoryObj } from '@storybook/react';

import { Selector as Component } from './Selector';

const meta = {
  component: Component,
  tags: ['autodocs'],
  title: 'Molecules/Selector',
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof Component>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Selector: Story = {
  args: {
    items: [
      { element: 'Lorem ipsum 1', label: 'по полу и возрасту:' },
      { element: 'Lorem ipsum 2', label: 'на свободе/под стражей' },
      { element: 'Lorem ipsum 3', label: 'по роду занятий' },
    ],
  },
};
