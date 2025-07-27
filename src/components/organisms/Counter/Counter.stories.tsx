import type { Meta, StoryObj } from '@storybook/react';

import { Counter as Component } from './Counter';

const meta = {
  title: 'Organisms/Counter',
  component: Component,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Component>;

export default meta;
type Story = StoryObj<typeof meta>;

export const SadCatCounter: Story = {
  args: {
    children: 0,
    label: 'Писем сегодня отправлено:',
    catPictureUrl: '/cat_sad.svg',
  },
};

export const HappyCatCounter: Story = {
  args: {
    children: 1382,
    label: 'Писем сегодня отправлено:',
    catPictureUrl: '/cat_happy.svg',
  },
};

export const CatlessCounter: Story = {
  args: {
    children: 857,
    label: 'Сколько дел в процессе',
  },
};
