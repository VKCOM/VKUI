import * as React from "react";
import { HasComponent } from "../../../types";
import { classNamesString } from "../../../lib/classNames";
import styles from "./Caption.module.css";

export interface CaptionProps
  extends React.AllHTMLAttributes<HTMLElement>,
    HasComponent {
  /**
   * Задаёт начертание шрифта отличное от стандартного.
   */
  weight?: "1" | "2" | "3";
  level?: "1" | "2" | "3";
  caps?: boolean;
}

/**
 * @see https://vkcom.github.io/VKUI/#/Caption
 */
export const Caption = ({
  className,
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
      className={classNamesString(
        className,
        styles["Caption"],
        styles[`Caption--level-${level}`],
        caps && styles["Caption--caps"],
        weight && styles[`Caption--weight-${weight}`]
      )}
    >
      {children}
    </Component>
  );
};
