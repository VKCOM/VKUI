import * as React from "react";
import { getClassName } from "../../helpers/getClassName";
import { Button, VKUIButtonProps } from "../Button/Button";
import { HasRef, HasRootRef } from "../../types";
import { usePlatform } from "../../hooks/usePlatform";
import { VisuallyHiddenInput } from "../VisuallyHiddenInput/VisuallyHiddenInput";

export interface FileProps
  extends Omit<VKUIButtonProps, "type">,
    Omit<React.InputHTMLAttributes<HTMLInputElement>, "type" | "size">,
    HasRef<HTMLInputElement>,
    HasRootRef<HTMLElement> {}

export const File: React.FC<FileProps> = ({
  children = "Выберите файл",
  align = "left",
  size,
  mode,
  stretched,
  before,
  className,
  style,
  getRef,
  getRootRef,
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
      size={size}
      before={before}
      style={style}
      getRootRef={getRootRef}
      disabled={restProps.disabled}
    >
      <VisuallyHiddenInput
        {...restProps}
        vkuiClass="File__input"
        type="file"
        getRef={getRef}
      />
      {children}
    </Button>
  );
};
