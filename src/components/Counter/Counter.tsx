import * as React from "react";
import { classNamesString } from "../../lib/classNames";
import { Caption } from "../Typography/Caption/Caption";
import { Headline } from "../Typography/Headline/Headline";
import { hasReactNode } from "../../lib/utils";
import styles from "./Counter.module.css";

export interface CounterProps extends React.HTMLAttributes<HTMLSpanElement> {
  /**
   * Тип счетчика. При использовании компонента в качестве значения свойства `after` у `Button` эти значения игнорируются
   */
  mode?: "secondary" | "primary" | "prominent" | "contrast";
  size?: "s" | "m";
}

/**
 * @see https://vkcom.github.io/VKUI/#/Counter
 */
export const Counter = ({
  mode = "secondary",
  size = "m",
  children,
  className,
  ...restProps
}: CounterProps) => {
  if (React.Children.count(children) === 0) {
    return null;
  }

  const CounterTypography = size === "s" ? Caption : Headline;

  return (
    <span
      {...restProps}
      className={classNamesString(
        styles["Counter"],
        styles[`Counter--mode-${mode}`],
        styles[`Counter--size-${size}`],
        className
      )}
    >
      {hasReactNode(children) && (
        <CounterTypography
          Component="span"
          className={styles["Counter__in"]}
          level="2"
        >
          {children}
        </CounterTypography>
      )}
    </span>
  );
};
