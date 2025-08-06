'use client';

import Box from '@mui/material/Box';
import MUITabs from '@mui/material/Tabs';
import { FC, ReactNode, SyntheticEvent, useState } from 'react';

import { SelectorItem } from '~/components/atoms/SelectorItem/SelectorItem';

import { CustomTabPanel } from './CustomTabPanel';
import st from './Selector.module.scss';

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
  const [value, setValue] = useState(0);

  const handleChange = (_: SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Box>
      <MUITabs
        TabIndicatorProps={{
          style: { display: 'none' },
        }}
        className={st.tabs}
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
      </MUITabs>
      {items.map((item, index) => (
        <CustomTabPanel index={index} key={index + 1} value={value}>
          {item.element}
        </CustomTabPanel>
      ))}
    </Box>
  );
};
