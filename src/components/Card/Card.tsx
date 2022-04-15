import * as React from "react";
import { classNames } from "../../lib/classNames";
import { getClassName } from "../../helpers/getClassName";
import { usePlatform } from "../../hooks/usePlatform";
import { HasRootRef } from "../../types";
import "./Card.css";

export interface CardProps
  extends React.HTMLAttributes<HTMLDivElement>,
    HasRootRef<HTMLDivElement> {
  mode?: "tint" | "shadow" | "outline";
}

export const Card: React.FC<CardProps> = ({
  mode = "tint",
  children,
  getRootRef,
  ...restProps
}: CardProps) => {
  const platform = usePlatform();

  return (
    <div
      {...restProps}
      ref={getRootRef}
      vkuiClass={classNames(getClassName("Card", platform), `Card--md-${mode}`)}
    >
      <div vkuiClass="Card__in">{children}</div>
    </div>
  );
};
