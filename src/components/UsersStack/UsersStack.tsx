import * as React from "react";
import { hasReactNode } from "../../lib/utils";
import { classNames } from "../../lib/classNames";
import { Footnote } from "../Typography/Footnote/Footnote";
import { Caption } from "../Typography/Caption/Caption";
import "./UsersStack.css";

export interface UsersStackProps extends React.HTMLAttributes<HTMLDivElement> {
  /**
   * Массив ссылок на фотографии
   */
  photos?: string[];
  /**
   * Размер аватарок
   */
  size?: "xs" | "s" | "m"; // TODO: "s" | "m" | "l"
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
  size = "s",
  layout = "horizontal",
  children,
  ...restProps
}: UsersStackProps) => {
  const canShowOthers = count > 0 && size !== "xs";
  const CounterTypography = size === "m" ? Footnote : Caption;

  const photoSize = {
    xs: 16,
    s: 24,
    m: 32,
  }[size];
  const directionClip = canShowOthers ? "right" : "left";

  const photosShown = photos.slice(0, visibleCount);

  return (
    <div
      {...restProps}
      vkuiClass={classNames(
        "UsersStack",
        `UsersStack--size-${size}`,
        `UsersStack--l-${layout}`,
        canShowOthers && "UsersStack--others"
      )}
    >
      <div vkuiClass="UsersStack__photos" role="presentation">
        {photosShown.map((photo, i) => {
          const direction =
            i === 0 && !canShowOthers ? "circle" : directionClip;

          return (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              vkuiClass="UsersStack__photo"
              key={i}
              aria-hidden
            >
              <g vkuiClass={`UsersStack__mask--${photoSize}-${direction}`}>
                <PathElement
                  direction={direction}
                  photoSize={photoSize}
                  vkuiClass="UsersStack__fill"
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
            level="2" // TODO: remove only level in #2343
            vkuiClass="UsersStack__photo UsersStack__photo--others"
            aria-hidden
          >
            <span>+{count}</span>
          </CounterTypography>
        )}
      </div>
      {hasReactNode(children) && (
        <Footnote vkuiClass="UsersStack__text">{children}</Footnote>
      )}
    </div>
  );
};
