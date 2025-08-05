'use client';

import Box from '@mui/material/Box';
import { ReactNode } from 'react';

type TabPanelProps = {
  children?: ReactNode;
  index: number;
  value: number;
};

export const CustomTabPanel = (props: TabPanelProps) => {
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
