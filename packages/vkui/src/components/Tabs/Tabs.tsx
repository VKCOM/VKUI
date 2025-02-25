'use client';

import * as React from 'react';
import { classNames } from '@vkontakte/vkjs';
import { useConfigDirection } from '../../hooks/useConfigDirection';
import { usePlatform } from '../../hooks/usePlatform';
import { useTabsNavigation } from '../../hooks/useTabsNavigation';
import type { HTMLAttributesWithRootRef } from '../../types';
import { RootComponent } from '../RootComponent/RootComponent';
import styles from './Tabs.module.css';

export interface TabsProps extends HTMLAttributesWithRootRef<HTMLDivElement> {
  mode?: 'default' | 'accent' | 'secondary';
  /**
   * Включает прокрутку контейнера до активной (`selected`) вкладки
   * @since 5.10.0
   */
  withScrollToSelectedTab?: boolean;
  /**
   * Отвечает за горизонтальное выравнивание при прокрутке до активной вкладки.
   * @see [scrollIntoView](https://developer.mozilla.org/en-US/docs/Web/API/Element/scrollIntoView)
   * @since 5.10.0
   */
  scrollBehaviorToSelectedTab?: ScrollIntoViewOptions['inline'];
  /**
   * При `auto` ширина вкладок определяется контекстом:
   *  - равномерно занимают всю доступную ширину при вложении в `HorizontalScroll`
   *  - равномерно занимают всю доступную ширину при `mode=default` и platform !== 'VKCOM'
   * При `stretched` и `shrinked` вкладки либо равномерно занимают всю ширину,
   * либо выравниваются по контенту соответственно
   */
  layoutFillMode?: 'auto' | 'stretched' | 'shrinked';
}

export interface TabsContextProps {
  mode: TabsProps['mode'];
  withGaps: boolean;
  layoutFillMode: NonNullable<TabsProps['layoutFillMode']>;
  withScrollToSelectedTab: TabsProps['withScrollToSelectedTab'];
  scrollBehaviorToSelectedTab: Required<TabsProps['scrollBehaviorToSelectedTab']>;
}

export const TabsModeContext: React.Context<TabsContextProps> =
  React.createContext<TabsContextProps>({
    mode: 'default',
    withGaps: false,
    layoutFillMode: 'auto',
    withScrollToSelectedTab: false,
    scrollBehaviorToSelectedTab: 'nearest',
  });

/**
 * @see https://vkcom.github.io/VKUI/#/Tabs
 */
export const Tabs = ({
  children,
  mode = 'default',
  role = 'tablist',
  withScrollToSelectedTab,
  scrollBehaviorToSelectedTab = 'nearest',
  layoutFillMode = 'auto',
  ...restProps
}: TabsProps): React.ReactNode => {
  const platform = usePlatform();
  const direction = useConfigDirection();
  const isTabFlow = role === 'tablist';
  const withGaps = mode === 'accent' || mode === 'secondary';

  const { tabsRef } = useTabsNavigation(isTabFlow, direction === 'rtl');

  return (
    <RootComponent
      {...restProps}
      baseClassName={classNames(
        styles.host,
        'vkuiInternalTabs',
        platform === 'vkcom' && 'vkuiInternalTabs--vkcom',
        withGaps && classNames(styles.withGaps, 'vkuiInternalTabs--withGaps'),
        mode === 'default' && styles.modeDefault,
      )}
      role={role}
    >
      <div className={styles.in} ref={tabsRef}>
        <TabsModeContext.Provider
          value={{
            mode,
            withGaps,
            layoutFillMode,
            withScrollToSelectedTab,
            scrollBehaviorToSelectedTab,
          }}
        >
          {children}
        </TabsModeContext.Provider>
      </div>
    </RootComponent>
  );
};

// чтобы styleguidist не путал компонент
// с другими именованными экспортами
Tabs.displayName = 'Tabs';
