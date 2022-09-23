import * as React from "react";
import { Icon28Users } from "@vkontakte/icons";
import { classNamesString } from "../../lib/classNames";
import {
  type ImageBaseProps,
  type ImageBaseBadgeProps,
  ImageBase,
} from "../ImageBase/ImageBase";
import { getInitialsFontSize } from "./helpers";
import { Icon12Circle, Icon12OnlineMobile } from "./icons";
import styles from "./Avatar.module.css";

const BADGE_ONLINE = {
  className: classNamesString(
    styles["Avatar__badge"],
    styles[`Avatar__badge--online`]
  ),
  background: "stroke" as const,
  Icon: Icon12Circle,
};

const BADGE_ONLINE_MOBILE = {
  className: classNamesString(
    styles["Avatar__badge"],
    styles[`Avatar__badge--online-mobile`]
  ),
  background: "stroke" as const,
  Icon: Icon12OnlineMobile,
};

const COLORS_NUMBER_TO_TEXT_MAP = {
  1: "red",
  2: "orange",
  3: "yellow",
  4: "green",
  5: "l-blue",
  6: "violet",
} as const;

export const AVATAR_DEFAULT_SIZE = 48;

/**
 * Градиенты, которые можно использовать в алгоритме поиска градиентов по числовому идентификатору пользователя.
 * @example user.id % 6 + 1
 */
export type InitialsAvatarNumberGradients =
  keyof typeof COLORS_NUMBER_TO_TEXT_MAP;

export type InitialsAvatarTextGradients =
  | typeof COLORS_NUMBER_TO_TEXT_MAP[InitialsAvatarNumberGradients]
  | "blue";

export interface AvatarProps extends Omit<ImageBaseProps, "badge"> {
  /**
   * > Не показывается при `size < 24`
   *
   * Бейдж в правом нижнем углу компонента.
   *
   * Принимает алиасы, конструктор иконки или конфигурацию.
   */
  badge?:
    | "online"
    | "online-mobile"
    | ImageBaseBadgeProps["Icon"]
    | ImageBaseBadgeProps;
  /**
   * Задаёт градиент для фона.
   *
   * Если передано число, то оно будет сконвертировано в строчное представление цвета по следующей схеме:
   *
   * 1: 'red'
   * 2: 'orange'
   * 3: 'yellow'
   * 4: 'green'
   * 5: 'l-blue'
   * 6: 'violet'
   *
   * > Если необходимо задать свой градиент, то используйте значение `"custom"` и определите цвет градиента либо через
   * > свой класс в `className`, либо через `style={{ backgroundImage: "..." }}`.
   */
  gradientColor?:
    | InitialsAvatarNumberGradients
    | InitialsAvatarTextGradients
    | "custom";
}

/**
 * @see https://vkcom.github.io/VKUI/#/Avatar
 */
export const Avatar = ({
  size = AVATAR_DEFAULT_SIZE,
  className,
  badge: badgeProp,
  gradientColor,
  children,
  FallbackIcon = Icon28Users,
  ...restProps
}: AvatarProps) => {
  const gradientName =
    typeof gradientColor === "number"
      ? COLORS_NUMBER_TO_TEXT_MAP[gradientColor]
      : gradientColor;
  const isGradientNotCustom = gradientName && gradientName !== "custom";

  let badge: ImageBaseProps["badge"] | undefined = undefined;
  switch (badgeProp) {
    case undefined:
      break;
    case "online":
      badge = BADGE_ONLINE;
      break;
    case "online-mobile":
      badge = BADGE_ONLINE_MOBILE;
      break;
    default:
      badge = {
        ...(typeof badgeProp === "function" ? { Icon: badgeProp } : badgeProp),
        className: classNamesString(
          styles["Avatar__badge"],
          size < 96 && styles["Avatar__badge--shifted"]
        ),
      };
  }

  return (
    <ImageBase
      {...restProps}
      size={size}
      badge={badge}
      className={classNamesString(
        styles["Avatar"],
        gradientName && styles[`Avatar--has-gradient`],
        isGradientNotCustom && styles[`Avatar--gradient-${gradientName}`],
        className
      )}
      FallbackIcon={FallbackIcon}
    >
      {children && (
        <div
          className={styles["Avatar__content"]}
          style={{
            fontSize: getInitialsFontSize(size),
          }}
        >
          {children}
        </div>
      )}
    </ImageBase>
  );
};
