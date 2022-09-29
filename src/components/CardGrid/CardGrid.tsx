import * as React from "react";
import { classNamesString } from "../../lib/classNames";
import { getSizeXClassName } from "../../helpers/getSizeXClassName";
import { useAdaptivity } from "../../hooks/useAdaptivity";
import styles from "./CardGrid.module.css";

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
  className,
  ...restProps
}: CardGridProps) => {
  const { sizeX } = useAdaptivity();

  return (
    <div
      {...restProps}
      className={classNamesString(
        styles["CardGrid"],
        spaced && styles["CardGrid--spaced"],
        styles[`CardGrid--size-${size}`],
        getSizeXClassName(styles["CardGrid"], sizeX),
        className
      )}
    >
      {children}
    </div>
  );
};
