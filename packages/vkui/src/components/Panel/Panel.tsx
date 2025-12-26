'use client';

import * as React from 'react';
import { classNames } from '@vkontakte/vkjs';
import { useAdaptivity } from '../../hooks/useAdaptivity';
import { type SizeTypeValues, ViewWidth, type ViewWidthType } from '../../lib/adaptivity';
import type { NavIdProps } from '../../lib/getNavId';
import type { HTMLAttributesWithRootRef } from '../../types';
import { AppRootContext } from '../AppRoot/AppRootContext';
import { NavPanelIdContext } from '../NavIdContext/NavIdContext';
import { OnboardingTooltipContainer } from '../OnboardingTooltip/OnboardingTooltipContainer';
import { RootComponent } from '../RootComponent/RootComponent';
import { Touch } from '../Touch/Touch';
import styles from './Panel.module.css';

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
  none: styles.modeNone,
  plain: styles.modePlain,
  card: styles.modeCard,
};

export interface PanelProps extends HTMLAttributesWithRootRef<HTMLDivElement>, NavIdProps {
  /**
   * Центрирование содержимого.
   */
  centered?: boolean;
  /**
   * Тип оформления панели.
   *
   * Позволяет переопределить тип оформления панели,
   * заданный через адаптивность или свойство layout у [AppRoot](https://vkui.io/components/app-root),
   * глобально задающим тип оформления макета.
   *
   * Если установлен `card` - Panel имеет фон отличный от фона контента.
   * Позволяет компоненту [Group](https://vkui.io/components/group) со свойством mode='card' точечно выглядеть как карточка.
   * Тип `plain` — соответствует фону по умолчанию.
   */
  mode?: 'plain' | 'card';
  /**
   * Отключает задний фон.
   */
  disableBackground?: boolean;
}

/**
 * @see https://vkui.io/components/panel
 */
export const Panel = ({
  centered = false,
  children,
  nav,
  mode: modeProp,
  disableBackground,
  ...restProps
}: PanelProps): React.ReactNode => {
  const { sizeX: legacySizeX, viewWidth = 'none' } = useAdaptivity();

  const mode = usePanelMode(modeProp, viewWidth, legacySizeX);

  return (
    <NavPanelIdContext.Provider value={restProps.id || nav}>
      <RootComponent
        {...restProps}
        baseClassName={classNames(
          styles.host,
          getViewWidthClassName(viewWidth, legacySizeX),
          centered && 'vkuiInternalPanel--centered',
          disableBackground && styles.disableBackground,
          stylesMode[mode],
        )}
      >
        <Touch
          Component={OnboardingTooltipContainer}
          className={classNames(styles.in, 'vkuiInternalPanel__in')}
        >
          <div className={styles.inBefore} />
          {centered ? <div className={styles.centered}>{children}</div> : children}
          <div className={styles.inAfter} />
        </Touch>
      </RootComponent>
    </NavPanelIdContext.Provider>
  );
};

function usePanelMode(
  modeProp: PanelProps['mode'],
  viewWidth: ViewWidthType | 'none',
  legacySizeX: SizeTypeValues | undefined,
): 'plain' | 'card' | 'none' {
  const { layout } = React.useContext(AppRootContext);

  if (modeProp) {
    return modeProp;
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
