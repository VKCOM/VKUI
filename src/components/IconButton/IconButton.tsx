import * as React from "react";
import { TappableProps, Tappable } from "../Tappable/Tappable";
import { classNames } from "../../lib/classNames";
import { usePlatform } from "../../hooks/usePlatform";
import { IOS } from "../../lib/platform";
import { getSizeYClassName } from "../../helpers/getSizeYClassName";
import { useAdaptivity } from "../../hooks/useAdaptivity";
import "./IconButton.css";

export interface IconButtonProps extends TappableProps {
  children?: React.ReactNode;
}

/**
 * @see https://vkcom.github.io/VKUI/#/IconButton
 */
export const IconButton = ({
  children,
  Component = "button",
  ...restProps
}: IconButtonProps) => {
  const platform = usePlatform();
  const { sizeY } = useAdaptivity();

  return (
    <Tappable
      {...restProps}
      Component={restProps.href ? "a" : Component}
      activeEffectDelay={200}
      activeMode="background"
      vkuiClass={classNames(
        "IconButton",
        getSizeYClassName("IconButton", sizeY),
        platform === IOS && "IconButton--ios"
      )}
    >
      {children}
    </Tappable>
  );
};
