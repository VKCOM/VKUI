import * as React from "react";
import { classNames } from "../../lib/classNames";
import "./Separator.css";

export interface SeparatorProps extends React.HTMLAttributes<HTMLDivElement> {
  /**
   * С этим свойством компонент не будет иметь отступы слева и справа
   */
  wide?: boolean;

  /**
   * @deprecated Это свойство устарело и будет удалено в 5.0.0. Используйте [`Spacing`](#/Spacing).
   */
  expanded?: boolean;
}

/**
 * @see https://vkcom.github.io/VKUI/#/Separator
 */
export const Separator: React.FC<SeparatorProps> = ({
  wide,
  expanded,
  ...restProps
}) => (
  <div
    {...restProps}
    aria-hidden="true"
    vkuiClass={classNames(
      "Separator",
      wide && "Separator--wide", // TODO: v5 remove
      !wide && "Separator--padded"
    )}
  >
    <div
      vkuiClass={classNames(
        "Separator__in",
        expanded && "Separator__in--expanded"
      )}
    />
  </div>
);
