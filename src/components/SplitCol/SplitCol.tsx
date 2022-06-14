import * as React from "react";
import { classNames } from "../../lib/classNames";
import { getViewWidthClassName } from "../../helpers/getViewWidthClassName";
import { useAdaptivity } from "../../hooks/useAdaptivity";
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
    animate = false,
    fixed,
    style,
    autoSpaced,
    ...restProps
  } = props;
  const baseRef = React.useRef<HTMLDivElement>(null);
  const { viewWidth } = useAdaptivity();

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
        getViewWidthClassName("SplitCol", viewWidth),
        spaced && "SplitCol--spaced",
        spaced === undefined && "SplitCol--spaced-none",
        autoSpaced && "SplitCol--spaced-auto",
        fixed && "SplitCol--fixed"
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
