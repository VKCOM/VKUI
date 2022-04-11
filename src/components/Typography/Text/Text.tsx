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
  weight: "regular" | "medium" | "semibold";
}

const warn = warnOnce("Text");

/**
 * @see https://vkcom.github.io/VKUI/#/Text
 */
export const Text: React.FC<TextProps> = ({
  children,
  weight = "regular",
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

  return (
    <Component
      {...restProps}
      ref={getRootRef}
      vkuiClass={classNames(
        getClassName("Text", platform),
        `Text--w-${weight}`
      )}
    >
      {children}
    </Component>
  );
};
