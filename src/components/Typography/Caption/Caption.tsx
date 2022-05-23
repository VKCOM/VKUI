import * as React from "react";
import { HasComponent } from "../../../types";
import { classNames } from "../../../lib/classNames";
import "./Caption.css";

export interface CaptionProps
  extends React.AllHTMLAttributes<HTMLElement>,
    HasComponent {
  /**
   * Задаёт начертание шрифта отличное от стандартного.
   */
  weight?: "1" | "2" | "3";
  level?: "1" | "2" | "3" | "4";
  caps?: boolean;
}

export const Caption: React.FC<CaptionProps> = ({
  children,
  weight,
  level = "1",
  caps,
  Component = "span",
  ...restProps
}: CaptionProps) => {
  return (
    <Component
      {...restProps}
      vkuiClass={classNames(
        "Caption",
        `Caption--l-${level}`,
        caps && "Caption--caps",
        weight && `Caption--w-${weight}`
      )}
    >
      {children}
    </Component>
  );
};
