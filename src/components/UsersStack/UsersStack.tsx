import * as React from "react";
import { getClassName } from "../../helpers/getClassName";
import { usePlatform } from "../../hooks/usePlatform";
import { hasReactNode } from "../../lib/utils";
import { classNames } from "../../lib/classNames";
import { useIsomorphicLayoutEffect } from "../../lib/useIsomorphicLayoutEffect";
import { Caption } from "../Typography/Caption/Caption";
import Subhead from "../Typography/Subhead/Subhead";
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
  size?: "xs" | "s" | "m";
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

const UsersStack: React.FC<UsersStackProps> = (props: UsersStackProps) => {
  const platform = usePlatform();
  const {
    photos = [],
    visibleCount = 0,
    size,
    layout,
    children,
    ...restProps
  } = props;
  const { document } = useDOM();

  useIsomorphicLayoutEffect(() => {
    createMasks(document);
  }, [document]);

  const othersCount = Math.max(0, photos.length - visibleCount);
  const canShowOthers = othersCount > 0 && size === "m";

  const photosShown = photos.slice(0, visibleCount);

  return (
    <div
      {...restProps}
      vkuiClass={classNames(
        getClassName("UsersStack", platform),
        `UsersStack--size-${size}`,
        `UsersStack--l-${layout}`,
        {
          "UsersStack--others": canShowOthers,
        }
      )}
    >
      <div vkuiClass="UsersStack__photos" role="presentation">
        {photosShown.map((photo, i) => (
          <div
            key={i}
            vkuiClass="UsersStack__photo"
            style={{ backgroundImage: `url(${photo})` }}
          />
        ))}

        {canShowOthers && (
          <Caption
            weight="1"
            vkuiClass="UsersStack__photo UsersStack__photo--others"
            aria-hidden="true"
          >
            <span>+{othersCount}</span>
          </Caption>
        )}
      </div>
      {hasReactNode(children) && (
        <Subhead Component="span" vkuiClass="UsersStack__text">
          {children}
        </Subhead>
      )}
    </div>
  );
};

UsersStack.defaultProps = {
  photos: [],
  size: "s",
  visibleCount: 3,
  layout: "horizontal",
};

// eslint-disable-next-line import/no-default-export
export default React.memo(UsersStack);
