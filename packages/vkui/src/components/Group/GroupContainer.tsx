'use client';

import * as React from 'react';
import { classNames } from '@vkontakte/vkjs';
import { useModalContext } from '../../context/ModalContext';
import { useAdaptivity } from '../../hooks/useAdaptivity';
import { type SizeTypeValues, ViewWidth, type ViewWidthType } from '../../lib/adaptivity';
import { warnOnce } from '../../lib/warnOnce';
import type { HasComponent, HTMLAttributesWithRootRef } from '../../types';
import { AppRootContext } from '../AppRoot/AppRootContext';
import { RootComponent } from '../RootComponent/RootComponent';
import styles from './Group.module.css';

function getViewWidthClassName(
  viewWidth: ViewWidthType | 'none',
  legacySizeX: SizeTypeValues | undefined,
) {
  // TODO [>=10]: #9015 Удалить это условие
  if (legacySizeX !== undefined) {
    return legacySizeX === 'regular'
      ? styles.viewWidthSmallTabletPlus
      : styles.viewWidthSmallTabletMinus;
  }
  if (viewWidth === 'none') {
    return classNames(styles.viewWidthNone, 'vkuiInternalGroup--viewWidth-none');
  }
  return viewWidth >= ViewWidth.SMALL_TABLET
    ? styles.viewWidthSmallTabletPlus
    : styles.viewWidthSmallTabletMinus;
}

const stylesMode = {
  none: classNames(styles.modeNone, 'vkuiInternalGroup--mode-none'),
  plain: classNames(styles.modePlain, 'vkuiInternalGroup--mode-plain'),
  card: classNames(styles.modeCard, 'vkuiInternalGroup--mode-card'),
};

const stylesPadding = {
  s: styles.paddingS,
  m: styles.paddingM,
};

type GroupMode = 'plain' | 'card' | 'none';

/**
 * Вычисляем mode для Group.
 */
function useGroupMode(
  forcedMode: GroupContainerProps['mode'],
  viewWidth: ViewWidthType | 'none',
  legacySizeX: SizeTypeValues | undefined,
  isInsideModal: boolean,
): GroupMode {
  const { layout } = React.useContext(AppRootContext);

  if (forcedMode) {
    return forcedMode;
  }

  if (isInsideModal) {
    return 'plain';
  }

  if (layout) {
    return layout;
  }

  // TODO [>=10]: #9015 Удалить это условие
  if (legacySizeX !== undefined) {
    return legacySizeX === 'regular' ? 'card' : 'plain';
  }

  if (viewWidth !== 'none') {
    return viewWidth >= ViewWidth.SMALL_TABLET ? 'card' : 'plain';
  }

  return 'none';
}

export type GroupContainerProps = HTMLAttributesWithRootRef<HTMLElement> &
  HasComponent & {
    /**
    `show` (только для `mode="plain"`) - разделитель всегда показывается
    `hide` - разделитель всегда спрятан,
    `auto` - разделитель рисуется автоматически между соседними группами.
   */
    separator?: 'show' | 'hide' | 'auto';
    /**
     * Режим отображения. Если установлен `card`, выглядит как карточка c
     * обводкой и внешними отступами. Если `plain` — без отступов и обводки.
     * По умолчанию режим отображения зависит от `viewWidth` (`card` при `SMALL_TABLET` и `plain` при `MOBILE`)
     * В модальных окнах по умолчанию `plain`.
     */
    mode?: 'plain' | 'card';
    /**
     * Отвечает за отступы вокруг контента в режиме `card`.
     */
    padding?: 's' | 'm';
  };

const warn = warnOnce('Group');

export const GroupContainer = ({
  children,
  separator = 'auto',
  mode: modeProps,
  padding = 'm',
  tabIndex: tabIndexProp,
  ...restProps
}: GroupContainerProps) => {
  const isInsideModal = useModalContext().id !== null;
  const { sizeX: legacySizeX, viewWidth = 'none' } = useAdaptivity();

  const mode = useGroupMode(modeProps, viewWidth, legacySizeX, isInsideModal);

  const isTabPanel = restProps.role === 'tabpanel';

  if (
    process.env.NODE_ENV === 'development' &&
    isTabPanel &&
    (!restProps['aria-controls'] || !restProps['id'])
  ) {
    warn(
      'При использовании роли "tabpanel" необходимо задать значение свойств "aria-controls" и "id"',
    );
  }

  const tabIndex = isTabPanel && tabIndexProp === undefined ? 0 : tabIndexProp;

  let siblingSeparatorElement: React.ReactNode = null;
  switch (separator) {
    case 'auto':
      siblingSeparatorElement = <div className={styles.separatorSibling} />;
      break;
    case 'show':
      siblingSeparatorElement = (
        <div
          className={classNames(
            styles.separatorSibling,
            mode === 'plain' || mode === 'none' ? styles.separatorSiblingForced : undefined,
          )}
        />
      );
      break;
    case 'hide':
      break;
  }
  return (
    <>
      <RootComponent
        Component="section"
        {...restProps}
        tabIndex={tabIndex}
        baseClassName={classNames(
          'vkuiInternalGroup',
          styles.host,
          getViewWidthClassName(viewWidth, legacySizeX),
          mode === 'plain' && isInsideModal && styles.modePlainInsideModal,
          stylesMode[mode],
          stylesPadding[padding],
        )}
      >
        {children}
      </RootComponent>
      {siblingSeparatorElement}
    </>
  );
};
