import type { Meta, StoryObj } from '@storybook/react';

import { Menu as Component } from './Menu';

const meta = {
  title: 'Molecules/Menu',
  component: Component,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Component>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Menu: Story = {
  args: {
    items: [
      {
        element: 'КАК ПОМОЧЬ',
      },
      {
        element: 'КОМУ НУЖНА ПОМОЩЬ ПРЯМО СЕЙЧАС',
      },
      {
        element: 'СПИСОК ПРЕСЛЕДУЕМЫХ',
      },
      {
        element: 'ПОЖЕРТВОВАТЬ ПРОЕКТУ',
      },
    ],
  },
};
