'use client';

import { styled } from '@mui/material';
import { FC, PropsWithChildren } from 'react';

import { Button } from '@/components/atoms/Button/Button';
import { Typography } from '@/components/typography/Typography/Typography';
import { getPrisonerPicture } from '@/helpers/getPrisonerPicture';

const PersonCardContainer = styled('div')<{
  photoUrl: string;
  hasPicture: boolean;
}>(({ photoUrl, hasPicture, theme }) => {
  const background = hasPicture
    ? `linear-gradient(0deg, rgba(7, 71, 59, 0.30) 0%, rgba(7, 71, 59, 0.30) 100%), linear-gradient(180deg, rgba(0, 0, 0, 0.00) 56.67%, rgba(0, 0, 0, 0.60) 100%), url(${photoUrl}) no-repeat`
    : `url(${photoUrl}) no-repeat`;

  const hoverBackground = hasPicture
    ? `linear-gradient(0deg, rgba(7, 71, 59, 0.50) 0%, rgba(7, 71, 59, 0.50) 100%), linear-gradient(180deg, rgba(0, 0, 0, 0.00) 0%, rgba(0, 0, 0, 0.60) 100%), url(${photoUrl}) no-repeat`
    : `url(${photoUrl}) no-repeat`;

  return {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    margin: theme.spacing(1.5),

    position: 'relative',
    overflow: 'hidden',

    background,
    backgroundPosition: 'center',
    backgroundSize: 'cover',

    backgroundColor: hasPicture ? 'transparent' : theme.palette.brand.green,
    backgroundBlendMode: hasPicture ? 'normal' : 'overlay',

    h2: {
      textTransform: 'uppercase',
    },

    '&:hover': {
      background: hoverBackground,
      backgroundPosition: 'center',
      backgroundSize: 'cover',

      backgroundColor: hasPicture ? 'transparent' : theme.palette.brand.green,
      backgroundBlendMode: hasPicture ? 'normal' : 'overlay',

      '.button': {
        opacity: 1,
      },
    },
  };
});

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
  mediaItemUrl: string;
  name: string;
  subtitle: string;
};

export const PersonCard: FC<PropsWithChildren<PersonCardProps>> = ({
  id,
  size,
  mediaItemUrl,
  name,
  subtitle,
}) => {
  const photoUrl = getPrisonerPicture(mediaItemUrl);

  return (
    <PersonCardContainer
      sx={{
        width: size === 'l' ? 392 : 291,
        height: size === 'l' ? 392 : 291,
      }}
      photoUrl={photoUrl}
      hasPicture={!!mediaItemUrl}
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
