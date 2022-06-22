import * as React from "react";
import { classNames } from "../../lib/classNames";
import { getClassName } from "../../helpers/getClassName";
import { usePlatform } from "../../hooks/usePlatform";
import { withAdaptivity, AdaptivityProps } from "../../hoc/withAdaptivity";
import "./CardGrid.css";

export interface CardGridProps
  extends React.HTMLAttributes<HTMLDivElement>,
    AdaptivityProps {
  size: "s" | "m" | "l";
}

/**
 * @see https://vkcom.github.io/VKUI/#/CardGrid
 */
const CardGrid: React.FunctionComponent<CardGridProps> = ({
  children,
  size = "s",
  sizeX,
  ...restProps
}: CardGridProps) => {
  const platform = usePlatform();

  return (
    <div
      {...restProps}
      vkuiClass={classNames(
        getClassName("CardGrid", platform),
        `CardGrid--${size}`,
        `CardGrid--sizeX-${sizeX}`
      )}
    >
      {children}
    </div>
  );
};

// eslint-disable-next-line import/no-default-export
export default withAdaptivity(CardGrid, { sizeX: true });
