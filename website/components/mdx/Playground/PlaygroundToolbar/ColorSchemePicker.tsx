import * as React from 'react';
import { Icon20MoonOutline, Icon20SunOutline } from '@vkontakte/icons';
import { Button } from '@vkontakte/vkui';
import { usePlaygroundStore } from '@/providers/playgroundStoreProvider';
import { useResolvedColorScheme } from '../hooks/useResolvedColorScheme';

export function ColorSchemePicker() {
  const colorScheme = useResolvedColorScheme();
  const colorSchemeOptions = usePlaygroundStore((store) => store.colorSchemeOptions);
  const updateColorScheme = usePlaygroundStore((store) => store.updateColorScheme);
  const ColorSchemeIcon = colorScheme === 'light' ? Icon20SunOutline : Icon20MoonOutline;

  // disable color scheme picker for special themes
  const colorSchemeDisabled = colorSchemeOptions.some((scheme) => scheme.disabled);

  const toggleColorScheme = () => {
    updateColorScheme(colorScheme === 'dark' ? 'light' : 'dark');
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
    />
  );
}
