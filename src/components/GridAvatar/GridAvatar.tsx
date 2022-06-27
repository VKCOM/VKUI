import * as React from "react";
import { Avatar, AvatarProps } from "../Avatar/Avatar";
import { warnOnce } from "../../lib/warnOnce";
import { HasRootRef } from "../../types";
import "./GridAvatar.css";

export interface GridAvatarProps
  extends React.HTMLAttributes<HTMLDivElement>,
    HasRootRef<HTMLDivElement>,
    Pick<AvatarProps, "size" | "shadow" | "badge"> {
  /**
   * Массив со ссылками. От 1 до 4 элементов.
   */
  src?: string[];
}

export const MAX_GRID_LENGTH = 4;

const warn = warnOnce("GridAvatar");

/**
 * @see https://vkcom.github.io/VKUI/#/GridAvatar
 */
export const GridAvatar = ({ src = [], ...restProps }: GridAvatarProps) => {
  if (process.env.NODE_ENV === "development" && src.length > MAX_GRID_LENGTH) {
    warn(
      `Длина массива src (${src.length}) больше максимальной (${MAX_GRID_LENGTH})`,
      "error"
    );
  }

  return (
    <Avatar {...restProps} vkuiClass="GridAvatar">
      <div vkuiClass="GridAvatar__in" aria-hidden="true">
        {src.map((url, index) =>
          index < MAX_GRID_LENGTH ? (
            <div
              key={url}
              vkuiClass="GridAvatar__item"
              style={{ backgroundImage: `url(${url})` }}
            />
          ) : null
        )}
      </div>
    </Avatar>
  );
};
