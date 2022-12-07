import * as React from "react";
import { HasComponent } from "../../../types";
import { classNamesString } from "../../../lib/classNames";
import styles from "./Footnote.module.css";

export interface FootnoteProps
  extends React.AllHTMLAttributes<HTMLElement>,
    HasComponent {
  /**
   * Задаёт начертание шрифта отличное от стандартного.
   */
  weight?: "1" | "2" | "3";
  caps?: boolean;
}

/**
 * @see https://vkcom.github.io/VKUI/#/Footnote
 */
export const Footnote = ({
  className,
  children,
  weight,
  caps,
  Component = "span",
  ...restProps
}: FootnoteProps) => {
  return (
    <Component
      {...restProps}
      className={classNamesString(
        className,
        styles["Footnote"],
        caps && styles["Footnote--caps"],
        weight && styles[`Footnote--weight-${weight}`]
      )}
    >
      {children}
    </Component>
  );
};
