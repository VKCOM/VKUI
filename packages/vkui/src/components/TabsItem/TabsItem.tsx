import * as React from 'react';
import { classNames, hasReactNode } from '@vkontakte/vkjs';
import { useAdaptivity } from '../../hooks/useAdaptivity';
import { useExternRef } from '../../hooks/useExternRef';
import { usePrevious } from '../../hooks/usePrevious';
import { useDOM } from '../../lib/dom';
import { warnOnce } from '../../lib/warnOnce';
import { HTMLAttributesWithRootRef } from '../../types';
import { TabsContextProps, TabsModeContext } from '../Tabs/Tabs';
import { Tappable } from '../Tappable/Tappable';
import { Headline } from '../Typography/Headline/Headline';
import { Subhead } from '../Typography/Subhead/Subhead';
import { VisuallyHidden } from '../VisuallyHidden/VisuallyHidden';
import styles from './TabsItem.module.css';

const sizeYClassNames = {
  none: styles['TabsItem--sizeY-none'],
  ['compact']: styles['TabsItem--sizeY-compact'],
};

const stylesMode = {
  default: styles['TabsItem--mode-default'],
  accent: styles['TabsItem--mode-accent'],
  secondary: styles['TabsItem--mode-secondary'],
};

const fillModeClassNames = {
  stretched: styles['TabsItem--stretched'],
  shrinked: styles['TabsItem--shrinked'],
};

export interface TabsItemProps extends HTMLAttributesWithRootRef<HTMLElement> {
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
   * - `React.ReactElement` – либо [`Badge`](https://vkcom.github.io/VKUI/#/Badge) с параметром `mode="prominent"`.
   *   либо [`Counter`](https://vkcom.github.io/VKUI/#/Counter) с параметрами `mode="prominent" size="s"`.
   * - `number` – для показа текстового блока с переданным числом.
   */
  status?: React.ReactElement | number;
  /**
   * Добавляет иконку справа.
   *
   * Например, `<Icon16Dropdown />`
   */
  after?: React.ReactNode;
  selected?: boolean;
  disabled?: boolean;
}

const warn = warnOnce('TabsItem');

/**
 * @see https://vkcom.github.io/VKUI/#/TabsItem
 */
export const TabsItem = ({
  before,
  children,
  status,
  after,
  selected = false,
  className,
  role = 'tab',
  tabIndex: tabIndexProp,
  getRootRef,
  ...restProps
}: TabsItemProps) => {
  const { sizeY = 'none' } = useAdaptivity();
  const {
    mode,
    withGaps,
    layoutFillMode,
    scrollBehaviorToSelectedTab,
    withScrollToSelectedTab,
  }: TabsContextProps = React.useContext(TabsModeContext);
  let statusComponent = null;

  const isTabFlow = role === 'tab';

  if (hasReactNode(status)) {
    statusComponent =
      typeof status === 'number' ? (
        <Subhead
          Component="span"
          className={classNames(styles['TabsItem__status'], styles['TabsItem__status--count'])}
          weight="2"
        >
          <VisuallyHidden>&nbsp;</VisuallyHidden>
          {status}
        </Subhead>
      ) : (
        <span className={styles['TabsItem__status']}>
          <VisuallyHidden>&nbsp;</VisuallyHidden>
          {status}
        </span>
      );
  }

  if (process.env.NODE_ENV === 'development' && isTabFlow) {
    if (!restProps['aria-controls']) {
      warn(`Передайте в "aria-controls" id контролируемого блока`, 'warn');
    } else if (!restProps['id']) {
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

  return (
    <Tappable
      {...restProps}
      getRootRef={rootRef}
      className={classNames(
        styles['TabsItem'],
        mode && stylesMode[mode],
        selected && styles['TabsItem--selected'],
        sizeY !== 'regular' && sizeYClassNames[sizeY],
        withGaps && styles['TabsItem--withGaps'],
        layoutFillMode !== 'auto' && fillModeClassNames[layoutFillMode],
        className,
      )}
      hoverMode={styles['TabsItem--hover']}
      activeMode=""
      focusVisibleMode="inside"
      hasActive={false}
      role={role}
      aria-selected={selected}
      tabIndex={tabIndex}
    >
      {before && <div className={styles['TabsItem__before']}>{before}</div>}
      <Headline
        Component="span"
        className={styles['TabsItem__label']}
        level={mode === 'default' ? '1' : '2'}
        weight="2"
      >
        {children}
      </Headline>
      {statusComponent}
      {after && <div className={styles['TabsItem__after']}>{after}</div>}
      {mode === 'default' && (
        <div className={styles['TabsItem__underline']} aria-hidden data-selected={selected} />
      )}
    </Tappable>
  );
};
