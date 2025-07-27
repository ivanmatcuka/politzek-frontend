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
  padding: 0,
  height: 2,

  boxShadow: 'none',

  '.MuiSlider-track': {
    height: 0,

    color: theme.palette.brand.black,
  },

  '& .MuiSlider-rail': {
    color: theme.palette.brand.grey,
  },

  '.MuiSlider-thumb': {
    height: 15,
    width: 15,

    boxShadow: 'none !important',

    color: theme.palette.brand.black,

    '&:before, &:after': {
      display: 'none',
    },
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
  value,
  label,
  max,
  min,
  onChange,
  onChangeCommitted,
}) => {
  return (
    <Select
      id="range-selector"
      value={value}
      IconComponent={Arrow}
      MenuProps={{
        slots: {
          paper: Paper,
        },
        MenuListProps: {
          disabledItemsFocusable: true,
          component: MenuList,
        },
      }}
      renderValue={() =>
        Array.isArray(value) && (
          <Typography variant="button">{`${label} (${value[0]}-${value[1]})`}</Typography>
        )
      }
      multiple
    >
      <MenuItem dense disableRipple autoFocus>
        <StyledSlider
          value={value}
          valueLabelDisplay="on"
          onChange={onChange}
          onChangeCommitted={onChangeCommitted}
          max={max}
          min={min}
          slots={{ valueLabel: ValueLabelComponent }}
        />
      </MenuItem>
    </Select>
  );
};
