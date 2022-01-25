import * as React from "react";
import { HasComponent } from "../../../types";
import { usePlatform } from "../../../hooks/usePlatform";
import { classNames } from "../../../lib/classNames";
import { getClassName } from "../../../helpers/getClassName";
import "./Caption.css";

export interface CaptionProps
  extends React.AllHTMLAttributes<HTMLElement>,
    HasComponent {
  weight: "regular" | "medium" | "semibold" | "bold";
  level: "1" | "2" | "3" | "4";
  caps?: boolean;
}

const Caption: React.FC<CaptionProps> = ({
  children,
  weight = "regular",
  level = "1",
  caps,
  Component = "span",
  ...restProps
}: CaptionProps) => {
  const platform = usePlatform();

  return (
    <Component
      {...restProps}
      vkuiClass={classNames(
        getClassName("Caption", platform),
        `Caption--w-${weight}`,
        `Caption--l-${level}`,
        {
          "Caption--caps": caps,
        }
      )}
    >
      {children}
    </Component>
  );
};

// eslint-disable-next-line import/no-default-export
export default Caption;
