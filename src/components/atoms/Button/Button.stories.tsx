import type { Meta, StoryObj } from '@storybook/react';

import { Button as Component } from './Button';

const meta = {
  component: Component,
  tags: ['autodocs'],
  title: 'Atoms/Button',
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof Component>;

export default meta;
type Story = StoryObj<typeof meta>;

export const DefaultButton: Story = {
  args: {
    children: 'Default Button',
    variant: 'default',
  },
  argTypes: {
    children: { control: 'text' },
    variant: {
      control: {
        options: ['default', 'red', 'outline'],
        type: 'select',
      },
    },
  },
  parameters: {
    tags: ['button', 'default'],
    docs: {
      description: {
        component: 'This is the default button variant.',
      },
    },
  },
};

export const RedButton: Story = {
  args: {
    children: 'Red Button',
    variant: 'red',
  },
  argTypes: {
    children: { control: 'text' },
    variant: {
      control: {
        options: ['default', 'red', 'outline'],
        type: 'select',
      },
    },
  },
  parameters: {
    tags: ['button', 'red'],
    docs: {
      description: {
        component: 'This is the red button variant.',
      },
    },
  },
};

export const OutlineButton: Story = {
  args: {
    children: 'Outline Button',
    variant: 'outline',
  },
  argTypes: {
    children: { control: 'text' },
    variant: {
      control: {
        options: ['default', 'red', 'outline'],
        type: 'select',
      },
    },
  },
  parameters: {
    tags: ['button', 'outline'],
    docs: {
      description: {
        component: 'This is the outline button variant.',
      },
    },
  },
};
