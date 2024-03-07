import * as React from 'react';
import { classNames } from '@vkontakte/vkjs';
import { useAdaptivity } from '../../hooks/useAdaptivity';
import { NavIdProps } from '../../lib/getNavId';
import { HTMLAttributesWithRootRef } from '../../types';
import { AppRootContext } from '../AppRoot/AppRootContext';
import { NavPanelIdContext } from '../NavIdContext/NavIdContext';
import { OnboardingTooltipContainer } from '../OnboardingTooltip/OnboardingTooltipContainer';
import { RootComponent } from '../RootComponent/RootComponent';
import { Touch } from '../Touch/Touch';
import styles from './Panel.module.css';

const sizeXClassNames = {
  none: styles['Panel--sizeX-none'],
  ['compact']: styles['Panel--sizeX-compact'],
  ['regular']: styles['Panel--sizeX-regular'],
};

const stylesMode = {
  none: styles['Panel--mode-none'],
  plain: styles['Panel--mode-plain'],
  card: styles['Panel--mode-card'],
};

export interface PanelProps extends HTMLAttributesWithRootRef<HTMLDivElement>, NavIdProps {
  centered?: boolean;
  mode?: 'plain' | 'card';
}

/**
 * @see https://vkcom.github.io/VKUI/#/Panel
 */
export const Panel = ({
  centered = false,
  children,
  nav,
  mode: modeProp,
  ...restProps
}: PanelProps) => {
  const { sizeX = 'none' } = useAdaptivity();

  const mode = usePanelMode(modeProp);

  return (
    <NavPanelIdContext.Provider value={restProps.id || nav}>
      <RootComponent
        {...restProps}
        baseClassName={classNames(
          styles['Panel'],
          sizeXClassNames[sizeX],
          centered && 'vkuiInternalPanel--centered',
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

function usePanelMode(modeProp: PanelProps['mode']): 'plain' | 'card' | 'none' {
  const { layout } = React.useContext(AppRootContext);

  if (modeProp) {
    return modeProp;
  }

  if (layout) {
    return layout;
  }

  return 'none';
}
