import * as React from "react";
import { classNamesString } from "../../../lib/classNames";
import { warnOnce } from "../../../lib/warnOnce";
import { HasComponent, HasRootRef } from "../../../types";
import styles from "./Paragraph.module.css";

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

/**
 * @see https://vkcom.github.io/VKUI/#/Paragraph
 */
export const Paragraph = ({
  className,
  Component = "span",
  getRootRef,
  weight,
  children,
  ...restProps
}: ParagraphProps) => {
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
      className={classNamesString(
        className,
        styles["Paragraph"],
        weight && styles[`Paragraph--weight-${weight}`]
      )}
    >
      {children}
    </Component>
  );
};
