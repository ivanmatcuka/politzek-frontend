import {
  Typography as MUITypography,
  TypographyProps as MUITypographyProps,
} from '@mui/material';
import { FC, PropsWithChildren } from 'react';

import { TypographyVariants } from '../../../theming/theme/typography';

export type TypographyProps = {
  variant: TypographyVariants;
} & Pick<
  MUITypographyProps,
  | 'component'
  | 'pl'
  | 'pt'
  | 'pb'
  | 'pr'
  | 'color'
  | 'textAlign'
  | 'width'
  | 'lineHeight'
  | 'margin'
  | 'mb'
  | 'mt'
  | 'my'
>;
export const Typography: FC<PropsWithChildren<TypographyProps>> = ({
  children,
  ...rest
}) => <MUITypography {...rest}>{children}</MUITypography>;
