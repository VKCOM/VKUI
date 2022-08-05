import * as React from "react";
import { classNames } from "../../lib/classNames";
import { FormField, FormFieldProps } from "../FormField/FormField";
import { HasAlign, HasRef, HasRootRef } from "../../types";
import { getSizeYClassName } from "../../helpers/getSizeYClassName";
import { useAdaptivity } from "../../hooks/useAdaptivity";
import "./Input.css";

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement>,
    HasRef<HTMLInputElement>,
    HasRootRef<HTMLDivElement>,
    HasAlign,
    FormFieldProps {}

/**
 * @see https://vkcom.github.io/VKUI/#/Input
 */
export const Input = ({
  type = "text",
  align,
  getRef,
  className,
  getRootRef,
  style,
  before,
  after,
  ...restProps
}: InputProps) => {
  const { sizeY } = useAdaptivity();

  return (
    <FormField
      vkuiClass={classNames(
        "Input",
        !!align && `Input--${align}`,
        getSizeYClassName("Input", sizeY),
        before && "Input--hasBefore",
        after && "Input--hasAfter"
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
