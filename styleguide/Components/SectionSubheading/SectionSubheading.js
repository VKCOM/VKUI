import React from "react";
import Heading from "../Heading/index";
import { classNames } from "@vkui";
import { Icon16Linked } from "@vkontakte/icons";
import "./SectionSubheading.css";

export const SectionSubheading = ({
  children,
  className,
  level = 2,
  href,
  ...restProps
}) => {
  return (
    <Heading
      {...restProps}
      level={level}
      className={classNames("SectionSubheading", className)}
    >
      {href && (
        <a className="SectionSubheading__link" href={href}>
          <Icon16Linked />
        </a>
      )}
      {href && (
        <a className="SectionSubheading__anchor" id={href.replace("#", "")}></a>
      )}
      <span className="SectionSubheading__text">{children}</span>
    </Heading>
  );
};
