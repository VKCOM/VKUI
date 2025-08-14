'use client';

import { Icon20MoonOutline, Icon20PalleteOutline, Icon20SunOutline } from '@vkontakte/icons';
import { Button, Skeleton } from '@vkontakte/vkui';
import { useMounted } from 'nextra/hooks';
import { useColorScheme } from '../contexts';

const SCHEME_LABEL_SWITCH = {
  system: 'Переключить на светлую тему',
  light: 'Переключить на тёмную тему',
  dark: 'Переключить на системную тему',
};

const SCHEMES = ['system', 'light', 'dark'] as const;

const SCHEME_ICONS = {
  light: Icon20SunOutline,
  dark: Icon20MoonOutline,
  system: Icon20PalleteOutline,
};

export function ColorSchemeSwitch() {
  const { setColorScheme, colorScheme = 'system' } = useColorScheme();
  const mounted = useMounted();

  if (!mounted) {
    return <Skeleton width={36} height={36} />;
  }

  const Icon = SCHEME_ICONS[colorScheme];

  return (
    <Button
      size="l"
      before={<Icon />}
      mode="secondary"
      appearance="neutral"
      title={SCHEME_LABEL_SWITCH[colorScheme]}
      aria-label={SCHEME_LABEL_SWITCH[colorScheme]}
      onClick={() => setColorScheme(SCHEMES[(SCHEMES.indexOf(colorScheme) + 1) % 3])}
    />
  );
}
