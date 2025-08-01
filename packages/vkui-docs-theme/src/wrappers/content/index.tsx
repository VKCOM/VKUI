'use client';

import type * as React from 'react';
import { classNames } from '@vkontakte/vkui';
import { Sidebar } from '../../components';
import { useConfig } from '../../contexts';
import styles from './index.module.css';

export function ContentWrapper({ children }: React.PropsWithChildren) {
  const config = useConfig();
  const {
    normalizePagesResult: { activeThemeContext: themeContext },
  } = config;

  const isFullLayout = themeContext.layout === 'full';
  const isBlog = config.isBlog;
  const Component = isBlog ? 'main' : 'div';

  return (
    <Component
      className={classNames(styles.root, isBlog && styles.blog, !isFullLayout && styles.maxWidth)}
    >
      {themeContext.sidebar && <Sidebar />}
      {/* TODO [docs] (@BlackySoul): <SkipNavContent /> */}
      {children}
    </Component>
  );
}
