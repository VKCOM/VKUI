import * as React from 'react';
import { classNames } from '@vkontakte/vkjs';
import { useAdaptivity } from '../../hooks/useAdaptivity';
import type { SizeTypeValues } from '../../lib/adaptivity';
import type { NavIdProps } from '../../lib/getNavId';
import type { HTMLAttributesWithRootRef } from '../../types';
import { AppRootContext } from '../AppRoot/AppRootContext';
import { NavPanelIdContext } from '../NavIdContext/NavIdContext';
import { OnboardingTooltipContainer } from '../OnboardingTooltip/OnboardingTooltipContainer';
import { RootComponent } from '../RootComponent/RootComponent';
import { Touch } from '../Touch/Touch';
import styles from './Panel.module.css';

const sizeXClassNames = {
  none: styles['Panel--sizeX-none'],
  compact: styles['Panel--sizeX-compact'],
  regular: styles['Panel--sizeX-regular'],
};

const stylesMode = {
  none: styles['Panel--mode-none'],
  plain: styles['Panel--mode-plain'],
  card: styles['Panel--mode-card'],
};

export interface PanelProps extends HTMLAttributesWithRootRef<HTMLDivElement>, NavIdProps {
  centered?: boolean;
  /**
   * Тип оформления панели.
   *
   * Позволяет переопределить тип оформления панели,
   * заданный через адаптивность или свойство layout у [AppRoot](https://vkcom.github.io/VKUI/#/AppRoot),
   * глобально задающим тип оформления макета.
   *
   * Если установлен `card` - Panel имеет фон отличный от фона контента.
   * Позволяет компоненту [Group](https://vkcom.github.io/VKUI/#/Group) со свойством mode='card' точечно выглядеть как карточка.
   * Тип `plain` — соответствует фону по умолчанию.
   */
  mode?: 'plain' | 'card';
  /**
   * Отключает задний фон
   */
  disableBackground?: boolean;
}

/**
 * @see https://vkcom.github.io/VKUI/#/Panel
 */
export const Panel = ({
  centered = false,
  children,
  nav,
  mode: modeProp,
  disableBackground,
  ...restProps
}: PanelProps): React.ReactNode => {
  const { sizeX = 'none' } = useAdaptivity();

  const mode = usePanelMode(modeProp, sizeX);

  return (
    <NavPanelIdContext.Provider value={restProps.id || nav}>
      <RootComponent
        {...restProps}
        baseClassName={classNames(
          styles['Panel'],
          sizeXClassNames[sizeX],
          centered && 'vkuiInternalPanel--centered',
          disableBackground && styles['Panel--disableBackground'],
          stylesMode[mode],
        )}
      >
        <Touch
          Component={OnboardingTooltipContainer}
          className={classNames(styles['Panel__in'], 'vkuiInternalPanel__in')}
        >
          <div className={styles['Panel__in-before']} />
          {centered ? <div className={styles['Panel__centered']}>{children}</div> : children}
          <div className={styles['Panel__in-after']} />
        </Touch>
      </RootComponent>
    </NavPanelIdContext.Provider>
  );
};

function usePanelMode(
  modeProp: PanelProps['mode'],
  sizeX: SizeTypeValues | 'none',
): 'plain' | 'card' | 'none' {
  const { layout } = React.useContext(AppRootContext);

  if (modeProp) {
    return modeProp;
  }

  if (layout) {
    return layout;
  }

  if (sizeX !== 'none') {
    return sizeX === 'regular' ? 'card' : 'plain';
  }

  return 'none';
}
