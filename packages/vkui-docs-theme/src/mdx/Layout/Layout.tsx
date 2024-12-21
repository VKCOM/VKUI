import type * as React from 'react';
import { classNames } from '@vkontakte/vkui';
import { Breadcrumbs, NavLinks, Sidebar } from '../../components';
import { useConfig, useThemeConfig } from '../../contexts';
import styles from './Layout.module.css';

export function Layout({ children }: { children: React.ReactNode }) {
  const config = useConfig();
  const {
    activeThemeContext: themeContext,
    docsDirectories,
    flatDirectories,
    directories,
  } = config.normalizePagesResult;

  const isFullLayout = themeContext.layout === 'full';

  return (
    <div className={classNames(styles.root, !isFullLayout && styles.maxWidth)}>
      <Sidebar
        docsDirectories={docsDirectories}
        flatDirectories={flatDirectories}
        fullDirectories={directories}
        metaData={config.metaData}
        asPopover={config.hideSidebar}
      />
      {/* TODO [docs] (@BlackySoul): добавить компонент <TOC /> */}
      {/* TODO [docs] (@BlackySoul): <SkipNavContent /> */}
      <Main>{children}</Main>
    </div>
  );
}

function Main({ children }: { children: React.ReactNode }) {
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

  const body = themeConfig.main?.({ children: content }) || content;

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
