import type { Meta, StoryObj } from '@storybook/react';

import { Button } from '../../atoms/Button/Button';
import { Card as Component } from './Card';

const meta = {
  component: Component,
  tags: ['autodocs'],
  title: 'Organisms/Card',
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof Component>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Card: Story = {
  args: {
    action: <Button>Написать</Button>,
    body: 'Людям за решёткой не хватает тёплого и душевного общения. Вы можете писать заключённым письма: рассказать о происходящем в мире и о себе.',
    catPictureUrl: '/icon_letter.svg',
    title: 'НАПИСАТЬ ПИСЬМО',
  },
};
