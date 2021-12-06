import * as React from "react";
import Avatar, { AvatarProps } from "../Avatar/Avatar";
import { classNames } from "../../lib/classNames";
import { warnOnce } from "../../lib/warnOnce";
import { HasRootRef } from "../../types";
import "./GridAvatar.css";

export interface GridAvatarProps
  extends React.HTMLAttributes<HTMLDivElement>,
    HasRootRef<HTMLDivElement>,
    Pick<AvatarProps, "size" | "shadow" | "badge"> {
  src?: string[];
}

const MIN_GRID_LENGTH = 1;
const MAX_GRID_LENGTH = 4;

const warn = warnOnce("GridAvatar");

export const GridAvatar: React.FC<GridAvatarProps> = ({
  src = [],
  ...restProps
}: GridAvatarProps) => {
  if (process.env.NODE_ENV === "development" && src.length > MAX_GRID_LENGTH) {
    warn(
      `Размер пропа src (${src.length}) больше максимального (${MAX_GRID_LENGTH})`
    );
  }

  const count = Math.max(
    MIN_GRID_LENGTH,
    Math.min(MAX_GRID_LENGTH, src.length)
  );

  return (
    <Avatar
      {...restProps}
      vkuiClass={classNames("GridAvatar", `GridAvatar--images-${count}`)}
    >
      <div vkuiClass="GridAvatar__in">
        {src.slice(0, MAX_GRID_LENGTH).map((src, i) => {
          return (
            <div
              key={i}
              vkuiClass="GridAvatar__item"
              style={{ backgroundImage: `url(${src})` }}
            ></div>
          );
        })}
      </div>
    </Avatar>
  );
};
