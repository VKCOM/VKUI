import * as React from "react";
import { HasComponent } from "../../../types";
import { classNames } from "../../../lib/classNames";
import "./Footnote.css";

export interface FootnoteProps
  extends React.AllHTMLAttributes<HTMLElement>,
    HasComponent {
  caps?: boolean;
  weight?: "1" | "2" | "3";
}

export const Footnote: React.FC<FootnoteProps> = ({
  children,
  caps,
  Component = "span",
  weight,
  ...restProps
}: FootnoteProps) => {
  return (
    <Component
      {...restProps}
      vkuiClass={classNames("Footnote", {
        "Footnote--caps": caps,
        [`Footnote--w-${weight}`]: !!weight,
      })}
    >
      {children}
    </Component>
  );
};
