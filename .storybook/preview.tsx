import { ThemeProvider } from '@emotion/react';
import type { Preview } from '@storybook/react';

import { theme } from '../src/theming/theme';

const defaultTheme = theme;

const withThemeProvider = (Story, context) => {
  return (
    <ThemeProvider theme={{ ...defaultTheme, cssVariables: true }}>
      <Story {...context} />
    </ThemeProvider>
  );
};

export const decorators = [withThemeProvider];

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
};

export default preview;
