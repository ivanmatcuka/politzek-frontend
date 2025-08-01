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
  const { children, index, value, ...rest } = props;

  return (
    <div
      aria-labelledby={`simple-tab-${index}`}
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      role="tabpanel"
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
    'aria-controls': `simple-tabpanel-${index}`,
    id: `simple-tab-${index}`,
  };
};

type TabsItem = {
  element: ReactNode;
  label: string;
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
        TabIndicatorProps={{
          style: { display: 'none' },
        }}
        onChange={handleChange}
        value={value}
      >
        {items.map((item, index) => (
          <SelectorItem
            key={index + 1}
            label={item.label}
            variant="subtitle1"
            {...a11yProps(index)}
          />
        ))}
      </StyledMUITabs>
      {items.map((item, index) => (
        <CustomTabPanel index={index} key={index + 1} value={value}>
          {item.element}
        </CustomTabPanel>
      ))}
    </Box>
  );
};
