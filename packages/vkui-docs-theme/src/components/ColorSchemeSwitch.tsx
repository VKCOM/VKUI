'use client';

import { Icon20MoonOutline, Icon20SunOutline } from '@vkontakte/icons';
import { SegmentedControl, Skeleton } from '@vkontakte/vkui';
import { useMounted } from 'nextra/hooks';
import { useColorScheme } from '../contexts';

const options = [
  { 'value': 'light', 'label': <Icon20SunOutline />, 'aria-label': 'Переключить на светлую тему' },
  { 'value': 'dark', 'label': <Icon20MoonOutline />, 'aria-label': 'Переключить на тёмную тему' },
];

const SWITCH_WIDTH = 94;

export function ColorSchemeSwitch() {
  const { setColorScheme, resolvedColorScheme } = useColorScheme();
  const mounted = useMounted();

  if (!mounted) {
    return <Skeleton width={SWITCH_WIDTH} height={36} />;
  }

  return (
    <SegmentedControl
      size="l"
      style={{ width: SWITCH_WIDTH }}
      value={resolvedColorScheme}
      // @ts-expect-error: TS2322 VKUI fix types?
      onChange={setColorScheme}
      options={options}
    />
  );
}
