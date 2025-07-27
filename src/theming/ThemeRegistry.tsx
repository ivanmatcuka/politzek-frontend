'use client';

import { ThemeProvider } from '@mui/material/styles';
import { ReactNode } from 'react';

import { theme } from './theme';

export default function ThemeRegistry({ children }: { children: ReactNode }) {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
}
