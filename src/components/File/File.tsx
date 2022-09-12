import * as React from "react";
import { getPlatformClassName } from "../../helpers/getPlatformClassName";
import { Button, VKUIButtonProps } from "../Button/Button";
import { HasRef, HasRootRef } from "../../types";
import { usePlatform } from "../../hooks/usePlatform";
import { VisuallyHiddenInput } from "../VisuallyHiddenInput/VisuallyHiddenInput";
import { classNames } from "../../lib/classNames";

export interface FileProps
  extends Omit<VKUIButtonProps, "type">,
    Omit<React.InputHTMLAttributes<HTMLInputElement>, "type" | "size">,
    HasRef<HTMLInputElement>,
    HasRootRef<HTMLElement> {}

/**
 * @see https://vkcom.github.io/VKUI/#/File
 */
export const File = ({
  children = "Выберите файл",
  align = "left",
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
      vkuiClass={classNames("File", getPlatformClassName("File", platform))}
      className={className}
      stretched={stretched}
      mode={mode}
      appearance={appearance}
      size={size}
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
