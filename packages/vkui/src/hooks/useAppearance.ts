import { useConfigProvider } from '../components/ConfigProvider/ConfigProviderContext';
import { type AppearanceType, DEFAULT_APPEARANCE } from '../lib/appearance';

export function useAppearance(): AppearanceType {
  const { appearance } = useConfigProvider();

  return appearance ?? DEFAULT_APPEARANCE;
}
