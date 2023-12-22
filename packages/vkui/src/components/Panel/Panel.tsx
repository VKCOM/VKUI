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
  none: styles.hostSizeXNone,
  ['compact']: styles.hostSizeXCompact,
  ['regular']: styles.hostSizeXRegular,
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
          styles.host,
          sizeXClassNames[sizeX],
          centered && 'vkuiInternalPanelCentered',
          layout === 'card' && styles.hostLayoutCard,
        )}
      >
        <Touch
          Component={OnboardingTooltipContainer}
          className={classNames(styles.in, 'vkuiInternalPanelIn')}
        >
          <div className={styles.inBefore} />
          {centered ? <div className={styles.centered}>{children}</div> : children}
          <div className={styles.inAfter} />
        </Touch>
      </RootComponent>
    </NavPanelIdContext.Provider>
  );
};
