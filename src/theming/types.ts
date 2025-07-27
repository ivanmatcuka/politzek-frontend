import { CSSObject } from '@mui/material/styles';

import { colors } from './theme/palette';

declare module '@mui/material/styles/createPalette' {
  interface Palette {
    brand: typeof colors;
  }

  interface PaletteOptions {
    brand: typeof colors;
  }
}

declare module '@mui/material/styles' {
  interface TypographyVariants {
    h1: CSSObject;
    h2: CSSObject;
    h3: CSSObject;

    subtitle1: CSSObject;

    p1: CSSObject;
    p2: CSSObject;
    p3: CSSObject;

    mi: CSSObject;
    button: CSSObject;
    legend: CSSObject;
    caption: CSSObject;
  }
}

declare module '@mui/material/Typography' {
  interface TypographyPropsVariantOverrides {
    h1: true;
    h2: true;
    h3: true;

    subtitle1: true;

    p1: true;
    p2: true;
    p3: true;

    mi: true;
    button: true;
    legend: true;
    caption: true;
  }
}
