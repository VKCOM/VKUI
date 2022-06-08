import * as React from "react";
import { HasComponent } from "../../../types";
import { classNames } from "../../../lib/classNames";
import "./Footnote.css";

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
  children,
  weight,
  caps,
  Component = "span",
  ...restProps
}: FootnoteProps) => {
  return (
    <Component
      {...restProps}
      vkuiClass={classNames(
        "Footnote",
        caps && "Footnote--caps",
        weight && `Footnote--w-${weight}`
      )}
    >
      {children}
    </Component>
  );
};
