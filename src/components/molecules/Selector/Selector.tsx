'use client';

import { styled } from '@mui/material';
import Box from '@mui/material/Box';
import MUITabs from '@mui/material/Tabs';
import React, { FC, ReactNode } from 'react';

import { SelectorItem } from '../../atoms/SelectorItem/SelectorItem';

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

const CustomTabPanel = (props: TabPanelProps) => {
  const { children, value, index, ...rest } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...rest}
    >
      {value === index && <Box>{children}</Box>}
    </div>
  );
};

const StyledMUITabs = styled(MUITabs)(() => ({
  '.MuiTabs-flexContainer': {
    '@media (max-width: 1200px)': {
      alignItems: 'flex-start',

      flexDirection: 'column',
    },
  },
}));

const a11yProps = (index: number) => {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
};

type TabsItem = {
  label: string;
  element: ReactNode;
};

type TabsProps = {
  items: TabsItem[];
};
export const Selector: FC<TabsProps> = ({ items }) => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Box>
      <StyledMUITabs
        value={value}
        onChange={handleChange}
        TabIndicatorProps={{
          style: { display: 'none' },
        }}
      >
        {items.map((item, index) => (
          <SelectorItem
            key={index + 1}
            variant="subtitle1"
            label={item.label}
            {...a11yProps(index)}
          />
        ))}
      </StyledMUITabs>
      {items.map((item, index) => (
        <CustomTabPanel key={index + 1} value={value} index={index}>
          {item.element}
        </CustomTabPanel>
      ))}
    </Box>
  );
};
