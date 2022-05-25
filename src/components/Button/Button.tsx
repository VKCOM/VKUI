import * as React from "react";
import { classNamesString } from "../../lib/classNames";
import { ConfigProviderContext } from "../ConfigProvider/ConfigProviderContext";
import Tappable, { TappableProps } from "../Tappable/Tappable";
import { HasAlign } from "../../types";
import { usePlatform } from "../../hooks/usePlatform";
import Spinner from "../Spinner/Spinner";
import { getSizeYClassName } from "../../helpers/getSizeYClassName";
import { useAdaptivity } from "../../hooks/useAdaptivity";
import { getPlatformClassName } from "../../helpers/getPlatformClassName";
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
const Button: React.FC<ButtonProps> = ({
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
}) => {
  const platform = usePlatform();
  const hasIcons = Boolean(before || after);
  const hasIconOnly = !children && Boolean(after) !== Boolean(before);
  const hasNewTokens = React.useContext(ConfigProviderContext).hasNewTokens;
  const { sizeY } = useAdaptivity();

  return (
    <Tappable
      {...restProps}
      Component={restProps.href ? "a" : Component}
      onClick={loading ? undefined : onClick}
      focusVisibleMode="outside"
      stopPropagation={stopPropagation}
      className={classNamesString(
        className,
        styles.Button,
        getPlatformClassName("Button", platform, styles),
        styles[`Button--sz-${size}`],
        styles[`Button--lvl-${mode}`],
        styles[`Button--clr-${appearance}`],
        styles[`Button--aln-${align}`],
        getSizeYClassName("Button", sizeY, styles),
        stretched && styles["Button--stretched"],
        hasIcons && styles["Button--with-icon"],
        hasIconOnly && styles["Button--singleIcon"]
      )}
      getRootRef={getRootRef}
      hoverMode={hasNewTokens ? styles["Button--hover"] : "background"}
      activeMode={hasNewTokens ? styles["Button--active"] : "opacity"}
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

export { Button };
