import * as React from 'react';
import { Breadcrumbs, NavLinks } from '../../components';
import { useConfig, useThemeConfig } from '../../contexts';
import styles from './Main.module.css';

export function Main({ children }: { children: React.ReactNode }) {
  const config = useConfig();
  const themeConfig = useThemeConfig();
  const {
    activeThemeContext: themeContext,
    activeType,
    activeIndex,
    flatDocsDirectories,
    activePath,
  } = config.normalizePagesResult;
  if (themeContext.layout === 'raw') {
    return <main className={styles.content}>{children}</main>;
  }
  const content = (
    <>
      {children}
      {activeType !== 'page' && themeContext.pagination ? (
        <NavLinks flatDirectories={flatDocsDirectories} currentIndex={activeIndex} />
      ) : null}
    </>
  );

  const ThemeConfigMain = themeConfig.main || React.Fragment;
  const body = <ThemeConfigMain>{content}</ThemeConfigMain>;

  if (themeContext.layout === 'full') {
    return <main className={styles.content}>{body}</main>;
  }

  return (
    <main className={styles.content}>
      {activeType !== 'page' && themeContext.breadcrumb ? (
        <Breadcrumbs activePath={activePath} />
      ) : null}
      {body}
    </main>
  );
}
