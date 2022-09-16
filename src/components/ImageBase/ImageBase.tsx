import * as React from "react";
import { classNamesString } from "../../lib/classNames";
import type { HasRef, HasRootRef } from "../../types";
import type { ImageBaseExpectedIconProps, ImageBaseSize } from "./types";
import {
  type ImageBaseBadgeProps as ImageBaseBadgeInternalProps,
  ImageBaseBadge,
} from "./ImageBaseBadge/ImageBaseBadge";
import {
  type ImageBaseOverlayProps as ImageBaseOverlayInternalProps,
  ImageBaseOverlay,
} from "./ImageBaseOverlay/ImageBaseOverlay";
import styles from "./ImageBase.module.css";

function getRelativeSizeOfFallbackIcon(imageSize: number): number {
  if (imageSize <= 20) {
    return 12;
  } else if (imageSize <= 28) {
    return 16;
  } else if (imageSize <= 32) {
    return 20;
  } else if (imageSize <= 44) {
    return 24;
  } else if (imageSize <= 64) {
    return 28;
  }
  return 36;
}

export type { ImageBaseSize, ImageBaseExpectedIconProps };

export type ImageBaseBadgeProps = Pick<
  ImageBaseBadgeInternalProps,
  "background" | "Icon"
>;

export type ImageBaseOverlayProps = Pick<
  ImageBaseOverlayInternalProps,
  "theme" | "visibility" | "Icon"
>;

export interface ImageBaseProps
  extends React.ImgHTMLAttributes<HTMLElement>,
    HasRootRef<HTMLDivElement>,
    HasRef<HTMLImageElement> {
  /**
   * Задаёт размер картинки.
   *
   * > ⚠️ Избегайте передачи кастомного размера. Используйте размеры заданные дизайн-системой.
   */
  size?: ImageBaseSize | number;
  /**
   * > Не показывается при `size < 24`
   *
   * Бейдж в правом нижнем углу компонента.
   *
   * > Note: включаем `className`, чтобы можно было влиять на расположение и другие параметры бейджа.
   */
  badge?: ImageBaseBadgeProps & { className?: string };
  /**
   * Интерактивный оверлей над картинкой.
   *
   * Если передать `true`, то будет применён оверлей с параметрами по умолчанию. Значение для `theme` будет браться из
   * параметра `appearance` в `ConfigProvider`.
   */
  overlay?: boolean | ImageBaseOverlayProps;
  /**
   * Фолбек на случай, если картинка не прогрузилась. Принимает конструктор иконки.
   *
   * > Если передан `children`, то фолбек будет проигнорирован.
   */
  FallbackIcon?: React.ComponentType<ImageBaseExpectedIconProps> | null;
}

/**
 * @see https://vkcom.github.io/VKUI/#/ImageBase
 */
export const ImageBase = ({
  alt,
  crossOrigin,
  decoding,
  loading,
  referrerPolicy,
  sizes,
  src,
  srcSet,
  useMap,
  getRef,
  size = 24,
  width,
  height,
  style,
  className,
  getRootRef,
  badge: badgeProp,
  overlay: overlayProp,
  FallbackIcon,
  children,
  "aria-label": ariaLabel,
  onClick,
  ...restProps
}: ImageBaseProps) => {
  const [loaded, setLoaded] = React.useState(false);
  const [failed, setFailed] = React.useState(false);

  const hasSrc = src || srcSet;
  const needShowFallbackIcon = (failed || !hasSrc) && !children && FallbackIcon;

  const fallbackIconSize = needShowFallbackIcon
    ? getRelativeSizeOfFallbackIcon(size)
    : undefined;
  const fallbackIcon = needShowFallbackIcon ? (
    <FallbackIcon
      width={fallbackIconSize}
      height={fallbackIconSize}
      aria-hidden={true}
    />
  ) : null;

  const badgeComponent =
    size >= 24 && badgeProp ? (
      <ImageBaseBadge {...badgeProp} imageSize={size} />
    ) : null;

  const overlayComponent = overlayProp ? (
    <ImageBaseOverlay
      {...(typeof overlayProp === "boolean" ? undefined : overlayProp)}
      imageSize={size}
      onClick={onClick}
    />
  ) : null;

  const handleImageLoad = () => {
    setLoaded(true);
    setFailed(false);
  };

  const handleImageError = () => {
    setLoaded(false);
    setFailed(true);
  };

  return (
    <div
      {...restProps}
      ref={getRootRef}
      style={{ ...style, width: size, height: size }}
      className={classNamesString(
        className,
        styles["ImageBase"],
        styles[`ImageBase--size-${size as ImageBaseSize}`],
        loaded && styles["ImageBase--loaded"]
      )}
      role={hasSrc ? "img" : "presentation"}
      aria-label={ariaLabel}
      onClick={overlayComponent ? undefined : onClick}
    >
      {hasSrc && (
        <img
          ref={getRef}
          alt={alt}
          className={styles["ImageBase__img"]}
          crossOrigin={crossOrigin}
          decoding={decoding}
          loading={loading}
          referrerPolicy={referrerPolicy}
          sizes={sizes}
          src={src}
          srcSet={srcSet}
          useMap={useMap}
          width={width}
          height={height}
          onLoad={handleImageLoad}
          onError={handleImageError}
        />
      )}
      {children}
      {fallbackIcon}
      {overlayComponent}
      {badgeComponent}
    </div>
  );
};
