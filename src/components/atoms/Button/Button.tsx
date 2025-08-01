'use client';

import {
  Button as MUIButton,
  ButtonProps as MUIButtonProps,
  styled,
} from '@mui/material';
import { FC, PropsWithChildren } from 'react';

import { Typography } from '~/components/typography/Typography/Typography';
import { PaletteColors } from '~/theming/theme/palette';

const Container = styled('div')<{ variant: ButtonProps['variant'] }>(({
  theme,
  variant,
}) => {
  const palette: PaletteColors[] | null =
    variant === 'outline'
      ? null
      : variant === 'default'
      ? ['yellow', 'yellow20', 'yellow40']
      : ['red', 'red20', 'red40'];

  return {
    display: 'inline-block',

    position: 'relative',

    '&:active': {
      '&:after': {
        backgroundColor: palette ? theme.palette.brand[palette[2]] : undefined,
      },
    },

    '&:before': {
      backgroundColor: palette ? theme.palette.brand[palette[0]] : undefined,

      borderRadius: '50%',
      content: '""',
      height: 54,

      inset: '-8px 0 0 0',

      position: 'absolute',
      transform: 'rotate(1.8deg)',

      transition: 'transform 125ms',

      zIndex: 100,
    },

    '&:hover': {
      '.button__body': {
        transform: 'rotate(2.86deg)',
      },
      '&:after': {
        backgroundColor: palette ? theme.palette.brand[palette[1]] : undefined,

        transform: 'rotate(-2.92deg)',
      },
    },
  };
});

const Background = styled('div')(() => ({}));

const StyledMUIButton = styled(MUIButton)(({ theme }) => ({
  border: `solid 2px ${theme.palette.brand.black}`,
  borderRadius: 18,

  height: 36,
  padding: theme.spacing(0, 3),
  position: 'relative',
  transform: 'rotate(-2.16deg)',

  transition: 'transform 125ms',

  zIndex: 200,

  [theme.breakpoints.down('lg')]: {
    '.MuiButton-endIcon': {
      display: 'none',
    },
  },
}));

const DefaultButton = styled(StyledMUIButton)(({ theme }) => ({
  color: theme.palette.brand.black,
}));

const RedMUIButton = styled(StyledMUIButton)(({ theme }) => ({
  border: `solid 2px ${theme.palette.brand.white}`,

  color: theme.palette.brand.white,
}));

const OutlineMUIButton = styled(StyledMUIButton)(({ theme }) => ({
  border: `solid 2px ${theme.palette.brand.black}`,

  color: theme.palette.brand.black,

  '&:active': {
    backgroundColor: theme.palette.brand.black20,

    color: theme.palette.brand.yellow,
  },

  '&:hover': {
    backgroundColor: theme.palette.brand.black,

    color: theme.palette.brand.white,
  },
}));

type ButtonProps = {
  variant?: 'red' | 'default' | 'outline';
} & Pick<
  MUIButtonProps,
  'onClick' | 'endIcon' | 'disabled' | 'component' | 'href' | 'startIcon'
>;
export const Button: FC<PropsWithChildren<ButtonProps>> = ({
  children,
  variant = 'default',
  ...rest
}) => {
  let button = (
    <DefaultButton className="button__body" disableRipple {...rest}>
      <Typography variant="button">{children}</Typography>
    </DefaultButton>
  );

  if (variant === 'red') {
    button = (
      <RedMUIButton className="button__body" disableRipple {...rest}>
        <Typography variant="button">{children}</Typography>
      </RedMUIButton>
    );
  } else if (variant === 'outline') {
    button = (
      <OutlineMUIButton
        className="button__body"
        variant="outlined"
        disableRipple
        {...rest}
      >
        <Typography variant="button">{children}</Typography>
      </OutlineMUIButton>
    );
  }

  return (
    <Container variant={variant}>
      {button}
      {variant !== 'outline' && <Background className="button__background" />}
    </Container>
  );
};
