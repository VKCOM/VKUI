import * as React from "react";
import { classNames } from "../../lib/classNames";
import { getSizeXClassName } from "../../helpers/getSizeXClassName";
import { getViewWidthClassName } from "../../helpers/getViewWidthClassName";
import { useAdaptivity } from "../../hooks/useAdaptivity";
import { ViewWidth } from "../AdaptivityProvider/AdaptivityContext";
import { SMALL_TABLET_SIZE } from "../AdaptivityProvider/AdaptivityProvider";
import { useDOM } from "../../lib/dom";
import "./SplitCol.css";

export interface SplitColContextProps {
  colRef: React.RefObject<HTMLDivElement> | null;
  animate: boolean;
}

export const SplitColContext = React.createContext<SplitColContextProps>({
  colRef: null,
  animate: true,
});

export interface SplitColProps extends React.HTMLAttributes<HTMLDivElement> {
  width?: number | string;
  maxWidth?: number | string;
  minWidth?: number | string;
  /**
   * Если false, то переходы между Panel происходят без анимации
   */
  animate?: boolean;
  /**
   * Если true, то добавляются анимации переходов между Panel при ширине больше чем `smallTablet`
   */
  autoAnimate?: boolean;
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
  stretchOnMobile?: boolean;
}

/**
 * @see https://vkcom.github.io/VKUI/#/SplitCol
 */
export const SplitCol: React.FC<SplitColProps> = (props: SplitColProps) => {
  const {
    children,
    width,
    maxWidth,
    minWidth,
    spaced,
    animate: _animate = false,
    fixed,
    style,
    autoSpaced,
    autoAnimate,
    stretchOnMobile,
    ...restProps
  } = props;
  const baseRef = React.useRef<HTMLDivElement>(null);
  const { viewWidth, sizeX } = useAdaptivity();
  const { window } = useDOM();

  const animate = React.useMemo(() => {
    if (autoAnimate) {
      console.log(
        viewWidth !== undefined
          ? viewWidth < ViewWidth.TABLET
          : window!.innerWidth < SMALL_TABLET_SIZE
      );
      console.log(window!.innerWidth, SMALL_TABLET_SIZE);
      return viewWidth !== undefined
        ? viewWidth < ViewWidth.TABLET
        : window!.innerWidth < SMALL_TABLET_SIZE;
    }
    return _animate;
  }, [_animate, autoAnimate, viewWidth, window]);

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
      vkuiClass={classNames(
        "SplitCol",
        getSizeXClassName("SplitCol", sizeX),
        getViewWidthClassName("SplitCol", viewWidth),
        spaced && "SplitCol--spaced",
        spaced === undefined && "SplitCol--spaced-none",
        autoSpaced && "SplitCol--spaced-auto",
        fixed && "SplitCol--fixed",
        stretchOnMobile && "SplitCol--stretch-on-mobile"
      )}
    >
      <SplitColContext.Provider value={contextValue}>
        {fixed ? (
          <div vkuiClass="SplitCol__fixedInner">{children}</div>
        ) : (
          children
        )}
      </SplitColContext.Provider>
    </div>
  );
};
