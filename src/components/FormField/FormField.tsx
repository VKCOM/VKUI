import * as React from "react";
import { classNames } from "../../lib/classNames";
import { HasComponent, HasRootRef } from "../../types";
import { useAdaptivity } from "../../hooks/useAdaptivity";
import "./FormField.css";

export const FormFieldMode = {
  default: "default",
  plain: "plain",
} as const;

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
  mode?: keyof typeof FormFieldMode;
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
  mode = FormFieldMode.default,
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
      vkuiClass={classNames(
        "FormField",
        `FormField--${mode}`,
        `FormField--status-${status}`,
        `FormField--sizeY-${sizeY}`, // TODO v5.0.0 поправить под новую адаптивность
        disabled && "FormField--disabled",
        !disabled && hover && "FormField--hover"
      )}
    >
      {before && (
        <div role="presentation" vkuiClass="FormField__before">
          {before}
        </div>
      )}
      {children}
      {after && (
        <div role="presentation" vkuiClass="FormField__after">
          {after}
        </div>
      )}
      <div role="presentation" vkuiClass="FormField__border" />
    </Component>
  );
};
