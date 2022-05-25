import * as React from "react";
import { usePlatform } from "../../../hooks/usePlatform";
import { classNames } from "../../../lib/classNames";
import { getClassName } from "../../../helpers/getClassName";
import { HasComponent, HasRootRef } from "../../../types";
import { warnOnce } from "../../../lib/warnOnce";
import "./Text.css";

export interface TextProps
  extends React.AllHTMLAttributes<HTMLElement>,
    HasRootRef<HTMLElement>,
    HasComponent {
  /**
   * Задаёт начертание шрифта, отличное от стандартного.
   *
   * > ⚠️ Начертания `"semibold"`, `medium` и `"regular"` устарели и будут удалены в 5.0.0. Используйте значения `"1"`, `"2"` и `"3"`.
   */
  weight?: "regular" | "medium" | "semibold" | "1" | "2" | "3";
}

const warn = warnOnce("Text");
/**
 * @see https://vkcom.github.io/VKUI/#/Text
 */
export const Text: React.FC<TextProps> = ({
  children,
  weight,
  Component = "span",
  getRootRef,
  ...restProps
}: TextProps) => {
  const platform = usePlatform();

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

  if (
    process.env.NODE_ENV === "development" &&
    weight &&
    ["semibold", "medium", "regular"].includes(weight)
  ) {
    warn(
      `Начертание weight="${weight}" устарело и будет удалено в 5.0.0. Используйте значения "1", "2" и "3"`
    );
  }
  return (
    <Component
      {...restProps}
      ref={getRootRef}
      vkuiClass={classNames(
        "Text",
        getClassName("Text", platform),
        weight && `Text--w-${weight}`
      )}
    >
      {children}
    </Component>
  );
};
