import * as React from "react";
import { classNames } from "../../lib/classNames";
import { FormField, FormFieldProps } from "../FormField/FormField";
import { HasAlign, HasRef, HasRootRef } from "../../types";
import { withAdaptivity, AdaptivityProps } from "../../hoc/withAdaptivity";
import "./Input.css";

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement>,
    HasRef<HTMLInputElement>,
    HasRootRef<HTMLDivElement>,
    HasAlign,
    AdaptivityProps,
    FormFieldProps {}

const InputComponent = ({
  type = "text",
  align,
  getRef,
  className,
  getRootRef,
  sizeY,
  style,
  before,
  after,
  status,
  ...restProps
}: InputProps) => {
  return (
    <FormField
      vkuiClass={classNames(
        "Input",
        !!align && `Input--${align}`,
        `Input--sizeY-${sizeY}`, // TODO v5.0.0 поправить под новую адаптивность
        before && "Input--hasBefore",
        after && "Input--hasAfter"
      )}
      style={style}
      className={className}
      getRootRef={getRootRef}
      before={before}
      after={after}
      disabled={restProps.disabled}
      status={status}
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

Input.displayName = "Input";
