'use client';

import { Grid, GridProps, styled } from '@mui/material';
import { FC } from 'react';

const Container = styled(Grid)({
  borderImageSlice: 50,
  borderImageSource: `url("/images/frames/frame_default.png")`,
  borderImageWidth: 5,
  borderStyle: 'solid',
  position: 'relative',
});

export const DrawingFrame: FC<GridProps> = ({ children, ...rest }) => (
  <Container {...rest}>{children}</Container>
);
