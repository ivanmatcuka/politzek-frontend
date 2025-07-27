'use client';

import { Box, Grid, styled } from '@mui/material';
import Image from 'next/image';
import { FC } from 'react';

import { Typography } from '../../../components/typography/Typography/Typography';

const MAX_ITEMS = 972;

const StyledGridItem = styled(Grid)<{ backgroundImage?: string }>(
  ({ theme, backgroundImage }) => ({
    padding: theme.spacing(1),
    overflow: 'hidden',

    backgroundImage,
  }),
);

type FreeNotFreeProps = {
  free?: number;
  notFree?: number;
};
export const FreeNotFree: FC<FreeNotFreeProps> = ({ notFree, free }) => {
  return (
    <Grid container maxWidth={536} gap={2} justifyContent="center">
      <Grid width={260} textAlign="center">
        <Typography variant="legend">{`${notFree} – лишены свободы`}</Typography>
      </Grid>
      <Grid width={260} textAlign="center">
        <Typography variant="legend">{`${free} – на свободе`}</Typography>
      </Grid>
      {[notFree, free].map((value, index) => (
        <StyledGridItem
          key={index}
          width={260}
          height={448}
          item
          backgroundImage={index === 0 ? 'url("/free_frame.svg")' : undefined}
        >
          <Box
            display="grid"
            gridTemplateColumns={'repeat(auto-fit, minmax(6px, 9px))'}
            gridTemplateRows={'repeat(auto-fit, 12px)'}
            justifyContent="flex-end"
          >
            {Array.from(Array(value).keys())
              .slice(0, MAX_ITEMS)
              .map((_, index) => (
                <Image
                  width={6}
                  height={12}
                  key={index}
                  alt="person"
                  src="/person.svg"
                />
              ))}
          </Box>
        </StyledGridItem>
      ))}
    </Grid>
  );
};
