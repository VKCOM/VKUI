import * as React from "react";
import { HasComponent } from "../../../types";
import { usePlatform } from "../../../hooks/usePlatform";
import { classNames } from "../../../lib/classNames";
import { getClassName } from "../../../helpers/getClassName";
import "./Headline.css";

export interface HeadlineProps
  extends React.AllHTMLAttributes<HTMLElement>,
    HasComponent {
  weight: "regular" | "medium" | "semibold";
}

const Headline: React.FC<HeadlineProps> = ({
  children,
  weight = "regular",
  Component = "h3",
  ...restProps
}: HeadlineProps) => {
  const platform = usePlatform();

  return (
    <Component
      {...restProps}
      vkuiClass={classNames(
        getClassName("Headline", platform),
        `Headline--w-${weight}`
      )}
    >
      {children}
    </Component>
  );
};

// eslint-disable-next-line import/no-default-export
export default Headline;
