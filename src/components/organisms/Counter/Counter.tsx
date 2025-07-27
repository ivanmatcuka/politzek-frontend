'use client';

import { Grid, styled } from '@mui/material';
import { FC, PropsWithChildren } from 'react';

import { Typography } from '../../../components/typography/Typography/Typography';

const CatPicture = styled('img')({
  height: 135,

  left: '-35%',
  position: 'absolute',

  top: 0,
  width: 130,

  '@media (max-width: 1200px)': {
    height: 106,
    width: 102,
  },
});

type CounterProps = {
  catPictureUrl?: string;
  label: string;
};
export const Counter: FC<PropsWithChildren<CounterProps>> = ({
  catPictureUrl,
  children,
  label,
}) => {
  return (
    <Grid flexDirection="row" container>
      <Grid xs={catPictureUrl ? 6 : 12} item>
        <Typography variant="subtitle1">{label}</Typography>
      </Grid>
      {catPictureUrl && (
        <Grid position="relative" xs={6} item>
          <CatPicture src={catPictureUrl} />
        </Grid>
      )}
      <Grid item>
        <Typography component="p" variant="h1">
          {children}
        </Typography>
      </Grid>
    </Grid>
  );
};
