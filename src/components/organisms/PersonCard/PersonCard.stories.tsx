import type { Meta, StoryObj } from '@storybook/react';

import { PersonCard as Component } from './PersonCard';

const meta = {
  title: 'Organisms/PersonCard',
  component: Component,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Component>;

export default meta;
type Story = StoryObj<typeof meta>;

export const PersonCardBig: Story = {
  args: {
    id: 'id',
    size: 'l',
    mediaItemUrl:
      'https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50?s=200',
    name: 'Габышев Александр',
    subtitle: '18 сентября',
  },
};

export const PersonCardSmall: Story = {
  args: {
    id: 'id',
    size: 'm',
    mediaItemUrl:
      'https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50?s=200',
    name: 'Габышев Александр',
    subtitle: '18 сентября',
  },
};
