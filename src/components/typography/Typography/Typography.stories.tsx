import type { Meta, StoryObj } from '@storybook/react';

import { typography } from '~/theming/theme/typography';

import { Typography as Component } from './Typography';

const loremIpsum = 'The quick brown fox jumps over the lazy dog.';

const meta = {
  component: Component,
  tags: ['autodocs'],
  title: 'Typography/Typography',
  argTypes: {
    variant: {
      control: 'select',
      options: Object.keys(typography),
    },
  },
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof Component>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Typography: Story = {
  args: {
    children: loremIpsum,
    variant: 'h1',
  },
};
