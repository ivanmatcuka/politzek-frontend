'use client';

import { Grid, styled } from '@mui/material';
import { FC, PropsWithChildren } from 'react';

import { Typography } from '../../../components/typography/Typography/Typography';

const CatPicture = styled('img')({
  position: 'absolute',

  top: 0,
  left: '-35%',

  width: 130,
  height: 135,

  '@media (max-width: 1200px)': {
    width: 102,
    height: 106,
  },
});

type CounterProps = {
  label: string;
  catPictureUrl?: string;
};
export const Counter: FC<PropsWithChildren<CounterProps>> = ({
  children,
  label,
  catPictureUrl,
}) => {
  return (
    <Grid container flexDirection="row">
      <Grid item xs={catPictureUrl ? 6 : 12}>
        <Typography variant="subtitle1">{label}</Typography>
      </Grid>
      {catPictureUrl && (
        <Grid item xs={6} position="relative">
          <CatPicture src={catPictureUrl} />
        </Grid>
      )}
      <Grid item>
        <Typography variant="h1" component="p">
          {children}
        </Typography>
      </Grid>
    </Grid>
  );
};
