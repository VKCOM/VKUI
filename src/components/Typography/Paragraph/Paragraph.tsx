import * as React from "react";
import { classNames } from "../../../lib/classNames";
import { warnOnce } from "../../../lib/warnOnce";
import { HasComponent, HasRootRef } from "../../../types";
import "./Paragraph.css";

export interface ParagraphProps
  extends React.AllHTMLAttributes<HTMLElement>,
    HasRootRef<HTMLElement>,
    HasComponent {
  /**
   * Задаёт начертание шрифта, отличное от стандартного.
   */
  weight?: "1" | "2" | "3";
}

const warn = warnOnce("Paragraph");
export const Paragraph: React.FC<ParagraphProps> = ({
  Component = "span",
  getRootRef,
  weight,
  children,
  ...restProps
}) => {
  if (
    process.env.NODE_ENV === "development" &&
    typeof Component !== "string" &&
    getRootRef
  ) {
    warn("getRootRef может использоваться только с элементами DOM", "error");
  }

  return (
    <Component
      {...restProps}
      ref={getRootRef}
      vkuiClass={classNames("Paragraph", weight && `Paragraph--w-${weight}`)}
    >
      {children}
    </Component>
  );
};
