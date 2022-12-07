import * as React from "react";
import { TappableProps, Tappable } from "../Tappable/Tappable";
import { classNamesString } from "../../lib/classNames";
import { usePlatform } from "../../hooks/usePlatform";
import { Platform } from "../../lib/platform";
import { getSizeYClassName } from "../../helpers/getSizeYClassName";
import { useAdaptivity } from "../../hooks/useAdaptivity";
import styles from "./IconButton.module.css";

export interface IconButtonProps extends TappableProps {
  children?: React.ReactNode;
}

/**
 * @see https://vkcom.github.io/VKUI/#/IconButton
 */
export const IconButton = ({
  children,
  Component = "button",
  className,
  ...restProps
}: IconButtonProps) => {
  const platform = usePlatform();
  const { sizeY } = useAdaptivity();

  return (
    <Tappable
      activeEffectDelay={200}
      activeMode="background"
      {...restProps}
      Component={restProps.href ? "a" : Component}
      className={classNamesString(
        styles["IconButton"],
        getSizeYClassName(styles["IconButton"], sizeY),
        platform === Platform.IOS && styles["IconButton--ios"],
        className
      )}
    >
      {children}
    </Tappable>
  );
};
