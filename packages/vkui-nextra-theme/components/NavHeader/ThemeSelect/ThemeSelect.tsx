'use client';

import * as React from 'react';
import { Icon20MoonOutline, Icon20SunOutline } from '@vkontakte/icons';
import { noop } from '@vkontakte/vkjs';
import { SegmentedControl, Skeleton } from '@vkontakte/vkui';
import styles from './ThemeSelect.module.css';

const LIGHT_CLASS_NAME = 'vkui--vkBase--light';
const DARK_CLASS_NAME = 'vkui--vkBase--dark';

function removeAppearanceClassNames() {
  // eslint-disable-next-line no-restricted-globals
  document.documentElement.classList.remove(LIGHT_CLASS_NAME, DARK_CLASS_NAME);
}

export function ThemeSelect() {
  const [appearance, setAppearance] = React.useState<undefined | 'light' | 'dark'>(undefined);
  const autoAppearance = React.useRef(true);

  const onClick = () => {
    autoAppearance.current = false;

    const newAppearance = appearance === 'light' ? 'dark' : 'light';

    setAppearance(newAppearance);

    const appearanceClassName = newAppearance === 'dark' ? DARK_CLASS_NAME : LIGHT_CLASS_NAME;

    removeAppearanceClassNames();
    // eslint-disable-next-line no-restricted-globals
    document.documentElement.classList.add(appearanceClassName);
  };

  React.useEffect(() => {
    // eslint-disable-next-line no-restricted-globals
    const mediaQuery = window ? window.matchMedia('(prefers-color-scheme: dark)') : undefined;

    if (!mediaQuery) {
      return noop;
    }

    const check = (event: MediaQueryList | MediaQueryListEvent) => {
      removeAppearanceClassNames();
      setAppearance(event.matches ? 'dark' : 'light');
    };

    check(mediaQuery);

    mediaQuery.addEventListener('change', check);
    return () => mediaQuery.removeEventListener('change', check);
  }, []);

  if (appearance === undefined) {
    return <Skeleton className={styles.host} />;
  }

  return (
    <SegmentedControl
      className={styles.host}
      value={appearance}
      options={[
        {
          'label': <Icon20SunOutline />,
          'value': 'light',
          'aria-label': 'Светлая тема',
          onClick,
        },
        {
          'label': <Icon20MoonOutline />,
          'value': 'dark',
          'aria-label': 'Темная тема',
          onClick,
        },
      ]}
    />
  );
}
