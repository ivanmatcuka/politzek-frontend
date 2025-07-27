import type { Meta, StoryObj } from '@storybook/react';

import { Button as Component } from './Button';

const meta = {
  title: 'Atoms/Button',
  component: Component,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
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
        type: 'select',
        options: ['default', 'red', 'outline'],
      },
    },
  },
  parameters: {
    docs: {
      description: {
        component: 'This is the default button variant.',
      },
    },
    tags: ['button', 'default'],
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
        type: 'select',
        options: ['default', 'red', 'outline'],
      },
    },
  },
  parameters: {
    docs: {
      description: {
        component: 'This is the red button variant.',
      },
    },
    tags: ['button', 'red'],
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
        type: 'select',
        options: ['default', 'red', 'outline'],
      },
    },
  },
  parameters: {
    docs: {
      description: {
        component: 'This is the outline button variant.',
      },
    },
    tags: ['button', 'outline'],
  },
};
