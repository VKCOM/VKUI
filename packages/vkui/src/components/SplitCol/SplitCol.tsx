import * as React from 'react';
import { classNames } from '@vkontakte/vkjs';
import { useAdaptivity } from '../../hooks/useAdaptivity';
import { useMediaQueries } from '../../hooks/useMediaQueries';
import { useObjectMemo } from '../../hooks/useObjectMemo';
import { ViewWidth } from '../../lib/adaptivity';
import { matchMediaListAddListener, matchMediaListRemoveListener } from '../../lib/matchMedia';
import { SplitColContext } from './SplitColContext';
import styles from './SplitCol.module.css';

const viewWidthClassNames = {
  none: styles['SplitCol--viewWidth-none'],
  [ViewWidth.SMALL_MOBILE]: styles['SplitCol--viewWidth-smallMobile'],
  [ViewWidth.MOBILE]: styles['SplitCol--viewWidth-mobile'],
  [ViewWidth.SMALL_TABLET]: styles['SplitCol--viewWidth-smallTablet'],
  [ViewWidth.TABLET]: styles['SplitCol--viewWidth-tabletPlus'],
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

export interface SplitColProps extends React.HTMLAttributes<HTMLDivElement> {
  width?: number | string;
  maxWidth?: number | string;
  minWidth?: number | string;
  /**
   * Если false, то переходы между Panel происходят без анимации
   */
  animate?: boolean;
  /**
   * Если true, то добавляются боковые отступы фиксированной величины
   */
  spaced?: boolean;
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
    spaced,
    animate: animateProp,
    fixed,
    style,
    autoSpaced,
    stretchedOnMobile,
    className,
    ...restProps
  } = props;
  const baseRef = React.useRef<HTMLDivElement>(null);
  const { viewWidth = 'none' } = useAdaptivity();
  const animate = useTransitionAnimate(animateProp);

  const contextValue = useObjectMemo({
    colRef: baseRef,
    animate,
  });

  return (
    <div
      {...restProps}
      style={{
        ...style,
        width: width,
        maxWidth: maxWidth,
        minWidth: minWidth,
      }}
      ref={baseRef}
      className={classNames(
        styles['SplitCol'],
        viewWidthClassNames.hasOwnProperty(viewWidth) && viewWidthClassNames[viewWidth],
        spaced && styles['SplitCol--spaced'],
        spaced === undefined && styles['SplitCol--spaced-none'],
        autoSpaced && styles['SplitCol--spaced-auto'],
        fixed && styles['SplitCol--fixed'],
        stretchedOnMobile && styles['SplitCol--stretched-on-mobile'],
        className,
      )}
    >
      <SplitColContext.Provider value={contextValue}>
        {fixed ? <div className={styles['SplitCol__fixedInner']}>{children}</div> : children}
      </SplitColContext.Provider>
    </div>
  );
};
