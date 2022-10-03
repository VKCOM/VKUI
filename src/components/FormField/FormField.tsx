import * as React from "react";
import { classNamesString } from "../../lib/classNames";
import { HasComponent, HasRootRef } from "../../types";
import { useAdaptivity } from "../../hooks/useAdaptivity";
import { getSizeYClassName } from "../../helpers/getSizeYClassName";
import styles from "./FormField.module.css";

export interface FormFieldProps {
  status?: "default" | "error" | "valid";
  /**
   * Добавляет иконку слева.
   *
   * Рекомендации:
   *
   * - Используйте следующие размеры иконок `12` | `16` | `20` | `24` | `28`.
   * - Используйте [IconButton](https://vkcom.github.io/VKUI/#/IconButton), если вам нужна кликабельная иконка.
   */
  before?: React.ReactNode;
  /**
   * Добавляет иконку справа.
   *
   * Рекомендации:
   *
   * - Используйте следующие размеры иконок `12` | `16` | `20` | `24` | `28`.
   * - Используйте [IconButton](https://vkcom.github.io/VKUI/#/IconButton), если вам нужна кликабельная иконка.
   */
  after?: React.ReactNode;
  mode?: "default" | "plain";
}

interface FormFieldOwnProps
  extends React.AllHTMLAttributes<HTMLElement>,
    HasRootRef<HTMLElement>,
    HasComponent,
    FormFieldProps {
  disabled?: boolean;
}

/**
 * @see https://vkcom.github.io/VKUI/#/FormField
 */
export const FormField = ({
  Component = "div",
  status = "default",
  children,
  getRootRef,
  before,
  after,
  disabled,
  mode = "default",
  className,
  ...restProps
}: FormFieldOwnProps) => {
  const { sizeY } = useAdaptivity();
  const [hover, setHover] = React.useState(false);

  const handleMouseEnter = (e: MouseEvent) => {
    e.stopPropagation();
    setHover(true);
  };

  const handleMouseLeave = (e: MouseEvent) => {
    e.stopPropagation();
    setHover(false);
  };

  return (
    <Component
      role="presentation"
      {...restProps}
      ref={getRootRef}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={classNamesString(
        styles["FormField"],
        styles[`FormField--mode-${mode}`],
        styles[`FormField--status-${status}`],
        getSizeYClassName(styles["FormField"], sizeY),
        disabled && styles["FormField--disabled"],
        !disabled && hover && styles["FormField--hover"],
        className
      )}
    >
      {before && (
        <div role="presentation" className={styles["FormField__before"]}>
          {before}
        </div>
      )}
      {children}
      {after && (
        <div role="presentation" className={styles["FormField__after"]}>
          {after}
        </div>
      )}
      <div role="presentation" className={styles["FormField__border"]} />
    </Component>
  );
};
