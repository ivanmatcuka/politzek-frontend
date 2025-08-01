import { experimental_extendTheme as extendTheme } from '@mui/material/styles';

import { palette } from './palette';
import { typography } from './typography';

export const theme = extendTheme({
  typography,
  colorSchemes: {
    light: {
      palette,
    },
  },
});
