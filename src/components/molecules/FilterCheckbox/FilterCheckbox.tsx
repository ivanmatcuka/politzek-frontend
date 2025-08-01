'use client';

import { SelectChangeEvent, SelectProps } from '@mui/material';
import { FC, useCallback, useMemo } from 'react';

import { Checkbox } from '../../../components/atoms/Checkbox/Checkbox';
import { Typography } from '../../../components/typography/Typography/Typography';
import { Arrow } from '../Filter/Arrow';
import { MenuItem } from '../Filter/MenuItem';
import { Paper } from '../Filter/Paper';
import { Select } from '../Filter/Select';

type Option = {
  id: number | string;
  value: string;
};

type Value =
  | number
  | string
  | null
  | boolean
  | (number | string | null | boolean)[];

type FilterCheckboxProps = {
  label: string;
  options: Option[];
  onChange?: (value: Value) => void;
} & Pick<SelectProps, 'value' | 'multiple'>;

export const FilterCheckbox: FC<FilterCheckboxProps> = ({
  label,
  multiple = false,
  onChange,
  options,
  value = '',
}) => {
  const handleChange = useCallback(
    (event: SelectChangeEvent<unknown>) => {
      const newValue = event.target.value as Value;

      onChange && onChange(newValue);
    },
    [onChange],
  );

  const renderValueString = useMemo(() => {
    const isSet = Array.isArray(value) ? value.length : value;

    return `${label}${isSet ? ` (${value})` : ''}`;
  }, [label, value]);

  return (
    <Select
      MenuProps={{
        MenuListProps: {
          disabledItemsFocusable: true,
        },
        slots: {
          paper: Paper,
        },
      }}
      renderValue={() => (
        <Typography variant="button">{renderValueString}</Typography>
      )}
      IconComponent={Arrow}
      id="range-selector"
      multiple={multiple}
      name={label}
      onChange={handleChange}
      value={value}
      displayEmpty
    >
      <MenuItem value="">
        <Typography color="brand.grey" variant="button">
          {<em>None</em>}
        </Typography>
      </MenuItem>
      {options.map((option) => (
        <MenuItem
          key={option.id}
          value={option.id}
          autoFocus
          dense
          disableRipple
        >
          <Checkbox
            checked={
              multiple
                ? (value as string[]).includes(option.id.toString())
                : value === option.id
            }
          />
          <Typography variant="button">{option.value}</Typography>
        </MenuItem>
      ))}
    </Select>
  );
};
