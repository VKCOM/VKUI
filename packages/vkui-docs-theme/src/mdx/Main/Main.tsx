'use client';

import * as React from 'react';
import { NavLinks } from '../../components';
import { useConfig } from '../../contexts';
import styles from './Main.module.css';

export function Main({ children }: { children: React.ReactNode }) {
  const config = useConfig();
  const {
    normalizePagesResult: { activeThemeContext: themeContext, activeType },
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

  return <main className={styles.content}>{content}</main>;
}
