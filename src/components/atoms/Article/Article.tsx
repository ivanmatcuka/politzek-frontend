'use client';

import {
  Chip as MUIChip,
  ChipProps as MUIChipProps,
  styled,
} from '@mui/material';
import { FC } from 'react';

const StyledChip = styled(MUIChip)(({ theme }) => ({
  ...theme.typography.caption,

  height: 23,

  '.MuiChip-label': {
    padding: '0 9px',
  },
}));

export const Article: FC<Pick<MUIChipProps, 'label'>> = (props) => (
  <StyledChip {...props} variant="outlined" />
);
