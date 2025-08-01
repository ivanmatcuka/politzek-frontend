import type { Meta, StoryObj } from '@storybook/react';

import { PersonCard as Component } from './PersonCard';

const meta = {
  component: Component,
  tags: ['autodocs'],
  title: 'Organisms/PersonCard',
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof Component>;

export default meta;
type Story = StoryObj<typeof meta>;

export const PersonCardBig: Story = {
  args: {
    id: 'id',
    name: 'Габышев Александр',
    size: 'l',
    subtitle: '18 сентября',
    imageUrl:
      'https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50?s=200',
  },
};

export const PersonCardSmall: Story = {
  args: {
    id: 'id',
    name: 'Габышев Александр',
    size: 'm',
    subtitle: '18 сентября',
    imageUrl:
      'https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50?s=200',
  },
};
