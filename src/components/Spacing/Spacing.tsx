import * as React from "react";
import { classNames } from "../../lib/classNames";
import "./Spacing.css";

export interface SpacingProps extends React.HTMLAttributes<HTMLDivElement> {
  /**
   * Высота спэйсинга
   */
  size?: number;
  /**
   * @deprecated Это свойство устарело и будет удалено в 5.0.0. Используйте [`Separator`](https://vkcom.github.io/VKUI/#/Separator) вместе с Spacing.
   * Настройка положения сепаратора:
   *
   * - separator=false (default) - без сепаратора
   * - separator=true | separator='center' - сепаратор располагается по середине
   * - separator='top'
   * - separator='bottom'
   */
  separator?: boolean | "top" | "bottom" | "center";
  children?: React.ReactNode;
}

/**
 * @see https://vkcom.github.io/VKUI/#/Spacing
 */
export const Spacing = ({
  size = 8,
  separator,
  style,
  ...restProps
}: SpacingProps) => {
  const styles = {
    height: size,
    ...style,
  };

  return (
    <div
      {...restProps}
      aria-hidden="true"
      vkuiClass={classNames(
        "Spacing",
        !!separator && "Spacing--separator",
        (separator === true || separator === "center") &&
          "Spacing--separator-center",
        separator === "top" && "Spacing--separator-top",
        separator === "bottom" && "Spacing--separator-bottom"
      )}
      style={styles}
    />
  );
};
