import { classNamesString } from "../../lib/classNames";
import { warnOnce } from "../../lib/warnOnce";
import {
  type ImageBaseProps,
  type ImageBaseBadgeProps,
  ImageBase,
} from "../ImageBase/ImageBase";
import styles from "./GridAvatar.module.css";

export interface GridAvatarProps
  extends Omit<ImageBaseProps, "src" | "badge" | "overlay" | "FallbackIcon"> {
  /**
   * > Не показывается при `size < 24`
   *
   * Бейдж в правом нижнем углу компонента.
   *
   * Принимает конструктор иконки или конфигурацию.
   */
  badge?: ImageBaseBadgeProps["Icon"] | ImageBaseBadgeProps;
  /**
   * Массив со ссылками. От 1 до 4 элементов.
   */
  src?: string[];
}

export const GRID_AVATAR_DEFAULT_SIZE = 48;

export const MAX_GRID_LENGTH = 4;

const warn = warnOnce("GridAvatar");

/**
 * @see https://vkcom.github.io/VKUI/#/GridAvatar
 */
export const GridAvatar = ({
  src = [],
  size = GRID_AVATAR_DEFAULT_SIZE,
  badge: badgeProp,
  className,
  ...restProps
}: GridAvatarProps) => {
  if (process.env.NODE_ENV === "development") {
    if (src.length > MAX_GRID_LENGTH) {
      warn(
        `Длина массива src (${src.length}) больше максимальной (${MAX_GRID_LENGTH})`,
        "error"
      );
    }
  }

  const badge: ImageBaseProps["badge"] | undefined = badgeProp
    ? {
        ...(typeof badgeProp === "function" ? { Icon: badgeProp } : badgeProp),
        className: classNamesString(
          styles["GridAvatar__badge"],
          size < 96 && styles["GridAvatar__badge--shifted"]
        ),
      }
    : undefined;

  return (
    <ImageBase
      {...restProps}
      size={size}
      badge={badge}
      className={classNamesString(styles["GridAvatar"], className)}
    >
      <div className={styles["GridAvatar__in"]} aria-hidden="true">
        {src.map((url, index) =>
          index < MAX_GRID_LENGTH ? (
            <div
              key={url}
              className={styles["GridAvatar__item"]}
              style={{ backgroundImage: `url(${url})` }}
            />
          ) : null
        )}
      </div>
    </ImageBase>
  );
};
