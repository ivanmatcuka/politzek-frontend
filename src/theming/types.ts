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
    button: CSSObject;
    caption: CSSObject;
    h1: CSSObject;

    h2: CSSObject;

    h3: CSSObject;
    legend: CSSObject;
    mi: CSSObject;

    p1: CSSObject;
    p2: CSSObject;
    p3: CSSObject;
    subtitle1: CSSObject;
  }
}

declare module '@mui/material/Typography' {
  interface TypographyPropsVariantOverrides {
    button: true;
    caption: true;
    h1: true;

    h2: true;

    h3: true;
    legend: true;
    mi: true;

    p1: true;
    p2: true;
    p3: true;
    subtitle1: true;
  }
}
