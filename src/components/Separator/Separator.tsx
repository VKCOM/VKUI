import * as React from "react";
import { classNamesString } from "../../lib/classNames";
import styles from "./Separator.module.css";

export interface SeparatorProps extends React.HTMLAttributes<HTMLDivElement> {
  /**
   * С этим свойством компонент не будет иметь отступы слева и справа
   */
  wide?: boolean;
}

/**
 * @see https://vkcom.github.io/VKUI/#/Separator
 */
export const Separator = ({
  wide,
  className,
  ...restProps
}: SeparatorProps) => (
  <div
    {...restProps}
    aria-hidden="true"
    className={classNamesString(
      styles["Separator"],
      !wide && styles["Separator--padded"],
      className
    )}
    role="separator"
  >
    <div className={styles["Separator__in"]} />
  </div>
);
