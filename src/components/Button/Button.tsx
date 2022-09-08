import * as React from "react";
import { classNamesString } from "../../lib/classNames";
import { ConfigProviderContext } from "../ConfigProvider/ConfigProviderContext";
import { TappableProps, Tappable } from "../Tappable/Tappable";
import { HasAlign } from "../../types";
import { Spinner } from "../Spinner/Spinner";
import { getSizeYClassName } from "../../helpers/getSizeYClassName";
import { useAdaptivity } from "../../hooks/useAdaptivity";
import styles from "./Button.module.css";

export interface VKUIButtonProps extends HasAlign {
  mode?: "primary" | "secondary" | "tertiary" | "outline";
  appearance?: "accent" | "positive" | "negative" | "neutral" | "overlay";
  size?: "s" | "m" | "l";
  stretched?: boolean;
  before?: React.ReactNode;
  after?: React.ReactNode;
  loading?: boolean;
}

export interface ButtonProps
  extends Omit<TappableProps, "size">,
    VKUIButtonProps {}

/**
 * @see https://vkcom.github.io/VKUI/#/Button
 */
export const Button = ({
  size = "s",
  mode = "primary",
  appearance = "accent",
  stretched = false,
  align = "center",
  children,
  before,
  after,
  getRootRef,
  Component = "button",
  loading,
  onClick,
  stopPropagation = true,
  className,
  ...restProps
}: ButtonProps) => {
  const hasIcons = Boolean(before || after);
  const hasIconOnly = !children && Boolean(after) !== Boolean(before);
  const hasNewTokens = React.useContext(ConfigProviderContext).hasNewTokens;
  const { sizeY } = useAdaptivity();

  return (
    <Tappable
      hoverMode={hasNewTokens ? styles["Button--hover"] : "background"}
      activeMode={hasNewTokens ? styles["Button--active"] : "opacity"}
      {...restProps}
      Component={restProps.href ? "a" : Component}
      onClick={loading ? undefined : onClick}
      focusVisibleMode="outside"
      stopPropagation={stopPropagation}
      className={classNamesString(
        className,
        styles.Button,
        styles[`Button--size-${size}`],
        styles[`Button--mode-${mode}`],
        styles[`Button--appearance-${appearance}`],
        styles[`Button--align-${align}`],
        getSizeYClassName("Button", sizeY, styles),
        stretched && styles["Button--stretched"],
        hasIcons && styles["Button--with-icon"],
        hasIconOnly && styles["Button--singleIcon"],
        loading && styles["Button--loading"]
      )}
      getRootRef={getRootRef}
    >
      {loading && <Spinner size="small" className={styles.Button__spinner} />}
      <span className={styles.Button__in}>
        {before && (
          <span className={styles.Button__before} role="presentation">
            {before}
          </span>
        )}
        {children && <span className={styles.Button__content}>{children}</span>}
        {after && (
          <span className={styles.Button__after} role="presentation">
            {after}
          </span>
        )}
      </span>
    </Tappable>
  );
};
