import type { Meta, StoryObj } from '@storybook/react';

import { CardPZ as Component } from './CardPZ';

import { Button } from '../../atoms/Button/Button';

const meta = {
  title: 'Organisms/CardPZ',
  component: Component,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Component>;

export default meta;
type Story = StoryObj<typeof meta>;

export const CardPZ: Story = {
  args: {
    name: 'Габышев Александр Александрович',
    body: 'Согласно постановлению о возбуждении дела, он «с 6 марта по 22 мая, находясь в неустановленном месте, обратился лично в устной форме к группе людей в общественном месте, то есть публично, с призывами к осуществлению экстремистской деятельности».',
    articles: ['ст. 280 УК РФ', 'ст. 280 УК РФ', 'ст. 280 УК РФ'],
    primaryAction: <Button>Написать</Button>,
    secondaryAction: <Button variant="outline">Помочь</Button>,
    pictureUrl: '/card_pz_photo.png',
    sex: 'мужской',
  },
};
