import * as React from "react";
import { classNamesString } from "../../lib/classNames";
import { TappableProps, Tappable } from "../Tappable/Tappable";
import styles from "./Link.module.css";

export interface LinkProps extends TappableProps {
  /**
   * Включает состояние `visited`, которое позволяет пользователю понять посещал ли он ссылку или нет
   */
  hasVisited?: boolean;
}

/**
 * @see https://vkcom.github.io/VKUI/#/Link
 */
export const Link = ({
  hasVisited,
  children,
  className,
  ...restProps
}: LinkProps) => {
  return (
    <Tappable
      Component={restProps.href ? "a" : "button"}
      {...restProps}
      className={classNamesString(
        styles["Link"],
        hasVisited && styles["Link--has-visited"],
        className
      )}
      hasHover={false}
      activeMode="opacity"
      focusVisibleMode={styles["Link--focus-visible"]}
    >
      {children}
    </Tappable>
  );
};
