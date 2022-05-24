import * as React from "react";
import { classNames } from "../../lib/classNames";
import { getClassName } from "../../helpers/getClassName";
import { getSizeXClassName } from "../../helpers/getSizeXClassName";
import { usePlatform } from "../../hooks/usePlatform";
import { useAdaptivity } from "../../hooks/useAdaptivity";
import "./CardGrid.css";

export interface CardGridProps extends React.HTMLAttributes<HTMLDivElement> {
  size: "s" | "m" | "l";
}

/**
 * @see https://vkcom.github.io/VKUI/#/CardGrid
 */
const CardGrid: React.FunctionComponent<CardGridProps> = ({
  children,
  size,
  ...restProps
}: CardGridProps) => {
  const platform = usePlatform();
  const { sizeX } = useAdaptivity();

  return (
    <div
      {...restProps}
      vkuiClass={classNames(
        getClassName("CardGrid", platform),
        getSizeXClassName("CardGrid", sizeX),
        `CardGrid--${size}`
      )}
    >
      {children}
    </div>
  );
};

CardGrid.defaultProps = {
  size: "s",
};

// eslint-disable-next-line import/no-default-export
export default CardGrid;
