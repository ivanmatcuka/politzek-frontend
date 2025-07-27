import type { Meta, StoryObj } from '@storybook/react';

import { Card as Component } from './Card';

import { Button } from '../../atoms/Button/Button';

const meta = {
  title: 'Organisms/Card',
  component: Component,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Component>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Card: Story = {
  args: {
    title: 'НАПИСАТЬ ПИСЬМО',
    body: 'Людям за решёткой не хватает тёплого и душевного общения. Вы можете писать заключённым письма: рассказать о происходящем в мире и о себе.',
    action: <Button>Написать</Button>,
    catPictureUrl: '/icon_letter.svg',
  },
};
