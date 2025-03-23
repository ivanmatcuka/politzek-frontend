'use client';

import { styled } from '@mui/material';
import { FC, PropsWithChildren } from 'react';

import { Button } from '@/components/atoms/Button/Button';
import { Typography } from '@/components/typography/Typography/Typography';
import { getPrisonerPicture } from '@/helpers/getPrisonerPicture';

import { PersonCardContainer } from './PersonCardContainer';

const PersonCardContent = styled('div')({
  bottom: 9,
  color: 'white',
  left: 12,
  position: 'absolute',
});

const ButtonContainer = styled('div')({
  opacity: 0,
  transition: 'opacity 0.125s ease-in-out',
});

type PersonCardProps = {
  subtitle: string;
  size: 'l' | 'm';
  name: string;
  mediaItemUrl: string;
  id: string;
};

export const PersonCard: FC<PropsWithChildren<PersonCardProps>> = ({
  subtitle,
  size,
  name,
  mediaItemUrl,
  id,
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
