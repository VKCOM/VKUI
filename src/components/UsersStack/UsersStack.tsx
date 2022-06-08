import * as React from "react";
import { hasReactNode } from "../../lib/utils";
import { classNames } from "../../lib/classNames";
import { useIsomorphicLayoutEffect } from "../../lib/useIsomorphicLayoutEffect";
import { Footnote } from "../Typography/Footnote/Footnote";
import { Caption } from "../Typography/Caption/Caption";
import { createMasks } from "./masks";
import { useDOM } from "../../lib/dom";
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
}

/**
 * @see https://vkcom.github.io/VKUI/#/UsersStack
 */
export const UsersStack = ({
  photos = [],
  visibleCount = 3,
  size = "s",
  layout = "horizontal",
  children,
  ...restProps
}: UsersStackProps) => {
  const { document } = useDOM();

  useIsomorphicLayoutEffect(() => {
    createMasks(document);
  }, [document]);

  const othersCount = Math.max(0, photos.length - visibleCount);
  const canShowOthers = othersCount > 0 && size !== "xs";
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

          const pathHref = `#users_stack_${photoSize}_${direction}`;
          const clipPathHref = `url(#users_stack_mask_${photoSize}_${direction})`;

          return (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              vkuiClass="UsersStack__photo"
              key={i}
              aria-hidden
            >
              <g clipPath={clipPathHref}>
                <use vkuiClass="UsersStack__fill" href={pathHref} />
                <image href={photo} width={photoSize} height={photoSize} />
                <use href={pathHref} fill="none" stroke="rgba(0, 0, 0, 0.08)" />
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
            <span>+{othersCount}</span>
          </CounterTypography>
        )}
      </div>
      {hasReactNode(children) && (
        <Footnote vkuiClass="UsersStack__text">{children}</Footnote>
      )}
    </div>
  );
};
