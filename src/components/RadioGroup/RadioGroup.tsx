import * as React from "react";
import { getClassName } from "../../helpers/getClassName";
import { usePlatform } from "../../hooks/usePlatform";
import { classNames } from "../../lib/classNames";
import "./RadioGroup.css";

export interface RadioGroupProps extends React.HTMLAttributes<HTMLDivElement> {
  mode?: "vertical" | "horizontal";
}

export const RadioGroup: React.FC<RadioGroupProps> = ({
  mode = "vertical",
  children,
  ...restProps
}) => {
  const platform = usePlatform();

  return (
    <div
      vkuiClass={classNames(
        getClassName("RadioGroup", platform),
        `RadioGroup--${mode}`
      )}
      {...restProps}
    >
      {children}
    </div>
  );
};
