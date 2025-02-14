import { useConfigProvider } from '../components/ConfigProvider/ConfigProviderContext';
import { type Direction } from '../lib/direction';

export function useConfigDirection(): Direction {
  const { direction } = useConfigProvider();

  return direction || 'ltr';
}
