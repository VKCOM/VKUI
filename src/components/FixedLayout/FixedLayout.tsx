import * as React from "react";
import { getClassName } from "../../helpers/getClassName";
import { classNames } from "../../lib/classNames";
import { HasRef, HasRootRef } from "../../types";
import { SplitColContext } from "../SplitCol/SplitCol";
import { TooltipContainer } from "../Tooltip/TooltipContainer";
import { useDOM } from "../../lib/dom";
import { useGlobalEventListener } from "../../hooks/useGlobalEventListener";
import { usePlatform } from "../../hooks/usePlatform";
import "./FixedLayout.css";

export interface FixedLayoutProps
  extends React.HTMLAttributes<HTMLDivElement>,
    HasRootRef<HTMLDivElement>,
    HasRef<HTMLDivElement> {
  vertical?: "top" | "bottom";
  /**
   * Это свойство определяет, будет ли фон компонента окрашен в цвет фона контента.
   * Это часто необходимо для фиксированных кнопок в нижней части экрана.
   */
  filled?: boolean;
}

export interface FixedLayoutState {
  position: "absolute" | null;
  top: number;
  bottom: number;
  width: string;
}

const FixedLayout: React.FC<FixedLayoutProps> = ({
  children,
  style,
  vertical,
  getRootRef,
  getRef,
  filled,
  ...restProps
}: FixedLayoutProps) => {
  const platform = usePlatform();
  const [width, setWidth] = React.useState<string | undefined>(undefined);
  const { window } = useDOM();
  const { colRef } = React.useContext(SplitColContext);
  const doResize = () =>
    setWidth(colRef?.current ? `${colRef.current.offsetWidth}px` : undefined);
  React.useEffect(doResize, [colRef]);
  useGlobalEventListener(window, "resize", doResize);

  return (
    <TooltipContainer
      {...restProps}
      fixed
      ref={getRootRef}
      vkuiClass={classNames(
        getClassName("FixedLayout", platform),
        {
          "FixedLayout--filled": filled,
        },
        `FixedLayout--${vertical}`
      )}
      style={{ ...style, width }}
    >
      <div vkuiClass="FixedLayout__in" ref={getRef}>
        {children}
      </div>
    </TooltipContainer>
  );
};

// eslint-disable-next-line import/no-default-export
export default FixedLayout;
