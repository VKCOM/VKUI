import { useConfigProvider } from '../components/ConfigProvider/ConfigProviderContext';
import { type ColorSchemeType, DEFAULT_COLOR_SCHEME } from '../lib/colorScheme';

export function useColorScheme(): ColorSchemeType {
  const { appearance: colorScheme } = useConfigProvider();

  return colorScheme ?? DEFAULT_COLOR_SCHEME;
}
