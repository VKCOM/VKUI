import * as React from "react";
import { classNames } from "../../lib/classNames";
import { ConfigProviderContext } from "../ConfigProvider/ConfigProviderContext";
import Tappable, { TappableProps } from "../Tappable/Tappable";
import { HasAlign } from "../../types";
import { usePlatform } from "../../hooks/usePlatform";
import Spinner from "../Spinner/Spinner";
import { getSizeYClassName } from "../../helpers/getSizeYClassName";
import { useAdaptivity } from "../../hooks/useAdaptivity";
import { getClassName } from "../../helpers/getClassName";
import "./Button.css";

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
      vkuiClass={classNames(
        getClassName("Button", platform),
        `Button--sz-${size}`,
        `Button--lvl-${mode}`,
        `Button--clr-${appearance}`,
        `Button--aln-${align}`,
        getSizeYClassName("Button", sizeY),
        stretched && "Button--stretched",
        hasIcons && "Button--with-icon",
        hasIconOnly && "Button--singleIcon"
      )}
      getRootRef={getRootRef}
      hoverMode={hasNewTokens ? "Button--hover" : "background"}
      activeMode={hasNewTokens ? "Button--active" : "opacity"}
    >
      {loading && <Spinner size="small" vkuiClass="Button__spinner" />}
      <span vkuiClass="Button__in">
        {before && <span vkuiClass="Button__before">{before}</span>}
        {children && <span vkuiClass="Button__content">{children}</span>}
        {after && <span vkuiClass="Button__after">{after}</span>}
      </span>
    </Tappable>
  );
};

export { Button };
