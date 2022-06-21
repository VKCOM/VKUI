import * as React from "react";
import { getClassName } from "../../helpers/getClassName";
import { usePlatform } from "../../hooks/usePlatform";
import { TappableProps, Tappable } from "../Tappable/Tappable";
import "./Link.css";

export type LinkProps = TappableProps;

/**
 * @see https://vkcom.github.io/VKUI/#/Link
 */
export const Link: React.FC<LinkProps> = ({
  children,
  ...restProps
}: LinkProps) => {
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
