import * as React from "react";
import { HasComponent } from "../../../types";
import { classNames } from "../../../lib/classNames";
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

export const Headline: React.FC<HeadlineProps> = ({
  children,
  weight = "3",
  level = "1",
  Component = "h4",
  ...restProps
}: HeadlineProps) => {
  return (
    <Component
      {...restProps}
      vkuiClass={classNames(
        "Headline",
        `Headline--l-${level}`,
        `Headline--w-${weight}`
      )}
    >
      {children}
    </Component>
  );
};
