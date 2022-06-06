import * as React from "react";
import { classNames } from "../../lib/classNames";
import { Caption } from "../Typography/Caption/Caption";
import { Headline } from "../Typography/Headline/Headline";
import { hasReactNode } from "../../lib/utils";
import "./Counter.css";

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
  ...restProps
}: CounterProps) => {
  if (React.Children.count(children) === 0) {
    return null;
  }

  const CounterTypography = size === "s" ? Caption : Headline;

  return (
    <span
      {...restProps}
      vkuiClass={classNames(
        "Counter",
        `Counter--${mode}`,
        `Counter--s-${size}`
      )}
    >
      {hasReactNode(children) && (
        <CounterTypography Component="span" vkuiClass="Counter__in" level="2">
          {children}
        </CounterTypography>
      )}
    </span>
  );
};
