import * as React from 'react';
import { classNames } from '@vkontakte/vkjs';
import { useAdaptivity } from '../../hooks/useAdaptivity';
import { useExternRef } from '../../hooks/useExternRef';
import { useMediaQueries } from '../../hooks/useMediaQueries';
import { useObjectMemo } from '../../hooks/useObjectMemo';
import { ViewWidth, viewWidthToClassName } from '../../lib/adaptivity';
import { matchMediaListAddListener, matchMediaListRemoveListener } from '../../lib/matchMedia';
import { HTMLAttributesWithRootRef } from '../../types';
import { RootComponent } from '../RootComponent/RootComponent';
import { SplitColContext } from './SplitColContext';
import styles from './SplitCol.module.css';

const breakpointClassNames = {
  none: classNames(styles['SplitCol--viewWidth-none'], 'vkuiInternalSplitCol--viewWidth-none'),
  tabletMinus: styles['SplitCol--viewWidth-tabletMinus'],
  smallTabletPlus: styles['SplitCol--viewWidth-smallTabletPlus'],
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
  width?: number | string;
  maxWidth?: number | string;
  minWidth?: number | string;
  /**
   * Если false, то переходы между Panel происходят без анимации
   */
  animate?: boolean;
  /**
   * Если true, то добавляются боковые отступы фиксированной величины при ширине больше чем `smallTablet`
   */
  autoSpaced?: boolean;
  fixed?: boolean;
  /**
   * Если true, то ширина контейнера становится 100% при ширине меньше чем `tablet`
   */
  stretchedOnMobile?: boolean;
}

/**
 * @see https://vkcom.github.io/VKUI/#/SplitCol
 */
export const SplitCol = (props: SplitColProps) => {
  const {
    children,
    width,
    maxWidth,
    minWidth,
    animate: animateProp,
    fixed,
    style,
    autoSpaced,
    stretchedOnMobile,
    getRootRef,
    ...restProps
  } = props;
  const baseRef = useExternRef(getRootRef);
  const { viewWidth } = useAdaptivity();
  const animate = useTransitionAnimate(animateProp);

  const contextValue = useObjectMemo({
    colRef: baseRef,
    animate,
  });

  return (
    <RootComponent
      {...restProps}
      style={{
        ...style,
        width: width,
        maxWidth: maxWidth,
        minWidth: minWidth,
      }}
      getRootRef={baseRef}
      baseClassName={classNames(
        styles['SplitCol'],
        viewWidthToClassName(breakpointClassNames, viewWidth),
        autoSpaced &&
          classNames(styles['SplitCol--spaced-auto'], 'vkuiInternalSplitCol--spaced-auto'),
        fixed && styles['SplitCol--fixed'],
        stretchedOnMobile && styles['SplitCol--stretched-on-mobile'],
      )}
    >
      <SplitColContext.Provider value={contextValue}>
        {fixed ? <div className={styles['SplitCol__fixedInner']}>{children}</div> : children}
      </SplitColContext.Provider>
    </RootComponent>
  );
};
