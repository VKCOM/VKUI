import type * as React from 'react';
import { classNames } from '@vkontakte/vkui';
import { Sidebar } from '../../components';
import { useConfig } from '../../contexts';
import styles from './index.module.css';

export function ContentWrapper({ children }: { children: React.ReactNode }) {
  const config = useConfig();
  const {
    activeThemeContext: themeContext,
    docsDirectories,
    flatDirectories,
    directories,
  } = config.normalizePagesResult;

  const isFullLayout = themeContext.layout === 'full';
  const isBlog = config.isBlog;
  const Component = isBlog ? 'main' : 'div';

  return (
    <Component
      className={classNames(styles.root, isBlog && styles.blog, !isFullLayout && styles.maxWidth)}
    >
      <Sidebar
        docsDirectories={docsDirectories}
        flatDirectories={flatDirectories}
        fullDirectories={directories}
        metaData={isBlog ? undefined : config.metaData}
        asPopover={isBlog ? true : config.hideSidebar}
      />
      {/* TODO [docs] (@BlackySoul): добавить компонент <TOC /> */}
      {/* TODO [docs] (@BlackySoul): <SkipNavContent /> */}
      {children}
    </Component>
  );
}
