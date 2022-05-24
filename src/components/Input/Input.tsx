import * as React from "react";
import { getClassName } from "../../helpers/getClassName";
import { classNames } from "../../lib/classNames";
import { FormField, FormFieldProps } from "../FormField/FormField";
import { HasAlign, HasRef, HasRootRef } from "../../types";
import { withAdaptivity, AdaptivityProps } from "../../hoc/withAdaptivity";
import { usePlatform } from "../../hooks/usePlatform";
import "./Input.css";

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement>,
    HasRef<HTMLInputElement>,
    HasRootRef<HTMLDivElement>,
    HasAlign,
    AdaptivityProps,
    FormFieldProps {}

const InputComponent: React.FunctionComponent<InputProps> = ({
  type = "text",
  align,
  getRef,
  className,
  getRootRef,
  sizeY,
  style,
  before,
  after,
  ...restProps
}: InputProps) => {
  const platform = usePlatform();
  return (
    <FormField
      vkuiClass={classNames(
        getClassName("Input", platform),
        !!align && `Input--${align}`,
        `Input--sizeY-${sizeY}`
      )}
      style={style}
      className={className}
      getRootRef={getRootRef}
      before={before}
      after={after}
      disabled={restProps.disabled}
    >
      <input {...restProps} type={type} vkuiClass="Input__el" ref={getRef} />
    </FormField>
  );
};

/**
 * @see https://vkcom.github.io/VKUI/#/Input
 */
export const Input = withAdaptivity(InputComponent, {
  sizeY: true,
});
