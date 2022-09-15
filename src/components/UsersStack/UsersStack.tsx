import * as React from "react";
import { hasReactNode } from "../../lib/utils";
import { classNamesString } from "../../lib/classNames";
import { Footnote } from "../Typography/Footnote/Footnote";
import { Caption } from "../Typography/Caption/Caption";
import styles from "./UsersStack.module.css";

export interface UsersStackProps extends React.HTMLAttributes<HTMLDivElement> {
  /**
   * Массив ссылок на фотографии
   */
  photos?: string[];
  /**
   * Размер аватарок
   */
  size?: "s" | "m" | "l";
  /**
   * Вертикальный режим рекомендуется использовать с размером `m`
   */
  layout?: "vertical" | "horizontal";
  /**
   * Количество аватарок, которые будут показаны.
   * Если в массиве `photos` больше элементов и используется размер `m`, то будет показано количество остальных элементов
   */
  visibleCount?: number;
  /**
   * Число, которое будет указано в счетчике.
   * По умолчанию высчитывается по формуле `photos.length - visibleCount`.
   * Если число больше 99, то счетчик скроется.
   */
  count?: number;
}

interface PathElementProps extends React.SVGAttributes<SVGElement> {
  photoSize: number;
  direction: "circle" | "right" | "left";
}

type PhotoSizeType = 16 | 24 | 32;

function PathElement({ photoSize, direction, ...props }: PathElementProps) {
  switch (direction) {
    case "circle":
      const radius = photoSize / 2;

      return <circle cx={radius} cy={radius} r={radius} {...props} />;

    case "right":
      switch (photoSize) {
        case 24:
          return (
            <path
              d="M22,18.625A12 12 0 0 1 12 24A12 12 0 0 1 12 0A12 12 0 0 1 22 5.375A12 12 0 0 0 22,18.625"
              {...props}
            />
          );

        default:
          return (
            <path
              d="M30,23.75A16 16 0 0 1 16 32A16 16 0 0 1 16 0A16 16 0 0 1 30 8.25A16 16 0 0 0 30,23.75"
              {...props}
            />
          );
      }

    default:
      switch (photoSize) {
        case 16:
          return (
            <path
              d="M2,13.285A8 8 0 0 0 8 16A8 8 0 0 0 8 0A8 8 0 0 0 2 2.715A8 8 0 0 1 2,13.285"
              {...props}
            />
          );
        case 24:
          return (
            <path
              d="M2,18.625A12 12 0 0 0 12 24A12 12 0 0 0 12 0A12 12 0 0 0 2 5.375A12 12 0 0 1 2,18.625"
              {...props}
            />
          );

        default:
          return (
            <path
              d="M2,23.75A16 16 0 0 0 16 32A16 16 0 0 0 16 0A16 16 0 0 0 2 8.25A16 16 0 0 1 2,23.75"
              {...props}
            />
          );
      }
  }
}

/**
 * @see https://vkcom.github.io/VKUI/#/UsersStack
 */
export const UsersStack = ({
  photos = [],
  visibleCount = 3,
  count = Math.max(0, photos.length - visibleCount),
  size = "m",
  layout = "horizontal",
  children,
  className,
  ...restProps
}: UsersStackProps) => {
  const canShowOthers = count > 0 && size !== "s";
  const CounterTypography = size === "m" ? Footnote : Caption;

  const photoSize = {
    s: 16,
    m: 24,
    l: 32,
  }[size] as PhotoSizeType;
  const directionClip = canShowOthers ? "right" : "left";

  const photosShown = photos.slice(0, visibleCount);

  return (
    <div
      {...restProps}
      className={classNamesString(
        styles["UsersStack"],
        styles[`UsersStack--size-${size}`],
        styles[`UsersStack--layout-${layout}`],
        canShowOthers && styles["UsersStack--others"],
        className
      )}
    >
      <div className={styles["UsersStack__photos"]} role="presentation">
        {photosShown.map((photo, i) => {
          const direction =
            i === 0 && !canShowOthers ? "circle" : directionClip;

          return (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className={styles["UsersStack__photo"]}
              key={i}
              aria-hidden
            >
              <g
                className={
                  styles[`UsersStack__mask--${photoSize}-${direction}`]
                }
              >
                <PathElement
                  direction={direction}
                  photoSize={photoSize}
                  className={styles["UsersStack__fill"]}
                />
                <image href={photo} width={photoSize} height={photoSize} />
                <PathElement
                  direction={direction}
                  photoSize={photoSize}
                  fill="none"
                  stroke="rgba(0, 0, 0, 0.08)"
                />
              </g>
            </svg>
          );
        })}

        {canShowOthers && (
          <CounterTypography
            caps
            weight="1"
            className={classNamesString(
              styles["UsersStack__photo"],
              styles["UsersStack__photo--others"]
            )}
            aria-hidden
          >
            <span>+{count}</span>
          </CounterTypography>
        )}
      </div>
      {hasReactNode(children) && (
        <Footnote className={styles["UsersStack__text"]}>{children}</Footnote>
      )}
    </div>
  );
};
