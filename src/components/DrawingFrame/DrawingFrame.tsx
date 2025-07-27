'use client';

import { Grid, GridProps, styled } from '@mui/material';
import { FC } from 'react';

const Container = styled(Grid)({
  position: 'relative',
  borderImageSource: `url("/images/frames/frame_default.png")`,
  borderImageSlice: 50,
  borderImageWidth: 5,
  borderStyle: 'solid',
});

export const DrawingFrame: FC<GridProps> = ({ children, ...rest }) => (
  <Container {...rest}>{children}</Container>
);
