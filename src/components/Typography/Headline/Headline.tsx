import * as React from "react";
import { HasComponent } from "../../../types";
import { useAdaptivity } from "../../../hooks/useAdaptivity";
import { classNames } from "../../../lib/classNames";
import { getSizeYClassName } from "../../../helpers/getSizeYClassName";
import "./Headline.css";

export interface HeadlineProps
  extends React.AllHTMLAttributes<HTMLElement>,
    HasComponent {
  /**
   * Задаёт начертание шрифта отличное от стандартного.
   */
  weight?: "1" | "2" | "3";
  level?: "1" | "2";
}

/**
 * @see https://vkcom.github.io/VKUI/#/Headline
 */
export const Headline = ({
  children,
  weight = "3",
  level = "1",
  Component = "h4",
  ...restProps
}: HeadlineProps) => {
  const { sizeY } = useAdaptivity();

  return (
    <Component
      {...restProps}
      vkuiClass={classNames(
        "Headline",
        getSizeYClassName("Headline", sizeY),
        `Headline--l-${level}`,
        `Headline--w-${weight}`
      )}
    >
      {children}
    </Component>
  );
};
