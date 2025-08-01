'use client';

import { MenuList, Slider, Tooltip, styled } from '@mui/material';
import { SliderProps, SliderValueLabelProps } from '@mui/material/Slider';
import { FC } from 'react';

import { Typography } from '../../../components/typography/Typography/Typography';
import { Arrow } from '../Filter/Arrow';
import { MenuItem } from '../Filter/MenuItem';
import { Paper } from '../Filter/Paper';
import { Select } from '../Filter/Select';

type FilterSliderProps = {
  label: string;
  max: number;
  min: number;
} & Pick<SliderProps, 'value' | 'onChange' | 'onChangeCommitted'>;

const StyledSlider = styled(Slider)(({ theme }) => ({
  boxShadow: 'none',
  height: 2,

  padding: 0,

  '.MuiSlider-thumb': {
    boxShadow: 'none !important',
    color: theme.palette.brand.black,

    height: 15,

    width: 15,

    '&:before, &:after': {
      display: 'none',
    },
  },

  '.MuiSlider-track': {
    color: theme.palette.brand.black,

    height: 0,
  },

  '& .MuiSlider-rail': {
    color: theme.palette.brand.grey,
  },
}));

const ValueLabelComponent = (props: SliderValueLabelProps) => {
  const { children, value } = props;

  return (
    <Tooltip enterTouchDelay={0} placement="top" title={value}>
      {children}
    </Tooltip>
  );
};

export const FilterSlider: FC<FilterSliderProps> = ({
  label,
  max,
  min,
  onChange,
  onChangeCommitted,
  value,
}) => {
  return (
    <Select
      MenuProps={{
        MenuListProps: {
          component: MenuList,
          disabledItemsFocusable: true,
        },
        slots: {
          paper: Paper,
        },
      }}
      renderValue={() =>
        Array.isArray(value) && (
          <Typography variant="button">{`${label} (${value[0]}-${value[1]})`}</Typography>
        )
      }
      IconComponent={Arrow}
      id="range-selector"
      value={value}
      multiple
    >
      <MenuItem autoFocus dense disableRipple>
        <StyledSlider
          max={max}
          min={min}
          onChange={onChange}
          onChangeCommitted={onChangeCommitted}
          slots={{ valueLabel: ValueLabelComponent }}
          value={value}
          valueLabelDisplay="on"
        />
      </MenuItem>
    </Select>
  );
};
