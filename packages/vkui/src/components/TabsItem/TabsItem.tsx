'use client';

import * as React from 'react';
import { classNames, hasReactNode } from '@vkontakte/vkjs';
import { useAdaptivity } from '../../hooks/useAdaptivity';
import { useExternRef } from '../../hooks/useExternRef';
import { usePrevious } from '../../hooks/usePrevious';
import { useDOM } from '../../lib/dom';
import { warnOnce } from '../../lib/warnOnce';
import type { AnchorHTMLAttributesOnly, HTMLAttributesWithRootRef } from '../../types';
import { TabsControllerContext } from '../Tabs/TabsControllerContext';
import { TabsModeContext } from '../Tabs/TabsModeContext';
import { Tappable, type TappableOmitProps } from '../Tappable/Tappable';
import { Headline } from '../Typography/Headline/Headline';
import { Subhead } from '../Typography/Subhead/Subhead';
import { VisuallyHidden } from '../VisuallyHidden/VisuallyHidden';
import styles from './TabsItem.module.css';

const sizeYClassNames = {
  none: styles.sizeYNone,
  compact: styles.sizeYCompact,
};

const stylesMode = {
  default: styles.modeDefault,
  accent: styles.modeAccent,
  secondary: styles.modeSecondary,
};

const fillModeClassNames = {
  stretched: styles.stretched,
  shrinked: styles.shrinked,
};

export interface TabsItemProps
  extends HTMLAttributesWithRootRef<HTMLElement>,
    AnchorHTMLAttributesOnly,
    Pick<
      TappableOmitProps,
      | 'Component'
      | 'activeMode'
      | 'hoverMode'
      | 'hovered'
      | 'activated'
      | 'hasActive'
      | 'hasHover'
      | 'focusVisibleMode'
    > {
  /**
   * Добавляет иконку слева.
   *
   * - Для `mode="default"` используйте иконки размером 24.
   * - Для всех остальных `mode` используйте иконки размером 20.
   */
  before?: React.ReactNode;
  /**
   * Добавляет элемент слева от `after`.
   *
   * - `React.ReactElement` – либо [`Badge`](https://vkui.io/components/badge) с параметром `mode="prominent"`.
   *   Либо [`Counter`](https://vkui.io/components/counter) с параметрами `mode="prominent" size="s"`.
   * - `number` – для показа текстового блока с переданным числом.
   */
  status?: React.ReactElement | number;
  /**
   * Добавляет иконку справа.
   *
   * Например, `<Icon16Dropdown />`.
   */
  after?: React.ReactNode;
  /**
   * Флаг для отображения выбранного состояния.
   */
  selected?: boolean;
  /**
   * Блокировка взаимодействия с компонентом.
   */
  disabled?: boolean;
}

const warn = warnOnce('TabsItem');

/**
 * @see https://vkui.io/components/tabs#tabs-item
 */
export const TabsItem = ({
  before,
  children,
  status,
  after,
  selected: selectedProp = false,
  role = 'tab',
  tabIndex: tabIndexProp,
  getRootRef,
  hoverMode = styles.hover,
  activeMode = '',
  hasActive = false,
  focusVisibleMode = 'inside',
  id,
  onClick,
  ...restProps
}: TabsItemProps): React.ReactNode => {
  const { sizeY = 'none' } = useAdaptivity();
  const { mode, withGaps, layoutFillMode, scrollBehaviorToSelectedTab, withScrollToSelectedTab } =
    React.useContext(TabsModeContext);
  const controller = React.useContext(TabsControllerContext);
  let statusComponent = null;

  const isTabFlow = role === 'tab';

  const selected = selectedProp || (!!id && controller?.selectedTab === id);

  if (hasReactNode(status)) {
    statusComponent =
      typeof status === 'number' ? (
        <Subhead
          Component="span"
          className={classNames(styles.status, styles.statusCount)}
          weight="2"
        >
          <VisuallyHidden>&nbsp;</VisuallyHidden>
          {status}
        </Subhead>
      ) : (
        <span className={styles.status}>
          <VisuallyHidden>&nbsp;</VisuallyHidden>
          {status}
        </span>
      );
  }

  if (process.env.NODE_ENV === 'development' && isTabFlow) {
    if (!restProps['aria-controls']) {
      warn(`Передайте в "aria-controls" id контролируемого блока`, 'warn');
    } else if (!id) {
      warn(
        `Передайте "id" компоненту для использования в "aria-labelledby" контролируемого блока`,
        'warn',
      );
    }
  }

  let tabIndex = tabIndexProp;
  if (isTabFlow && tabIndex === undefined) {
    tabIndex = selected ? 0 : -1;
  }

  const rootRef = useExternRef(getRootRef);

  const prevSelected = usePrevious(selected);
  const isInitialRender = prevSelected === undefined;
  const shouldScrollToSelected =
    withScrollToSelectedTab && !isInitialRender && prevSelected !== selected && selected;

  const { document } = useDOM();
  React.useEffect(
    function scrollToSelectedItem() {
      if (!shouldScrollToSelected || !rootRef.current || !document) {
        return;
      }

      const tabDOMRect = rootRef.current.getBoundingClientRect();
      const isTabVerticallyOutsideOfViewport =
        tabDOMRect.top < 0 || tabDOMRect.bottom > document.documentElement.clientHeight;

      /* проверяем, возможен ли вертикальный скролл, а он возможен для scrollIntoView если
       * элемент вертикально вне зоны видимости */
      if (isTabVerticallyOutsideOfViewport) {
        return;
      }

      /* Не все браузеры поддерживают используемые нами опции. */
      try {
        rootRef.current.scrollIntoView({
          inline: scrollBehaviorToSelectedTab,
          block: 'nearest',
          behavior: 'smooth',
        });
      } catch {
        /* Вызывать scrollIntoView с булевым аргументом не следует, потому что это повлечёт
         * вертикальный скролл.
         **/
      }
    },
    [rootRef, document, shouldScrollToSelected, scrollBehaviorToSelectedTab],
  );

  const _onClick: React.MouseEventHandler<HTMLElement> = React.useCallback(
    (e) => {
      onClick?.(e);
      if (id) {
        controller?.onChange(id);
      }
    },
    [id, onClick, controller],
  );

  return (
    <Tappable
      getRootRef={rootRef}
      hoverMode={hoverMode}
      activeMode={activeMode}
      hasActive={hasActive}
      focusVisibleMode={focusVisibleMode}
      role={role}
      aria-selected={selected}
      tabIndex={tabIndex}
      baseClassName={classNames(
        styles.host,
        mode && stylesMode[mode],
        selected && styles.selected,
        sizeY !== 'regular' && sizeYClassNames[sizeY],
        withGaps && styles.withGaps,
        layoutFillMode !== 'auto' && fillModeClassNames[layoutFillMode],
      )}
      onClick={controller ? _onClick : onClick}
      id={id}
      {...restProps}
    >
      {before && <div className={styles.before}>{before}</div>}
      <Headline
        Component="span"
        className={styles.label}
        level={mode === 'default' ? '1' : '2'}
        weight="2"
      >
        {children}
      </Headline>
      {statusComponent}
      {after && <div className={styles.after}>{after}</div>}
      {mode === 'default' && (
        <div className={styles.underline} aria-hidden data-selected={selected} />
      )}
    </Tappable>
  );
};
