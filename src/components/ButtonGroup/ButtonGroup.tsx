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
  className?: string;
  style?: React.CSSProperties;
  children?: React.ReactNode;
}

export type ButtonGroupContextProps = Pick<
  ButtonGroupProps,
  "mode" | "padding" | "stretched"
> | null;

export const ButtonGroupContext =
  React.createContext<ButtonGroupContextProps>(null);

const ButtonGroup: React.FC<ButtonGroupProps> = ({
  mode: modeProp,
  padding: paddingProp,
  stretched: stretchedProp,
  getRootRef,
  ...restProps
}: ButtonGroupProps) => {
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
          isNested && `ButtonGroup--vertical-padding-${padding}`
        )}
        role="group"
        ref={getRootRef}
        {...restProps}
      />
    </ButtonGroupContext.Provider>
  );
};

// eslint-disable-next-line import/no-default-export
export default ButtonGroup;
