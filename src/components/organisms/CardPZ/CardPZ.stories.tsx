import type { Meta, StoryObj } from '@storybook/react';

import { Button } from '../../atoms/Button/Button';
import { CardPZ as Component } from './CardPZ';

const meta = {
  component: Component,
  tags: ['autodocs'],
  title: 'Organisms/CardPZ',
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof Component>;

export default meta;
type Story = StoryObj<typeof meta>;

export const CardPZ: Story = {
  args: {
    articles: ['ст. 280 УК РФ', 'ст. 280 УК РФ', 'ст. 280 УК РФ'],
    body: 'Согласно постановлению о возбуждении дела, он «с 6 марта по 22 мая, находясь в неустановленном месте, обратился лично в устной форме к группе людей в общественном месте, то есть публично, с призывами к осуществлению экстремистской деятельности».',
    name: 'Габышев Александр Александрович',
    pictureUrl: '/card_pz_photo.png',
    primaryAction: <Button>Написать</Button>,
    secondaryAction: <Button variant="outline">Помочь</Button>,
    sex: 'мужской',
  },
};
