import * as React from "react";
import { classNamesString } from "../../lib/classNames";
import { HasRef } from "../../types";
import styles from "./VisuallyHiddenInput.module.css";

export interface VisuallyHiddenInputProps
  extends React.InputHTMLAttributes<HTMLInputElement>,
    HasRef<HTMLInputElement> {}

/**
 * @description
 * Обертка над обычным `<input/>`; дает
 * скрыть его визуально и оставить
 * доступным для ассистивных технологий.
 */
export const VisuallyHiddenInput = ({
  getRef,
  className,
  ...restProps
}: VisuallyHiddenInputProps) => {
  return (
    <input
      {...restProps}
      className={classNamesString(styles["VisuallyHiddenInput"], className)}
      ref={getRef}
    />
  );
};
