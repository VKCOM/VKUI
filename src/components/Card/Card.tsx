import * as React from "react";
import { classNamesString } from "../../lib/classNames";
import { HasRootRef } from "../../types";
import styles from "./Card.module.css";

export interface CardProps
  extends React.HTMLAttributes<HTMLDivElement>,
    HasRootRef<HTMLDivElement> {
  mode?: "tint" | "shadow" | "outline";
}

/**
 * @see https://vkcom.github.io/VKUI/#/Card
 */
export const Card = ({
  mode = "tint",
  children,
  getRootRef,
  className,
  ...restProps
}: CardProps) => {
  return (
    <div
      {...restProps}
      ref={getRootRef}
      className={classNamesString(
        styles["Card"],
        styles[`Card--mode-${mode}`],
        className
      )}
    >
      <div className={styles["Card__in"]}>{children}</div>
    </div>
  );
};
