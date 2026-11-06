'use client';

import * as React from 'react';
import { flushSync } from 'react-dom';
import {
  Icon20MoonAutoOutline,
  Icon20MoonOutline,
  Icon20SunAutoOutline,
  Icon20SunOutline,
} from '@vkontakte/icons';
import { Button, Skeleton } from '@vkontakte/vkui';
import { useMounted } from 'nextra/hooks';
import { shape, sunnyParams } from '../../../vkui/src/lib/material/shapes/shapes';
import { svgPathToString } from '../../../vkui/src/lib/svg/path/path';
import { rotate, scale, translate } from '../../../vkui/src/lib/svg/path/transform';
import { useColorScheme } from '../contexts';
import { getSystemColorScheme } from '../contexts/color-scheme/helpers';
import styles from './ColorSchemeSwitch.module.css';

const SCHEME_LABEL_SWITCH = {
  system: 'Переключить на светлую тему',
  light: 'Переключить на тёмную тему',
  dark: 'Переключить на системную тему',
};

const SCHEMES = ['system', 'light', 'dark'] as const;

const SCHEME_ICONS = {
  light: Icon20SunOutline,
  dark: Icon20MoonOutline,
};

const SCHEME_ICONS_SYSTEM = {
  light: Icon20SunAutoOutline,
  dark: Icon20MoonAutoOutline,
};

const MOON_PATH = [
  ['M', [0.8, 0.1]],
  ['C', [0.67, 0, 0.5, -0.03, 0.35, 0.02]],
  ['C', [-0.12, 0.17, -0.12, 0.83, 0.35, 0.98]],
  ['C', [0.5, 1.03, 0.67, 1, 0.8, 0.9]],
  ['C', [0.2667, 0.9, 0.2667, 0.1, 0.8, 0.1]],
  ['Z', []],
] as const;

function sunClipPath(x: number, y: number, size: number) {
  const path = translate(shape(sunnyParams, size), x - size / 2, y - size / 2);
  return `path('${svgPathToString(path)}')`;
}

function moonClipPath(x: number, y: number, size: number) {
  // Keep the origin inside the crescent so its expansion eventually covers the viewport.
  const path = rotate(MOON_PATH, 0.2, 0.5, -45);
  return `path('${svgPathToString(
    translate(scale(path, size, size), x - size * 0.2, y - size * 0.5),
  )}')`;
}

export function ColorSchemeSwitch() {
  const {
    setColorScheme,
    colorScheme = 'system',
    resolvedColorScheme = 'light',
  } = useColorScheme();
  const mounted = useMounted();
  const transitionRef = React.useRef<ViewTransition | null>(null);

  React.useEffect(() => () => transitionRef.current?.skipTransition(), []);

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    const nextColorScheme = SCHEMES[(SCHEMES.indexOf(colorScheme) + 1) % 3];
    const nextResolvedColorScheme =
      nextColorScheme === 'system' ? getSystemColorScheme() : nextColorScheme;
    const changeColorScheme = () => setColorScheme(nextColorScheme);

    if (
      nextResolvedColorScheme === resolvedColorScheme ||
      !document.startViewTransition ||
      window.matchMedia('(prefers-reduced-motion: reduce)').matches
    ) {
      transitionRef.current?.skipTransition();
      changeColorScheme();
      return;
    }

    const { left, top, width, height } = event.currentTarget.getBoundingClientRect();
    const x = left + width / 2;
    const y = top + height / 2;
    const radius = Math.hypot(
      Math.max(x, window.innerWidth - x),
      Math.max(y, window.innerHeight - y),
    );
    const root = document.documentElement;
    const clipPath =
      nextResolvedColorScheme === 'light'
        ? [sunClipPath(x, y, 0), sunClipPath(x, y, radius * 3)]
        : [moonClipPath(x, y, 0), moonClipPath(x, y, radius * 6)];

    transitionRef.current?.skipTransition();
    root.classList.add(styles.transition);
    const transition = document.startViewTransition(() => flushSync(changeColorScheme));
    transitionRef.current = transition;

    void transition.ready
      .then(() => {
        if (transitionRef.current !== transition) {
          return;
        }
        root.animate(
          { clipPath },
          {
            duration: 700,
            easing: 'cubic-bezier(0.4, 0, 0.2, 1)',
            pseudoElement: '::view-transition-new(root)',
          },
        );
      })
      .catch(() => {
        // A newer transition or a hidden document can skip the animation.
      });

    const cleanup = () => {
      if (transitionRef.current === transition) {
        transitionRef.current = null;
        root.classList.remove(styles.transition);
      }
    };
    void transition.finished.then(cleanup, cleanup);
  };

  if (!mounted) {
    return <Skeleton width={36} height={36} />;
  }

  const Icon =
    colorScheme === 'system' ? SCHEME_ICONS_SYSTEM[resolvedColorScheme] : SCHEME_ICONS[colorScheme];

  return (
    <Button
      size="l"
      before={<Icon />}
      mode="secondary"
      appearance="neutral"
      title={SCHEME_LABEL_SWITCH[colorScheme]}
      aria-label={SCHEME_LABEL_SWITCH[colorScheme]}
      onClick={handleClick}
    />
  );
}
