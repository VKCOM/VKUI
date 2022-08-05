import * as React from "react";
import { HasComponent, HasRootRef } from "../../../types";
import { useAdaptivity } from "../../../hooks/useAdaptivity";
import { classNames } from "../../../lib/classNames";
import { warnOnce } from "../../../lib/warnOnce";
import { getSizeYClassName } from "../../../helpers/getSizeYClassName";
import "./Headline.css";

export interface HeadlineProps
  extends React.AllHTMLAttributes<HTMLElement>,
    HasRootRef<HTMLElement>,
    HasComponent {
  /**
   * Задаёт начертание шрифта отличное от стандартного.
   */
  weight?: "1" | "2" | "3";
  level?: "1" | "2";
}

const warn = warnOnce("Headline");

/**
 * @see https://vkcom.github.io/VKUI/#/Headline
 */
export const Headline = ({
  children,
  weight = "3",
  level = "1",
  Component = "h4",
  getRootRef,
  ...restProps
}: HeadlineProps) => {
  const { sizeY } = useAdaptivity();

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
      vkuiClass={classNames(
        "Headline",
        getSizeYClassName("Headline", sizeY),
        `Headline--l-${level}`,
        `Headline--w-${weight}`
      )}
    >
      {children}
    </Component>
  );
};
