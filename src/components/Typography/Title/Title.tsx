import * as React from "react";
import { HasComponent } from "../../../types";
import { usePlatform } from "../../../hooks/usePlatform";
import { classNames } from "../../../lib/classNames";
import { getClassName } from "../../../helpers/getClassName";
import { ANDROID } from "../../../lib/platform";
import Headline, { HeadlineProps } from "../Headline/Headline";
import "./Title.css";

export interface TitleProps
  extends React.AllHTMLAttributes<HTMLElement>,
    HasComponent {
  weight: "heavy" | "bold" | "semibold" | "medium" | "regular";
  level: "1" | "2" | "3";
}

const Title: React.FC<TitleProps> = ({
  children,
  weight = "regular",
  level = "1",
  Component,
  ...restProps
}: TitleProps) => {
  const platform = usePlatform();

  if (!Component) {
    Component = ("h" + level) as React.ElementType;
  }

  if (platform === ANDROID && level === "3") {
    const headlineWeight: HeadlineProps["weight"] =
      weight === "regular" ? weight : "medium";

    return (
      <Headline Component={Component} {...restProps} weight={headlineWeight}>
        {children}
      </Headline>
    );
  }

  return (
    <Component
      {...restProps}
      vkuiClass={classNames(
        getClassName("Title", platform),
        `Title--w-${weight}`,
        `Title--l-${level}`
      )}
    >
      {children}
    </Component>
  );
};

// eslint-disable-next-line import/no-default-export
export default Title;
