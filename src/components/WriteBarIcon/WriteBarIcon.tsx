import * as React from "react";
import {
  Icon24Send,
  Icon28AddCircleOutline,
  Icon28AttachOutline,
  Icon28CheckCircleOutline,
  Icon48WritebarDone,
  Icon48WritebarSend,
} from "@vkontakte/icons";
import { usePlatform } from "../../hooks/usePlatform";
import { classNames } from "../../lib/classNames";
import { IOS, Platform } from "../../lib/platform";
import { Counter } from "../Counter/Counter";
import { Tappable } from "../Tappable/Tappable";
import { warnOnce } from "../../lib/warnOnce";
import { hasReactNode } from "../../lib/utils";
import "./WriteBarIcon.css";

export interface WriteBarIconProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /**
   * Предустановленные типы кнопок в WriteBar для отрисовки иконки в зависимости от платформы.
   * Если передать валидное значение для этого свойства, `children` игнорируется.
   *
   * - `attach` – иконка прикрепления.
   * - `send` – иконка отправки.
   * - `done` – иконка отправки в режиме редактирования.
   */
  mode?: "attach" | "send" | "done";
  /**
   * Значение счётчика для кнопки. Например, для количества прикреплённых файлов.
   */
  count?: number;
}

const warn = warnOnce("WriteBarIcon");
const IS_DEV = process.env.NODE_ENV === "development";

/**
 * @see https://vkcom.github.io/VKUI/#/WriteBarIcon
 */
export const WriteBarIcon = ({
  mode,
  children,
  count,
  ...restProps
}: WriteBarIconProps) => {
  const platform = usePlatform();

  let icon: React.ReactNode;
  let ariaLabel: string | undefined = undefined;

  switch (mode) {
    case "attach":
      icon =
        platform === IOS ? (
          <Icon28AddCircleOutline aria-hidden />
        ) : (
          <Icon28AttachOutline aria-hidden />
        );
      ariaLabel = "Прикрепить файл";
      break;

    case "send":
      icon =
        platform === IOS ? (
          <Icon48WritebarSend aria-hidden />
        ) : (
          <Icon24Send aria-hidden />
        );
      ariaLabel = "Отправить";
      break;

    case "done":
      icon =
        platform === IOS ? (
          <Icon48WritebarDone aria-hidden />
        ) : (
          <Icon28CheckCircleOutline aria-hidden />
        );
      ariaLabel = "Готово";
      break;

    default:
      break;
  }

  if (IS_DEV && !restProps["aria-label"] && !ariaLabel) {
    warn(
      "a11y: У WriteBarIcon нет aria-label. Кнопка будет недоступной для части пользователей.",
      "error"
    );
  }

  return (
    <Tappable
      aria-label={ariaLabel}
      {...restProps}
      Component="button"
      hasHover={false}
      activeMode="WriteBarIcon__active"
      vkuiClass={classNames(
        "WriteBarIcon",
        platform === Platform.IOS && "WriteBarIcon--ios",
        !!mode && `WriteBarIcon--${mode}`
      )}
    >
      <span vkuiClass="WriteBarIcon__in">
        {icon || children}
        {hasReactNode(count) && (
          <Counter vkuiClass="WriteBarIcon__counter" size="s">
            {count}
          </Counter>
        )}
      </span>
    </Tappable>
  );
};
