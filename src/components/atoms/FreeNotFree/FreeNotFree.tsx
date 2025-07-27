'use client';

import { Box, Grid, styled } from '@mui/material';
import Image from 'next/image';
import { FC } from 'react';

import { Typography } from '../../../components/typography/Typography/Typography';

const MAX_ITEMS = 972;

const StyledGridItem = styled(Grid)<{ backgroundImage?: string }>(
  ({ backgroundImage, theme }) => ({
    backgroundImage,
    overflow: 'hidden',

    padding: theme.spacing(1),
  }),
);

type FreeNotFreeProps = {
  free?: number;
  notFree?: number;
};
export const FreeNotFree: FC<FreeNotFreeProps> = ({ free, notFree }) => {
  return (
    <Grid gap={2} justifyContent="center" maxWidth={536} container>
      <Grid textAlign="center" width={260}>
        <Typography variant="legend">{`${notFree} – лишены свободы`}</Typography>
      </Grid>
      <Grid textAlign="center" width={260}>
        <Typography variant="legend">{`${free} – на свободе`}</Typography>
      </Grid>
      {[notFree, free].map((value, index) => (
        <StyledGridItem
          backgroundImage={index === 0 ? 'url("/free_frame.svg")' : undefined}
          height={448}
          key={index}
          width={260}
          item
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
                  alt="person"
                  height={12}
                  key={index}
                  src="/person.svg"
                  width={6}
                />
              ))}
          </Box>
        </StyledGridItem>
      ))}
    </Grid>
  );
};
