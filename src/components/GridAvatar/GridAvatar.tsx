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

  return (
    <Avatar {...restProps} vkuiClass={classNames("GridAvatar")}>
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
