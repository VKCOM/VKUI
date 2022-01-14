import * as React from "react";
import { HasComponent } from "../../../types";
import { usePlatform } from "../../../hooks/usePlatform";
import { classNames } from "../../../lib/classNames";
import { getClassName } from "../../../helpers/getClassName";
import "./Subhead.css";

export interface SubheadProps
  extends React.AllHTMLAttributes<HTMLElement>,
    HasComponent {
  weight: "regular" | "medium" | "semibold" | "bold";
}

const Subhead: React.FC<SubheadProps> = ({
  children,
  weight = "regular",
  Component = "h4",
  ...restProps
}: SubheadProps) => {
  const platform = usePlatform();

  return (
    <Component
      {...restProps}
      vkuiClass={classNames(
        getClassName("Subhead", platform),
        `Subhead--w-${weight}`
      )}
    >
      {children}
    </Component>
  );
};

// eslint-disable-next-line import/no-default-export
export default Subhead;
