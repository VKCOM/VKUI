import * as React from 'react';
import { ColorSchemeContext } from '../components/ConfigProvider/ConfigProviderSubContexts';
import { type ColorSchemeType, DEFAULT_COLOR_SCHEME } from '../lib/colorScheme';

export function useColorScheme(): ColorSchemeType {
  return React.useContext(ColorSchemeContext) ?? DEFAULT_COLOR_SCHEME;
}
