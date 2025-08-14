import { Icon20MoonOutline, Icon20PalleteOutline, Icon20SunOutline } from '@vkontakte/icons';
import { Button } from '@vkontakte/vkui';
import { usePlaygroundStore } from '@/providers/playgroundStoreProvider';

const SCHEME_LABEL_SWITCH = {
  inherit: 'Переключить на светлую тему',
  light: 'Переключить на тёмную тему',
  dark: 'Переключить на тему сайта',
};

const SCHEMES = ['inherit', 'light', 'dark'] as const;

const SCHEME_ICONS = {
  inherit: Icon20PalleteOutline,
  light: Icon20SunOutline,
  dark: Icon20MoonOutline,
};

export function ColorSchemePicker() {
  const playgroundColorScheme = usePlaygroundStore((store) => store.colorScheme);
  const colorSchemeOptions = usePlaygroundStore((store) => store.colorSchemeOptions);
  const updateColorScheme = usePlaygroundStore((store) => store.updateColorScheme);
  const ColorSchemeIcon = SCHEME_ICONS[playgroundColorScheme];

  // disable color scheme picker for special themes
  const colorSchemeDisabled = colorSchemeOptions.some((scheme) => scheme.disabled);
  const colorSchemeSupported = colorSchemeOptions
    .filter((scheme) => !scheme.disabled)
    .map((scheme) => scheme.value)
    .join(' ');

  const toggleColorScheme = () => {
    updateColorScheme(SCHEMES[(SCHEMES.indexOf(playgroundColorScheme) + 1) % 3]);
  };

  return (
    <Button
      size="s"
      mode="secondary"
      appearance="neutral"
      before={<ColorSchemeIcon />}
      onClick={toggleColorScheme}
      disabled={colorSchemeDisabled}
      title={
        colorSchemeDisabled
          ? `Поддерживается только схема ${colorSchemeSupported}`
          : SCHEME_LABEL_SWITCH[playgroundColorScheme]
      }
      aria-label={SCHEME_LABEL_SWITCH[playgroundColorScheme]}
    />
  );
}
