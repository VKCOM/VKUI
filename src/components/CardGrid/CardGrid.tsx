import * as React from "react";
import { classNames } from "../../lib/classNames";
import { withAdaptivity, AdaptivityProps } from "../../hoc/withAdaptivity";
import "./CardGrid.css";

export interface CardGridProps
  extends React.HTMLAttributes<HTMLDivElement>,
    AdaptivityProps {
  size: "s" | "m" | "l";
  /**
   * Если true, то вокруг компонента присутствуют стандартные отсупы сверху/снизу и слева/справа
   */
  spaced?: boolean;
}

const CardGridComponent = ({
  children,
  size = "s",
  spaced = false,
  sizeX,
  ...restProps
}: CardGridProps) => {
  return (
    <div
      {...restProps}
      vkuiClass={classNames(
        "CardGrid",
        spaced && "CardGrid--spaced",
        `CardGrid--${size}`,
        `CardGrid--sizeX-${sizeX}` // TODO: v5 новая адаптивность
      )}
    >
      {children}
    </div>
  );
};

/**
 * @see https://vkcom.github.io/VKUI/#/CardGrid
 */
export const CardGrid = withAdaptivity(CardGridComponent, { sizeX: true });

CardGrid.displayName = "CardGrid"; // TODO: v5 remove
