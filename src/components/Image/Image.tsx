import { classNamesString } from "../../lib/classNames";
import {
  type ImageBaseProps,
  type ImageBaseBadgeProps,
  ImageBase,
} from "../ImageBase/ImageBase";
import styles from "./Image.module.css";

export const IMAGE_DEFAULT_SIZE = 48;

export interface ImageProps extends Omit<ImageBaseProps, "badge"> {
  /**
   * > Не показывается при `size < 24`
   *
   * Бейдж в правом нижнем углу компонента.
   *
   * Можно конструктор иконки или конфигурацию.
   */
  badge?: ImageBaseBadgeProps["Icon"] | ImageBaseBadgeProps;
  /**
   * Размер закругления.
   */
  borderRadius?: "s" | "l" | "m";
}

/**
 * @see https://vkcom.github.io/VKUI/#/Image
 */
export const Image = ({
  size = IMAGE_DEFAULT_SIZE,
  badge: badgeProp,
  borderRadius: borderRadiusProp = "m",
  style,
  className,
  ...restProps
}: ImageProps) => {
  const badge: ImageBaseProps["badge"] | undefined = badgeProp
    ? {
        ...(typeof badgeProp === "function" ? { Icon: badgeProp } : badgeProp),
        className: classNamesString(
          styles["Image__badge"],
          size < 96 && styles["Image__badge--shifted"]
        ),
      }
    : undefined;

  let borderRadius: number;

  switch (borderRadiusProp) {
    case "s": {
      if (size <= 32) {
        borderRadius = 2;
      } else if (size <= 56) {
        borderRadius = 3;
      }
      borderRadius = 4;
      break;
    }
    case "m": {
      if (size <= 32) {
        borderRadius = 3;
      } else if (size <= 48) {
        borderRadius = 4;
      } else if (size <= 72) {
        borderRadius = 6;
      } else if (size <= 80) {
        borderRadius = 8;
      }
      borderRadius = 10;
      break;
    }
    case "l": {
      if (size <= 16) {
        borderRadius = 4;
      } else if (size <= 20) {
        borderRadius = 5;
      } else if (size <= 32) {
        borderRadius = 6;
      } else if (size <= 40) {
        borderRadius = 8;
      } else if (size <= 48) {
        borderRadius = 10;
      } else if (size <= 56) {
        borderRadius = 12;
      } else if (size <= 64) {
        borderRadius = 14;
      }
      borderRadius = 16;
    }
  }

  return (
    <ImageBase
      {...restProps}
      size={size}
      badge={badge}
      style={{ ...style, borderRadius }}
      className={classNamesString(styles["Image"], className)}
    />
  );
};
