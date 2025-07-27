import type { Meta, StoryObj } from '@storybook/react';

import { Selector as Component } from './Selector';

const meta = {
  title: 'Molecules/Selector',
  component: Component,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Component>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Selector: Story = {
  args: {
    items: [
      { label: 'по полу и возрасту:', element: 'Lorem ipsum 1' },
      { label: 'на свободе/под стражей', element: 'Lorem ipsum 2' },
      { label: 'по роду занятий', element: 'Lorem ipsum 3' },
    ],
  },
};
