import * as React from "react";
import NumberFormat, { NumberFormatProps } from "react-number-format";
import Input, { InputProps } from "../Input/Input";

export interface MaskedInputProps
  extends NumberFormatProps,
    Omit<InputProps, "value" | "defaultValue" | "type"> {}

export const MaskedInput: React.FunctionComponent<MaskedInputProps> = ({
  getRef,
  ...props
}) => <NumberFormat {...props} customInput={Input} getInputRef={getRef} />;
