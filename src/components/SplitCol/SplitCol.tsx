import * as React from 'react';
import { classNames } from '@vkontakte/vkjs';
import { getSizeXClassName } from '../../helpers/getSizeXClassName';
import { getViewWidthClassName } from '../../helpers/getViewWidthClassName';
import { useAdaptivity } from '../../hooks/useAdaptivity';
import { BREAKPOINTS, ViewWidth } from '../../lib/adaptivity';
import { useDOM } from '../../lib/dom';
import styles from './SplitCol.module.css';

export interface SplitColContextProps {
  colRef: React.RefObject<HTMLDivElement> | null;
  animate: boolean;
}

export const SplitColContext = React.createContext<SplitColContextProps>({
  colRef: null,
  animate: true,
});

export const useSplitCol = () => React.useContext(SplitColContext);

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
    animate: _animate,
    fixed,
    style,
    autoSpaced,
    stretchedOnMobile,
    className,
    ...restProps
  } = props;
  const baseRef = React.useRef<HTMLDivElement>(null);
  const { viewWidth, sizeX } = useAdaptivity();
  const [animate, setAnimate] = React.useState(Boolean(_animate));
  const { window } = useDOM();

  React.useEffect(() => {
    if (_animate === undefined) {
      setAnimate(
        viewWidth !== undefined
          ? viewWidth < ViewWidth.TABLET
          : window!.innerWidth < BREAKPOINTS.SMALL_TABLET,
      );
    } else {
      setAnimate(_animate);
    }
  }, [_animate, viewWidth, window]);

  const contextValue = React.useMemo(() => {
    return {
      colRef: baseRef,
      animate,
    };
  }, [baseRef, animate]);

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
        getSizeXClassName(styles['SplitCol'], sizeX),
        getViewWidthClassName(styles['SplitCol'], viewWidth),
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
