'use client';

import {
  Checkbox as MUICheckbox,
  CheckboxProps as MUICheckboxProps,
  styled,
} from '@mui/material';
import { FC, PropsWithChildren, SVGProps } from 'react';

const UncheckedIcon = (props: SVGProps<SVGSVGElement>) => (
  <div>
    <svg width={20} height={20} fill="none" {...props}>
      <path stroke="currentColor" strokeWidth={2} d="M1 1h18v18H1V1Z" />
    </svg>
  </div>
);

const CheckedIcon = (props: SVGProps<SVGSVGElement>) => (
  <div>
    <svg width={20} height={20} fill="none" {...props}>
      <path
        d="M0 0V20H20V0H0ZM8.17308 15.0183L4.29808 10.712L5.44183 9.68269L8.13414 12.674L14.5192 5.07019L15.699 6.05769L8.17308 15.0183Z"
        fill="currentColor"
      />
    </svg>
  </div>
);

const StyledCheckbox = styled(MUICheckbox)(({ theme }) => ({
  display: 'block',

  padding: 0,
  width: 20,
  height: 20,

  color: theme.palette.brand.black20,

  '&:hover': {
    color: theme.palette.brand.black,
  },

  '&.Mui-disabled': {
    color: theme.palette.brand.grey,
  },
}));

export const Checkbox: FC<
  PropsWithChildren<Pick<MUICheckboxProps, 'checked' | 'disabled'>>
> = (props) => (
  <StyledCheckbox
    {...props}
    color="default"
    checkedIcon={<CheckedIcon />}
    icon={<UncheckedIcon />}
    disableRipple
  />
);
