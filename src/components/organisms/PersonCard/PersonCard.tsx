'use client';

import { styled } from '@mui/material';
import Link from 'next/link';
import { FC, PropsWithChildren } from 'react';

import { Button } from '~/components/atoms/Button/Button';
import { Typography } from '~/components/typography/Typography/Typography';
import { getPrisonerPicture } from '~/helpers/getPrisonerPicture';

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
  id: string;
  mediaItemUrl: string;
  name: string;
  size: 'l' | 'm';
  subtitle: string;
};

export const PersonCard: FC<PropsWithChildren<PersonCardProps>> = ({
  id,
  mediaItemUrl,
  name,
  size,
  subtitle,
}) => {
  const photoUrl = getPrisonerPicture(mediaItemUrl);

  return (
    <PersonCardContainer
      sx={{
        height: size === 'l' ? 392 : 291,
        width: size === 'l' ? 392 : 291,
      }}
      hasPicture={!!mediaItemUrl}
      photoUrl={photoUrl}
    >
      <ButtonContainer className="button">
        <Link href={`/prisoner/${id}`}>
          <Button variant="red">перейти</Button>
        </Link>
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
