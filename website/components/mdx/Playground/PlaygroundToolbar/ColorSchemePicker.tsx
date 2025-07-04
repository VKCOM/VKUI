import { Icon20MoonOutline, Icon20SunOutline } from '@vkontakte/icons';
import { Button } from '@vkontakte/vkui';
import { usePlaygroundStore } from '@/providers/playgroundStoreProvider';
import { useResolvedColorScheme } from '../hooks/useResolvedColorScheme';

export function ColorSchemePicker() {
  const colorScheme = useResolvedColorScheme();
  const colorSchemeOptions = usePlaygroundStore((store) => store.colorSchemeOptions);
  const updateColorScheme = usePlaygroundStore((store) => store.updateColorScheme);
  const isDark = colorScheme === 'dark';
  const ColorSchemeIcon = isDark ? Icon20MoonOutline : Icon20SunOutline;

  // disable color scheme picker for special themes
  const colorSchemeDisabled = colorSchemeOptions.some((scheme) => scheme.disabled);

  const toggleColorScheme = () => {
    updateColorScheme(isDark ? 'light' : 'dark');
  };

  return (
    <Button
      size="s"
      mode="secondary"
      appearance="neutral"
      before={<ColorSchemeIcon />}
      onClick={toggleColorScheme}
      disabled={colorSchemeDisabled}
      title={colorSchemeDisabled ? `Поддерживается только схема ${colorScheme}` : undefined}
      aria-label={isDark ? 'Переключить на светлую тему' : 'Переключить на тёмную тему'}
    />
  );
}
