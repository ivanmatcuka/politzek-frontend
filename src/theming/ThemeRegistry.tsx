'use client';

import { Experimental_CssVarsProvider as CssVarsProvider } from '@mui/material/styles';
import { ReactNode } from 'react';

import { theme } from './theme';

export default function ThemeRegistry({ children }: { children: ReactNode }) {
  return <CssVarsProvider theme={theme}>{children}</CssVarsProvider>;
}
