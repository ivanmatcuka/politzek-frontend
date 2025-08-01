import type { Meta, StoryObj } from '@storybook/react';

import { Counter as Component } from './Counter';

const meta = {
  component: Component,
  tags: ['autodocs'],
  title: 'Organisms/Counter',
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof Component>;

export default meta;
type Story = StoryObj<typeof meta>;

export const SadCatCounter: Story = {
  args: {
    catPictureUrl: '/cat_sad.svg',
    children: 0,
    label: 'Писем сегодня отправлено:',
  },
};

export const HappyCatCounter: Story = {
  args: {
    catPictureUrl: '/cat_happy.svg',
    children: 1382,
    label: 'Писем сегодня отправлено:',
  },
};

export const CatlessCounter: Story = {
  args: {
    children: 857,
    label: 'Сколько дел в процессе',
  },
};
