import * as React from "react";
import { HasComponent } from "../../../types";
import { classNames } from "../../../lib/classNames";
import { useAdaptivity } from "../../../hooks/useAdaptivity";
import { getSizeYClassName } from "../../../helpers/getSizeYClassName";
import "./Subhead.css";

export interface SubheadProps
  extends React.AllHTMLAttributes<HTMLElement>,
    HasComponent {
  /**
   * Задаёт начертание шрифта отличное от стандартного.
   */
  weight?: "1" | "2" | "3";
}

/**
 * @see https://vkcom.github.io/VKUI/#/Subhead
 */
export const Subhead = ({
  children,
  weight,
  Component = "h5",
  ...restProps
}: SubheadProps) => {
  const { sizeY } = useAdaptivity();

  return (
    <Component
      {...restProps}
      vkuiClass={classNames(
        "Subhead",
        getSizeYClassName("Subhead", sizeY),
        weight && `Subhead--w-${weight}`
      )}
    >
      {children}
    </Component>
  );
};
