import * as React from "react";
import { getClassName } from "../../helpers/getClassName";
import { usePlatform } from "../../hooks/usePlatform";
import Tappable, { TappableProps } from "../Tappable/Tappable";
import "./Link.css";

export type LinkProps = TappableProps;

const Link: React.FC<LinkProps> = ({ children, ...restProps }: LinkProps) => {
  const platform = usePlatform();

  return (
    <Tappable
      Component={restProps.href ? "a" : "button"}
      {...restProps}
      vkuiClass={getClassName("Link", platform)}
      hasActive={false}
      hoverMode="opacity"
      focusVisibleMode="outside"
    >
      {children}
    </Tappable>
  );
};

// eslint-disable-next-line import/no-default-export
export default Link;
