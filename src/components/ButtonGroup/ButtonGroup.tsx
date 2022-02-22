import * as React from "react";
import { classNames } from "../../lib/classNames";
import type { HasRootRef } from "../../types";
import "./ButtonGroup.css";

export interface ButtonGroupProps
  extends React.HTMLAttributes<HTMLDivElement>,
    HasRootRef<HTMLDivElement> {
  mode?: "vertical" | "horizontal";
  padding?: "medium" | "small"; // number
  stretched?: boolean;
}

export type ButtonGroupContextProps = Pick<
  ButtonGroupProps,
  "mode" | "padding" | "stretched"
> | null;

export const ButtonGroupContext =
  React.createContext<ButtonGroupContextProps>(null);

export const ButtonGroup: React.FC<ButtonGroupProps> = ({
  mode: modeProp,
  padding: paddingProp,
  stretched: stretchedProp,
  getRootRef,
  children,
  ...restProps
}) => {
  const context = React.useContext(ButtonGroupContext);
  const isNested = context !== null;

  const mode = modeProp || context?.mode || "horizontal";
  const padding = paddingProp || context?.padding || "medium";
  const stretched = stretchedProp || context?.stretched || false;

  return (
    <ButtonGroupContext.Provider value={{ mode, padding, stretched }}>
      <div
        vkuiClass={classNames(
          "ButtonGroup",
          `ButtonGroup--mode-${mode}`,
          stretched && "ButtonGroup--stretched",
          isNested && `ButtonGroup--vertical-padding-${context?.padding}`
        )}
        role="group"
        ref={getRootRef}
        {...restProps}
      >
        {children}
      </div>
    </ButtonGroupContext.Provider>
  );
};
