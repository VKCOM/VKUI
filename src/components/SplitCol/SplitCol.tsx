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
          : window!.innerWidth < SMALL_TABLET_SIZE
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
      vkuiClass={classNames(
        "SplitCol",
        getSizeXClassName("SplitCol", sizeX),
        getViewWidthClassName("SplitCol", viewWidth),
        spaced && "SplitCol--spaced",
        spaced === undefined && "SplitCol--spaced-none",
        autoSpaced && "SplitCol--spaced-auto",
        fixed && "SplitCol--fixed",
        stretchedOnMobile && "SplitCol--stretched-on-mobile"
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
