import { useConfigProvider } from '../components/ConfigProvider/ConfigProviderContext';
import { type ColorSchemeType, DEFAULT_COLOR_SCHEME } from '../lib/colorScheme';

export function useAppearance(): ColorSchemeType {
  const { appearance } = useConfigProvider();

  return appearance ?? DEFAULT_COLOR_SCHEME;
}
