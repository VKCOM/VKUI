import * as React from "react";
import { useAdaptivity } from "../../../hooks/useAdaptivity";
import { classNames } from "../../../lib/classNames";
import { HasComponent, HasRootRef } from "../../../types";
import { warnOnce } from "../../../lib/warnOnce";
import { getSizeYClassName } from "../../../helpers/getSizeYClassName";
import "./Text.css";

export interface TextProps
  extends React.AllHTMLAttributes<HTMLElement>,
    HasRootRef<HTMLElement>,
    HasComponent {
  /**
   * Задаёт начертание шрифта, отличное от стандартного.
   */
  weight?: "1" | "2" | "3";
}

const warn = warnOnce("Text");
/**
 * @see https://vkcom.github.io/VKUI/#/Text
 */
export const Text = ({
  children,
  weight,
  Component = "span",
  getRootRef,
  ...restProps
}: TextProps) => {
  if (
    process.env.NODE_ENV === "development" &&
    typeof Component !== "string" &&
    getRootRef
  ) {
    warn(
      `Свойство "getRootRef" может использоваться только с компонентами DOM`,
      "error"
    );
  }

  const { sizeY } = useAdaptivity();

  return (
    <Component
      {...restProps}
      ref={getRootRef}
      vkuiClass={classNames(
        "Text",
        getSizeYClassName("Text", sizeY),
        weight && `Text--w-${weight}`
      )}
    >
      {children}
    </Component>
  );
};
