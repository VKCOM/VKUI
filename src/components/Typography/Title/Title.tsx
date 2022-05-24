import * as React from "react";
import { HasComponent } from "../../../types";
import { classNames } from "../../../lib/classNames";
import "./Title.css";

export interface TitleProps
  extends React.AllHTMLAttributes<HTMLElement>,
    HasComponent {
  /**
   * Задаёт начертание шрифта отличное от стандартного.
   */
  weight?: "1" | "2" | "3";
  level: "1" | "2" | "3";
}

/**
 * @see https://vkcom.github.io/VKUI/#/Title
 */
export const Title: React.FC<TitleProps> = ({
  children,
  weight,
  level = "1",
  Component,
  ...restProps
}) => {
  if (!Component) {
    Component = ("h" + level) as React.ElementType;
  }

  return (
    <Component
      {...restProps}
      vkuiClass={classNames(
        "Title",
        `Title--l-${level}`,
        weight && `Title--w-${weight}`
      )}
    >
      {children}
    </Component>
  );
};
