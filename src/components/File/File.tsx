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
    HasRootRef<HTMLElement> {
  /**
   * @deprecated Будет удалено в 5.0.0. Используйте size
   */
  controlSize?: VKUIButtonProps["size"];
}

/**
 * @see https://vkcom.github.io/VKUI/#/File
 */
export const File = ({
  children = "Выберите файл",
  align = "left",
  // TODO: v5.0.0 удалить controlSize
  controlSize,
  size,
  mode,
  stretched,
  before,
  after,
  loading,
  className,
  style,
  getRef,
  getRootRef,
  appearance,
  ...restProps
}: FileProps) => {
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
      after={after}
      loading={loading}
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
