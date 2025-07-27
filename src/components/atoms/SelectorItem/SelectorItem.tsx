import { Tab as MUITab, TabProps as MUITabProps, styled } from '@mui/material';
import { FC, PropsWithChildren } from 'react';

import { TypographyProps } from '~/components/typography/Typography/Typography';
import { TypographyVariants } from '~/theming/theme/typography';

const StyledTab = styled(MUITab)<{ variant: TypographyVariants }>(({
  theme,
  variant,
}) => {
  return {
    opacity: '40%',

    position: 'relative',

    textTransform: 'none',
    ...theme.typography[variant],

    '.MuiTabs-indicator': {
      display: 'none',
    },

    '&:active:after': {
      display: 'block',

      opacity: '100%',
    },

    '&:after': {
      background: 'url("/circle.svg") center no-repeat',

      backgroundSize: 'contain',
      content: '""',

      display: 'none',
      inset: 0,
      opacity: '40%',

      position: 'absolute',
      transform: 'rotate(-4deg)',
    },

    '&:hover': {
      opacity: '100%',
    },

    '&:hover:after': {
      display: 'block',
    },

    '&.Mui-selected': {
      color: theme.palette.brand.black,

      opacity: '100%',
    },

    '&.Mui-selected:after': {
      display: 'block',

      opacity: '100%',
    },
  };
});

export const SelectorItem: FC<
  PropsWithChildren<Omit<MUITabProps, 'children'> & TypographyProps>
> = ({ children, variant = 'subtitle1', ...rest }) => (
  <StyledTab label={children} variant={variant} disableRipple {...rest} />
);
