'use client';

import * as React from 'react';
import { classNames } from '@vkontakte/vkjs';
import { useAdaptivity } from '../../hooks/useAdaptivity';
import { useExternRef } from '../../hooks/useExternRef';
import { useMediaQueries } from '../../hooks/useMediaQueries';
import { ViewWidth, viewWidthToClassName } from '../../lib/adaptivity';
import { matchMediaListAddListener, matchMediaListRemoveListener } from '../../lib/matchMedia';
import type { HTMLAttributesWithRootRef } from '../../types';
import { RootComponent } from '../RootComponent/RootComponent';
import { SplitColContext } from './SplitColContext';
import styles from './SplitCol.module.css';

const breakpointClassNames = {
  none: classNames(styles.viewWidthNone, 'vkuiInternalSplitCol--viewWidth-none'),
  tabletMinus: styles.viewWidthTabletMinus,
  smallTabletPlus: styles.viewWidthSmallTabletPlus,
  tabletPlus: 'vkuiInternalSplitCol--viewWidth-tabletPlus',
};

function useTransitionAnimate(animateProp?: boolean) {
  const { viewWidth } = useAdaptivity();
  const [animate, setAnimate] = React.useState(Boolean(animateProp));
  const mediaQueries = useMediaQueries();

  React.useEffect(() => {
    if (animateProp !== undefined) {
      setAnimate(animateProp);
      return;
    }

    if (viewWidth !== undefined) {
      setAnimate(viewWidth < ViewWidth.TABLET);
      return;
    }

    // eslint-disable-next-line no-restricted-properties
    const listener = () => setAnimate(!mediaQueries.smallTabletPlus.matches);
    listener();

    matchMediaListAddListener(mediaQueries.smallTabletPlus, listener);
    return () => {
      matchMediaListRemoveListener(mediaQueries.smallTabletPlus, listener);
    };
  }, [animateProp, viewWidth, mediaQueries]);

  return animate;
}

export interface SplitColProps extends HTMLAttributesWithRootRef<HTMLDivElement> {
  /**
   * Ширина колонки.
   */
  width?: number | string;
  /**
   * Максимальная ширина колонки.
   */
  maxWidth?: number | string;
  /**
   * Минимальная ширина колонки.
   */
  minWidth?: number | string;
  /**
   * Если false, то переходы между Panel происходят без анимации.
   */
  animate?: boolean;
  /**
   * Если true, то добавляются боковые отступы фиксированной величины при ширине больше чем `smallTablet`.
   */
  autoSpaced?: boolean;
  /**
   * Фиксированное положение колонки.
   */
  fixed?: boolean;
  /**
   * Если true, то ширина контейнера становится 100% при ширине меньше чем `tablet`.
   */
  stretchedOnMobile?: boolean;
}

/**
 * @see https://vkui.io/components/split-layout#split-col
 */
export const SplitCol = (props: SplitColProps): React.ReactNode => {
  const {
    children,
    width,
    maxWidth,
    minWidth,
    animate: animateProp,
    fixed,
    autoSpaced,
    stretchedOnMobile,
    getRootRef,
    ...restProps
  } = props;
  const baseRef = useExternRef(getRootRef);
  const { viewWidth } = useAdaptivity();
  const animate = useTransitionAnimate(animateProp);

  const contextValue = React.useMemo(
    () => ({
      colRef: baseRef,
      animate,
    }),
    [animate, baseRef],
  );

  return (
    <RootComponent
      {...restProps}
      baseStyle={{
        width,
        maxWidth,
        minWidth,
      }}
      getRootRef={baseRef}
      baseClassName={classNames(
        styles.host,
        viewWidthToClassName(breakpointClassNames, viewWidth),
        autoSpaced && classNames(styles.spacedAuto, 'vkuiInternalSplitCol--spaced-auto'),
        fixed && styles.fixed,
        stretchedOnMobile && styles.stretchedOnMobile,
      )}
    >
      <SplitColContext.Provider value={contextValue}>
        {fixed ? <div className={styles.fixedInner}>{children}</div> : children}
      </SplitColContext.Provider>
    </RootComponent>
  );
};
