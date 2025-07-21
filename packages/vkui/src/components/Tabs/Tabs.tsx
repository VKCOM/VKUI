'use client';

import * as React from 'react';
import { classNames } from '@vkontakte/vkjs';
import { useConfigDirection } from '../../hooks/useConfigDirection';
import { usePlatform } from '../../hooks/usePlatform';
import { useTabsNavigation } from '../../hooks/useTabsNavigation';
import type { HTMLAttributesWithRootRef } from '../../types';
import { RootComponent } from '../RootComponent/RootComponent';
import { useTabsController } from './TabsController';
import { TabsControllerContext } from './TabsControllerContext';
import { TabsModeContext } from './TabsModeContext';
import styles from './Tabs.module.css';
export interface TabsProps extends HTMLAttributesWithRootRef<HTMLDivElement> {
  /**
   * Режим отображения компонента.
   */
  mode?: 'default' | 'accent' | 'secondary';
  /**
   * Включает прокрутку контейнера до активной (`selected`) вкладки.
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
   * либо выравниваются по контенту соответственно.
   */
  layoutFillMode?: 'auto' | 'stretched' | 'shrinked';
  /**
   * Идентификатор выбранной вкладки. Чтобы свойство работало корректно, у каждого `TabsItem` должно быть прокинуто свойство `id`.
   */
  selectedId?: string;
  /**
   * Идентификатор выбранной вкладки по умолчанию. Чтобы свойство работало корректно, у каждого `TabsItem` должно быть прокинуто свойство `id`.
   */
  defaultSelectedId?: string;
  /**
   * Обработчик изменения выбранной вкладки. Чтобы свойство работало корректно, у каждого `TabsItem` должно быть прокинуто свойство `id`.
   */
  onSelectedIdChange?: (id: string) => void;
}

/**
 * @see https://vkui.io/components/tabs
 */
export const Tabs = ({
  children,
  mode = 'default',
  role = 'tablist',
  withScrollToSelectedTab,
  scrollBehaviorToSelectedTab = 'nearest',
  layoutFillMode = 'auto',
  selectedId,
  defaultSelectedId,
  onSelectedIdChange,
  ...restProps
}: TabsProps): React.ReactNode => {
  const controller = useTabsController({
    selectedId,
    defaultSelectedId,
    onSelectedIdChange,
  });
  const platform = usePlatform();
  const direction = useConfigDirection();
  const isTabFlow = role === 'tablist';
  const withGaps = mode === 'accent' || mode === 'secondary';

  const { tabsRef } = useTabsNavigation(isTabFlow, direction === 'rtl');

  const tabsModeContext = React.useMemo(
    () => ({
      mode,
      withGaps,
      layoutFillMode,
      withScrollToSelectedTab,
      scrollBehaviorToSelectedTab,
    }),
    [mode, withGaps, layoutFillMode, withScrollToSelectedTab, scrollBehaviorToSelectedTab],
  );

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
        <TabsModeContext.Provider value={tabsModeContext}>
          <TabsControllerContext.Provider value={controller}>
            {children}
          </TabsControllerContext.Provider>
        </TabsModeContext.Provider>
      </div>
    </RootComponent>
  );
};
