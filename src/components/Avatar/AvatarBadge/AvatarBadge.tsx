import * as React from "react";
import { classNamesString } from "../../../lib/classNames";
import {
  type ImageBaseBadgeProps,
  ImageBase,
  ImageBaseContext,
} from "../../ImageBase/ImageBase";
import styles from "./AvatarBadge.module.css";

export type AvatarBadgeProps = ImageBaseBadgeProps;

export const AvatarBadge = ({ className, ...restProps }: AvatarBadgeProps) => {
  const { size } = React.useContext(ImageBaseContext);
  return (
    <ImageBase.Badge
      {...restProps}
      className={classNamesString(
        styles["AvatarBadge"],
        size < 96 && styles["AvatarBadge--shifted"],
        className
      )}
    />
  );
};
