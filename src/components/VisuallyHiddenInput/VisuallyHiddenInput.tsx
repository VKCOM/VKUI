import * as React from "react";
import { useExternRef } from "../../hooks/useExternRef";
import { HasRef } from "../../types";
import "./VisuallyHiddenInput.css";

export interface VisuallyHiddenInputProps
  extends React.InputHTMLAttributes<HTMLInputElement>,
    HasRef<HTMLInputElement> {}

/**
 * @description
 * Обертка над обычным `<input/>`; дает
 * скрыть его визуально и оставить
 * доступным для ассистивных технологий.
 */
export const VisuallyHiddenInput: React.FC<VisuallyHiddenInputProps> = ({
  getRef,
  ...restProps
}) => {
  const inputRef = useExternRef(getRef);

  return (
    <input {...restProps} vkuiClass="VisuallyHiddenInput" ref={inputRef} />
  );
};
