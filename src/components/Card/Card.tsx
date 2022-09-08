import * as React from "react";
import { classNames } from "../../lib/classNames";
import { HasRootRef } from "../../types";
import "./Card.css";

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
  ...restProps
}: CardProps) => {
  return (
    <div
      {...restProps}
      ref={getRootRef}
      vkuiClass={classNames("Card", `Card--mode-${mode}`)}
    >
      <div vkuiClass="Card__in">{children}</div>
    </div>
  );
};
