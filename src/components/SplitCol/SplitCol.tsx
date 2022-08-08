import * as React from "react";
import { useScrollLockEffect } from "../AppRoot/ScrollContext";
import { classNames } from "../../lib/classNames";
import { noop } from "../../lib/utils";
import "./SplitCol.css";

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
  fixed?: boolean;
}

/**
 * @see https://vkcom.github.io/VKUI/#/SplitCol
 */
export const SplitCol = ({
  children,
  width,
  maxWidth,
  minWidth,
  spaced,
  animate = false,
  fixed,
  style,
  ...restProps
}: SplitColProps) => {
  const baseRef = React.useRef<HTMLDivElement>(null);

  const fixedInnerRef = React.useRef<HTMLDivElement>(null);

  const contextValue = React.useMemo(() => {
    return {
      colRef: baseRef,
      animate,
    };
  }, [baseRef, animate]);

  useScrollLockEffect(() => {
    const fixedInner = fixedInnerRef.current;
    if (!fixedInner) {
      return noop;
    }

    fixedInner.style.top = `${fixedInner.offsetTop}px`;

    return () => {
      fixedInner.style.top = "";
    };
  }, [fixedInnerRef.current]);

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
        spaced && "SplitCol--spaced",
        fixed && "SplitCol--fixed"
      )}
    >
      <SplitColContext.Provider value={contextValue}>
        {fixed ? (
          <div ref={fixedInnerRef} vkuiClass="SplitCol__fixedInner">
            {children}
          </div>
        ) : (
          children
        )}
      </SplitColContext.Provider>
    </div>
  );
};
