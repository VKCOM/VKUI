import * as React from "react";
import { Icon12Circle, Icon12OnlineMobile } from "@vkontakte/icons";
import { getClassName } from "../../helpers/getClassName";
import { classNames } from "../../lib/classNames";
import { usePlatform } from "../../hooks/usePlatform";
import { useAdaptivity } from "../../hooks/useAdaptivity";
import Tappable from "../Tappable/Tappable";
import { HasRef, HasRootRef } from "../../types";
import "./Avatar.css";

export interface AvatarProps
  extends React.ImgHTMLAttributes<HTMLElement>,
    HasRootRef<HTMLDivElement>,
    HasRef<HTMLImageElement> {
  /**
   * Рекомендуемый сет значений: 96 | 88 | 80 | 72 | 64 | 56 | 48 | 44 | 40 | 36 | 32 | 28 | 24
   */
  size?: number;
  mode?: "default" | "image" | "app";
  shadow?: boolean;
  badge?: "online" | "online-mobile" | JSX.Element;
  overlayIcon?: JSX.Element;
  overlayMode?: "dark" | "light";
  /**
   * Поведение показа overlay: "hover" - при наведении, "always" - всегда
   */
  overlayAction?: "hover" | "always";
}

export const AVATAR_DEFAULT_SIZE = 48;
export const AVATAR_DEFAULT_SHADOW = true;

const Avatar: React.FC<AvatarProps> = ({
  alt,
  crossOrigin,
  decoding,
  height,
  loading,
  referrerPolicy,
  sizes,
  src,
  srcSet,
  useMap,
  width,
  getRef,
  size = AVATAR_DEFAULT_SIZE,
  shadow = AVATAR_DEFAULT_SHADOW,
  mode = "default",
  className,
  children,
  getRootRef,
  style,
  "aria-label": ariaLabel,
  badge,
  overlayIcon,
  overlayMode = "light",
  overlayAction: passedOverlayAction,
  onClick,
  ...restProps
}: AvatarProps) => {
  const platform = usePlatform();
  const { hasMouse } = useAdaptivity();
  const [failedImage, setFailedImage] = React.useState(false);

  const overlayAction = passedOverlayAction ?? (hasMouse ? "hover" : "always");

  const onImageError = () => {
    setFailedImage(true);
  };

  const onImageLoad = () => {
    setFailedImage(false);
  };

  let borderRadius: string | number = "50%";

  switch (mode) {
    case "image":
      size < 64 && (borderRadius = 4);
      size >= 64 && size < 96 && (borderRadius = 6);
      size >= 96 && (borderRadius = 8);
      break;
    case "app":
      size <= 40 && (borderRadius = 8);
      size > 40 && size < 56 && (borderRadius = 10);
      size >= 56 && size < 64 && (borderRadius = 12);
      size >= 64 && size < 84 && (borderRadius = 16);
      size >= 84 && (borderRadius = 18);
      break;
    default:
      break;
  }

  const hasSrc = src || srcSet;

  return (
    <div
      {...restProps}
      vkuiClass={classNames(
        getClassName("Avatar", platform),
        `Avatar--type-${mode}`,
        `Avatar--sz-${size}`,
        {
          "Avatar--shadow": shadow,
          "Avatar--failed": failedImage,
        }
      )}
      className={className}
      ref={getRootRef}
      role={hasSrc ? "img" : "presentation"}
      aria-label={alt || ariaLabel}
      onClick={!overlayIcon ? onClick : undefined}
      style={{ ...style, width: size, height: size, borderRadius }}
    >
      {hasSrc && (
        <img
          crossOrigin={crossOrigin}
          decoding={decoding}
          height={height}
          loading={loading}
          referrerPolicy={referrerPolicy}
          sizes={sizes}
          src={src}
          srcSet={srcSet}
          useMap={useMap}
          width={width}
          ref={getRef}
          onError={onImageError}
          onLoad={onImageLoad}
          vkuiClass="Avatar__img"
          alt=""
        />
      )}
      {children && <div vkuiClass="Avatar__children">{children}</div>}
      {overlayIcon && (
        <Tappable
          Component="button"
          vkuiClass={classNames("Avatar__overlay", {
            "Avatar__overlay--visible": overlayAction === "always",
            "Avatar__overlay--light": overlayMode === "light",
            "Avatar__overlay--dark": overlayMode === "dark",
          })}
          hoverMode="Avatar__overlay--visible"
          focusVisibleMode="Avatar__overlay--focus-visible"
          hasActive={false}
          onClick={onClick}
        >
          {overlayIcon}
        </Tappable>
      )}
      {badge && (
        <div
          vkuiClass={classNames("Avatar__badge", {
            "Avatar__badge--large": size >= 96,
            "Avatar__badge--shadow":
              badge !== "online" && badge !== "online-mobile",
          })}
        >
          {badge === "online" ? (
            <div vkuiClass="Avatar__badge-online">
              <Icon12Circle
                width={size >= 72 ? 15 : 12}
                height={size >= 72 ? 15 : 12}
              />
            </div>
          ) : badge === "online-mobile" ? (
            <div vkuiClass="Avatar__badge-online-mobile">
              <Icon12OnlineMobile
                width={size >= 72 ? 9 : 8}
                height={size >= 72 ? 15 : 12}
              />
            </div>
          ) : (
            badge
          )}
        </div>
      )}
    </div>
  );
};

// eslint-disable-next-line import/no-default-export
export default Avatar;
