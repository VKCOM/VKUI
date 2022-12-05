import * as React from "react";
import { classNamesString } from "../../../lib/classNames";
import type { ImageBaseSize, ImageBaseExpectedIconProps } from "../types";
import styles from "./ImageBaseBadge.module.css";

function getRelativeSizeOfIcon(imageSize: number): number {
  if (imageSize <= 36) {
    return 12;
  } else if (imageSize <= 48) {
    return 16;
  } else if (imageSize <= 64) {
    return 20;
  }
  return 24;
}

export interface ImageBaseBadgeProps {
  /**
   * Размер картинки, над которой будет располагаться оверлей.
   */
  imageSize: ImageBaseSize | number;
  /**
   * Вид подложки под иконку.
   *
   * - `"stroke"` – имитирует вырез (⚠️ если фон под компонентом динамический, то будет бага).
   * - `"shadow"` – добавляет небольшую тень.
   *
   * @default "shadow"
   */
  background?: "stroke" | "shadow";
  /**
   * Иконка.
   *
   * @default `Icon28AddOutline`
   */
  Icon: React.ComponentType<ImageBaseExpectedIconProps>;
  className?: string;
}

export const ImageBaseBadge = ({
  imageSize,
  background = "shadow",
  className,
  Icon,
}: ImageBaseBadgeProps) => {
  const iconSize = getRelativeSizeOfIcon(imageSize);

  return (
    <div
      className={classNamesString(
        styles["ImageBaseBadge"],
        styles[`ImageBaseBadge--background-${background}`],
        className
      )}
    >
      <Icon width={iconSize} height={iconSize} />
    </div>
  );
};
