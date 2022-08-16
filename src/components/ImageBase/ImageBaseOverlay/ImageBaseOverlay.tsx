import * as React from "react";
import { Icon28AddOutline } from "@vkontakte/icons";
import { classNamesString } from "../../../lib/classNames";
import { useAdaptivity } from "../../../hooks/useAdaptivity";
import { Tappable } from "../../Tappable/Tappable";
import type { ImageBaseSize, ImageBaseExpectedIconProps } from "../types";
import styles from "./ImageBaseOverlay.module.css";

function getRelativeSizeOfIcon(imageSize: number): number {
  if (imageSize <= 20) {
    return 12;
  } else if (imageSize <= 24) {
    return 16;
  } else if (imageSize <= 28) {
    return 18;
  } else if (imageSize <= 40) {
    return 20;
  } else if (imageSize <= 48) {
    return 24;
  } else if (imageSize <= 88) {
    return 28;
  }
  return 32;
}

export interface ImageBaseOverlayProps {
  /**
   * Размер картинки, над которой будет располагаться оверлей.
   */
  imageSize: ImageBaseSize | number;
  /**
   * Задаёт тему оформления.
   *
   * @default "light"
   */
  theme?: "dark" | "light";
  /**
   * Определяет каким образом должен показываться оверлей.
   *
   * - `"on-hover"` – на наведение указателя мыши.
   * - `"always"` – всегда показывать.
   *
   * > По умолчанию определяется в зависимости от того, есть ли у пользователя мышь или нет.
   */
  visibility?: "on-hover" | "always";
  /**
   * Иконка по середине оверлей.
   *
   * @default `Icon28AddOutline`
   */
  Icon?: React.ComponentType<ImageBaseExpectedIconProps>;
  className?: string;
  onClick?: React.MouseEventHandler<HTMLElement>;
}

export const ImageBaseOverlay = ({
  imageSize,
  className,
  theme = "light",
  visibility: visibilityProp,
  Icon = Icon28AddOutline,
  onClick,
}: ImageBaseOverlayProps) => {
  const { hasMouse } = useAdaptivity();
  const visibility = visibilityProp ?? (hasMouse ? "on-hover" : "always");

  const iconSize = getRelativeSizeOfIcon(imageSize);

  return (
    <Tappable
      type="button"
      Component="button"
      className={classNamesString(
        styles["ImageBaseOverlay"],
        visibility === "always" && styles["ImageBaseOverlay--visible"],
        theme === "light" && styles["ImageBaseOverlay--theme-light"],
        theme === "dark" && styles["ImageBaseOverlay--theme-dark"],
        className
      )}
      hasHover={visibility === "on-hover"}
      hoverMode={
        visibility === "on-hover"
          ? styles["ImageBaseOverlay--visible"]
          : undefined
      }
      focusVisibleMode={styles["ImageBaseOverlay--focus-visible"]}
      hasActive={false}
      onClick={onClick}
    >
      <Icon width={iconSize} height={iconSize} aria-hidden={true} />
    </Tappable>
  );
};
