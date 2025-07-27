export const typography = {
  button: {
    fontFamily: 'Nunito Sans',
    fontSize: 16,
    fontWeight: 800,
    lineHeight: 1,
  },
  caption: {
    fontFamily: 'Nunito Sans',
    fontSize: 14,
    lineHeight: 'normal',
  },
  h1: {
    fontFamily: 'Unbounded',
    fontSize: 70,
    lineHeight: 0.85,

    ['@media (max-width: 1200px)']: {
      fontSize: 36,
    },
  },

  h2: {
    fontFamily: 'Unbounded',
    fontSize: 28,
    lineHeight: 'normal',
  },

  h3: {
    fontFamily: 'Unbounded',
    fontSize: 22,
    lineHeight: 1,
  },
  legend: {
    fontFamily: 'Noteworthy',
    fontSize: 16,
    lineHeight: 'normal',
  },
  mi: {
    fontFamily: 'Nunito Sans',
    fontSize: 14,
    fontWeight: 600,
    lineHeight: 'normal',

    ['@media (max-width: 1200px)']: {
      fontSize: 11,
      lineHeight: '15px',
    },
  },

  p1: {
    fontFamily: 'Nunito Sans',
    fontSize: 28,
    lineHeight: 'normal',
  },
  p2: {
    fontFamily: 'Nunito Sans',
    fontSize: 22,
    lineHeight: 'normal',

    ['@media (max-width: 1200px)']: {
      fontSize: 18,
    },
  },
  p3: {
    fontFamily: 'Nunito Sans',
    fontSize: 18,
    lineHeight: 'normal',
  },
  subtitle1: {
    fontFamily: 'Nunito Sans',
    fontSize: 24,
    lineHeight: 'normal',

    ['@media (max-width: 1200px)']: {
      fontSize: 20,
    },
  },
} as const;

export type TypographyVariants = keyof typeof typography;
