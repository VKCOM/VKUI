import * as React from "react";
import { classNames } from "../../lib/classNames";
import { ConfigProviderContext } from "../ConfigProvider/ConfigProviderContext";
import Tappable, { TappableProps } from "../Tappable/Tappable";
import Title from "../Typography/Title/Title";
import Text from "../Typography/Text/Text";
import Subhead from "../Typography/Subhead/Subhead";
import { Caption } from "../Typography/Caption/Caption";
import { HasAlign, HasComponent } from "../../types";
import { usePlatform } from "../../hooks/usePlatform";
import {
  AdaptivityProps,
  SizeType,
  withAdaptivity,
} from "../../hoc/withAdaptivity";
import { PlatformType, IOS, VKCOM, ANDROID } from "../../lib/platform";
import Spinner from "../Spinner/Spinner";
import Headline from "../Typography/Headline/Headline";
import "./Button.css";

export interface VKUIButtonProps extends HasAlign {
  /**
   Значения `commerce`, `destructive`, `overlay_...` будут упразднены в 5.0.0
   */
  mode?:
    | "primary"
    | "secondary"
    | "tertiary"
    | "outline"
    | "commerce"
    | "destructive"
    | "overlay_primary"
    | "overlay_secondary"
    | "overlay_outline";
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

interface ButtonTypographyProps extends HasComponent {
  size: ButtonProps["size"];
  platform: PlatformType | undefined;
  sizeY: AdaptivityProps["sizeY"];
  children?: ButtonProps["children"];
}

const ButtonTypography: React.FC<ButtonTypographyProps> = (
  props: ButtonTypographyProps
) => {
  const { size, sizeY, platform, ...restProps } = props;
  const isCompact = sizeY === SizeType.COMPACT;

  switch (size) {
    case "l":
      if (isCompact) {
        return <Text weight="medium" {...restProps} />;
      }
      if (platform === ANDROID) {
        return <Headline weight="medium" {...restProps} />;
      }
      return <Title level="3" weight="2" {...restProps} />;
    case "m":
      if (isCompact) {
        return (
          <Subhead weight={platform === VKCOM ? "3" : "2"} {...restProps} />
        );
      }

      return <Text weight="medium" {...restProps} />;
    case "s":
    default:
      if (platform === IOS) {
        return <Subhead weight="2" {...restProps} />;
      }

      if (platform === VKCOM) {
        return <Caption {...restProps} />;
      }

      if (isCompact) {
        return <Caption weight="2" {...restProps} />;
      }

      return <Subhead weight="2" {...restProps} />;
  }
};

interface ResolvedButtonAppearance {
  resolvedAppearance: ButtonProps["appearance"];
  resolvedMode: ButtonProps["mode"];
}

function resolveButtonAppearance(
  appearance: ButtonProps["appearance"],
  mode: ButtonProps["mode"]
): ResolvedButtonAppearance {
  let resolvedAppearance: ButtonProps["appearance"] = appearance;
  let resolvedMode: ButtonProps["mode"] = mode;

  if (appearance === undefined) {
    switch (mode) {
      case "tertiary":
      case "secondary":
      case "primary":
      case "outline":
        resolvedAppearance = "accent";
        break;
      case "commerce":
        resolvedMode = "primary";
        resolvedAppearance = "positive";
        break;
      case "destructive":
        resolvedMode = "primary";
        resolvedAppearance = "negative";
        break;
      case "overlay_primary":
        resolvedMode = "primary";
        resolvedAppearance = "overlay";
        break;
      case "overlay_secondary":
        resolvedMode = "secondary";
        resolvedAppearance = "overlay";
        break;
      case "overlay_outline":
        resolvedMode = "outline";
        resolvedAppearance = "overlay";
        break;
    }
  }

  return {
    resolvedAppearance,
    resolvedMode,
  };
}

const Button: React.FC<ButtonProps> = (props: ButtonProps) => {
  const platform = usePlatform();
  const {
    size,
    mode,
    appearance,
    stretched,
    align,
    children,
    before,
    after,
    getRootRef,
    sizeY,
    Component = "button",
    loading,
    onClick,
    ...restProps
  } = props;
  const hasIcons = Boolean(before || after);
  const { resolvedMode, resolvedAppearance } = resolveButtonAppearance(
    appearance,
    mode
  );
  const hasNewTokens = React.useContext(ConfigProviderContext).hasNewTokens;

  return (
    <Tappable
      {...restProps}
      Component={restProps.href ? "a" : Component}
      onClick={loading ? undefined : onClick}
      focusVisibleMode="outside"
      vkuiClass={classNames(
        "Button",
        `Button--sz-${size}`,
        `Button--lvl-${resolvedMode}`,
        `Button--clr-${resolvedAppearance}`,
        `Button--aln-${align}`,
        `Button--sizeY-${sizeY}`,
        {
          ["Button--stretched"]: stretched,
          ["Button--with-icon"]: hasIcons,
          ["Button--singleIcon"]: Boolean(
            (!children && !after && before) || (!children && after && !before)
          ),
        }
      )}
      getRootRef={getRootRef}
      hoverMode={hasNewTokens ? "Button--hover" : "background"}
      activeMode={hasNewTokens ? "Button--active" : "opacity"}
    >
      {loading && <Spinner size="small" vkuiClass="Button__spinner" />}
      <span vkuiClass="Button__in">
        {before && <span vkuiClass="Button__before">{before}</span>}
        {children && (
          <ButtonTypography
            size={size}
            sizeY={sizeY}
            platform={platform}
            vkuiClass="Button__content"
            Component="span"
          >
            {children}
          </ButtonTypography>
        )}
        {after && <span vkuiClass="Button__after">{after}</span>}
      </span>
    </Tappable>
  );
};

Button.defaultProps = {
  mode: "primary",
  align: "center",
  size: "s",
  stretched: false,
  stopPropagation: true,
};

// eslint-disable-next-line import/no-default-export
export default withAdaptivity(Button, {
  sizeY: true,
});
