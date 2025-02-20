'use client';

import { styled } from '@mui/material';
import { FC, PropsWithChildren } from 'react';

import { Button } from '../../../components/atoms/Button/Button';
import { Typography } from '../../../components/typography/Typography/Typography';

const PersonCardContainer = styled('div')<{ photoUrl: string }>(
  ({ photoUrl, theme }) => ({
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    margin: theme.spacing(1.5),

    position: 'relative',
    overflow: 'hidden',

    background: `linear-gradient(0deg, rgba(7, 71, 59, 0.30) 0%, rgba(7, 71, 59, 0.30) 100%), linear-gradient(180deg, rgba(0, 0, 0, 0.00) 56.67%, rgba(0, 0, 0, 0.60) 100%), url(${photoUrl}) no-repeat`,
    backgroundPosition: 'center',
    backgroundSize: 'cover',

    h2: {
      textTransform: 'uppercase',
    },

    '&:hover': {
      background: `linear-gradient(0deg, rgba(7, 71, 59, 0.50) 0%, rgba(7, 71, 59, 0.50) 100%), linear-gradient(180deg, rgba(0, 0, 0, 0.00) 0%, rgba(0, 0, 0, 0.60) 100%), url(${photoUrl}) no-repeat`,
      backgroundPosition: 'center',
      backgroundSize: 'cover',

      '.button': {
        opacity: 1,
      },
    },
  }),
);

const PersonCardContent = styled('div')({
  position: 'absolute',
  bottom: 9,
  left: 12,

  color: 'white',
});

const ButtonContainer = styled('div')({
  opacity: 0,
  transition: 'opacity 0.125s ease-in-out',
});

type PersonCardProps = {
  id: string;
  size: 'l' | 'm';
  photoUrl: string;
  name: string;
  subtitle: string;
};

export const PersonCard: FC<PropsWithChildren<PersonCardProps>> = ({
  id,
  size,
  photoUrl,
  name,
  subtitle,
}) => {
  return (
    <PersonCardContainer
      sx={{
        width: size === 'l' ? 392 : 291,
        height: size === 'l' ? 392 : 291,
      }}
      photoUrl={photoUrl}
    >
      <ButtonContainer className="button">
        <a href={`/prisoner/${id}`}>
          <Button variant="red">перейти</Button>
        </a>
      </ButtonContainer>

      <PersonCardContent>
        <Typography variant={size === 'l' ? 'h2' : 'h3'}>{name}</Typography>
        <Typography variant={size === 'l' ? 'subtitle1' : 'p3'}>
          {subtitle}
        </Typography>
      </PersonCardContent>
    </PersonCardContainer>
  );
};
