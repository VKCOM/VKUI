import * as React from "react";
import { getClassName } from "../../helpers/getClassName";
import { Button, VKUIButtonProps } from "../Button/Button";
import { HasRef, HasRootRef } from "../../types";
import { usePlatform } from "../../hooks/usePlatform";
import { VisuallyHiddenInput } from "../VisuallyHiddenInput/VisuallyHiddenInput";

export interface FileProps
  extends Omit<VKUIButtonProps, "type">,
    Omit<
      React.InputHTMLAttributes<HTMLInputElement>,
      "onClick" | "type" | "size"
    >,
    Pick<React.HTMLAttributes<HTMLElement>, "onClick">,
    HasRef<HTMLInputElement>,
    HasRootRef<HTMLElement> {
  /**
   * @deprecated Будет удалено в 5.0.0. Используйте size
   */
  controlSize?: VKUIButtonProps["size"];
}

export const File: React.FC<FileProps> = ({
  children = "Выберите файл",
  align = "left",
  // TODO: v5.0.0 удалить controlSize
  controlSize,
  size,
  mode,
  stretched,
  before,
  className,
  style,
  getRef,
  getRootRef,
  onClick,
  appearance,
  ...restProps
}) => {
  const platform = usePlatform();

  return (
    <Button
      Component="label"
      align={align}
      vkuiClass={getClassName("File", platform)}
      className={className}
      stretched={stretched}
      mode={mode}
      appearance={appearance}
      // TODO: v5.0.0 удалить controlSize
      size={size ?? controlSize}
      before={before}
      style={style}
      getRootRef={getRootRef}
      disabled={restProps.disabled}
    >
      <VisuallyHiddenInput
        {...restProps}
        onClick={(e) => onClick?.(e)}
        vkuiClass="File__input"
        type="file"
        getRef={getRef}
      />
      {children}
    </Button>
  );
};
