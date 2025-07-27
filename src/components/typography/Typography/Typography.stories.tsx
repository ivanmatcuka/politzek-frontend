import type { Meta, StoryObj } from '@storybook/react';

import { typography } from '~/theming/theme/typography';

import { Typography as Component } from './Typography';

const loremIpsum = 'The quick brown fox jumps over the lazy dog.';

const meta = {
  title: 'Typography/Typography',
  component: Component,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      options: Object.keys(typography),
      control: 'select',
    },
  },
} satisfies Meta<typeof Component>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Typography: Story = {
  args: {
    variant: 'h1',
    children: loremIpsum,
  },
};
