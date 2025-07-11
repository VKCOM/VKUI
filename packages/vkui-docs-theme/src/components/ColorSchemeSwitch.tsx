'use client';

import { Icon20MoonOutline, Icon20SunOutline } from '@vkontakte/icons';
import { Button, Skeleton } from '@vkontakte/vkui';
import { useMounted } from 'nextra/hooks';
import { useColorScheme } from '../contexts';

export function ColorSchemeSwitch() {
  const { setColorScheme, resolvedColorScheme } = useColorScheme();
  const mounted = useMounted();

  if (!mounted) {
    return <Skeleton width={36} height={36} />;
  }

  const isDark = resolvedColorScheme === 'dark';
  const Icon = isDark ? Icon20MoonOutline : Icon20SunOutline;

  return (
    <Button
      size="l"
      before={<Icon />}
      mode="secondary"
      appearance="neutral"
      aria-label={isDark ? 'Переключить на светлую тему' : 'Переключить на тёмную тему'}
      onClick={() => setColorScheme(isDark ? 'light' : 'dark')}
    />
  );
}
