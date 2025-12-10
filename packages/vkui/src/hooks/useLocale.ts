import { useConfigProvider } from '../components/ConfigProvider/ConfigProviderContext';

export function useLocale(): string {
  const { locale } = useConfigProvider();

  return locale;
}
