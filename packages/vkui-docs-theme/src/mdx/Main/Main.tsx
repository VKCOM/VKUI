'use client';

import * as React from 'react';
import { Breadcrumbs, NavLinks } from '../../components';
import { useConfig } from '../../contexts';
import styles from './Main.module.css';

export function Main({ children }: { children: React.ReactNode }) {
  const config = useConfig();
  const {
    normalizePagesResult: { activeThemeContext: themeContext, activeType, activePath },
    isBlog,
  } = config;

  const content = (
    <>
      {children}
      {activeType !== 'page' && themeContext.pagination ? <NavLinks /> : null}
    </>
  );

  if (isBlog) {
    return content;
  }

  if (themeContext.layout === 'full') {
    return <main className={styles.content}>{content}</main>;
  }

  return (
    <main className={styles.content}>
      {activeType !== 'page' && themeContext.breadcrumb ? (
        <Breadcrumbs activePath={activePath} />
      ) : null}
      {content}
    </main>
  );
}
