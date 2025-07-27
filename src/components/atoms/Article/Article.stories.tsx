import type { Meta, StoryObj } from '@storybook/react';

import { Article as Component } from './Article';

const meta = {
  title: 'Atoms/Article',
  component: Component,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Component>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Article: Story = {
  args: { label: 'ст. 280 УК РФ' },
};
