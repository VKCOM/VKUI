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

export interface PanelProps extends HTMLAttributesWithRootRef<HTMLDivElement>, NavIdProps {
  centered?: boolean;
}

/**
 * @see https://vkcom.github.io/VKUI/#/Panel
 */
export const Panel = ({ centered = false, children, nav, ...restProps }: PanelProps) => {
  const { sizeX = 'none' } = useAdaptivity();
  const { layout } = React.useContext(AppRootContext);

  return (
    <NavPanelIdContext.Provider value={restProps.id || nav}>
      <RootComponent
        {...restProps}
        baseClassName={classNames(
          styles['Panel'],
          sizeXClassNames[sizeX],
          centered && 'vkuiInternalPanel--centered',
          layout === 'card' && styles['Panel--layout-card'],
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
