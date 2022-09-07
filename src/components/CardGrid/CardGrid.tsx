import * as React from "react";
import { classNames } from "../../lib/classNames";
import { getSizeXClassName } from "../../helpers/getSizeXClassName";
import { useAdaptivity } from "../../hooks/useAdaptivity";
import "./CardGrid.css";

export interface CardGridProps extends React.HTMLAttributes<HTMLDivElement> {
  size?: "s" | "m" | "l";
  /**
   * Если true, то вокруг компонента присутствуют стандартные отсупы сверху/снизу и слева/справа
   */
  spaced?: boolean;
}

/**
 * @see https://vkcom.github.io/VKUI/#/CardGrid
 */
export const CardGrid = ({
  children,
  size = "s",
  spaced = false,
  ...restProps
}: CardGridProps) => {
  const { sizeX } = useAdaptivity();

  return (
    <div
      {...restProps}
      vkuiClass={classNames(
        "CardGrid",
        spaced && "CardGrid--spaced",
        `CardGrid--size-${size}`,
        getSizeXClassName("CardGrid", sizeX)
      )}
    >
      {children}
    </div>
  );
};
