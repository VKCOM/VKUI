import * as React from "react";
import { classNames } from "../../lib/classNames";
import { Paragraph } from "../Typography/Paragraph/Paragraph";
import { Tappable } from "../Tappable/Tappable";
import { hasReactNode } from "../../lib/utils";
import "./MiniInfoCell.css";

export interface MiniInfoCellProps
  extends React.HTMLAttributes<HTMLDivElement> {
  /**
   * Иконка слева.<br />
   * Рекомендуется использовать иконки размера 20.
   */
  before: React.ReactNode;

  /**
   * Содержимое справа.<br />
   * `<UsersStack size="s" />` или `<Avatar size={24} />`
   */
  after?: React.ReactNode;

  /**
   * Тип ячейки:
   *
   * - `base` – базовая ячейка с серой иконкой и серым текстом.<br />
   * В компонент можно передать `Link`, чтобы визуально сделать часть текста ссылкой.
   * - `add` – тип ячейки, который показывает, что взаимодействие с ней должно вызывать действие добавления чего-то.
   * - `more` – взаимодействие с такой ячейкой должно открывать какую-то подробную информацию.
   */
  mode?: "base" | "add" | "more";

  /**
   * Тип отображения текста:
   *
   * - `nowrap` – в одну строку, текст не переносится и обрезается.
   * - `short` – максимально отображается 3 строки, остальное обрезается.
   * - `full` – текст отображается полностью.
   */
  textWrap?: "nowrap" | "short" | "full";

  /**
   * Стиль текста:
   *
   * - `primary` – используйте этот стиль, если хотите выделить информацию в общем списке.<br />Пример использования: подробная информация на странице сообщества
   * - `secondary` – стиль по-умолчанию.
   */
  textLevel?: "primary" | "secondary";
}

/**
 * @see https://vkcom.github.io/VKUI/#/MiniInfoCell
 */
export const MiniInfoCell = ({
  before,
  after,
  mode = "base",
  textWrap = "nowrap",
  textLevel = "secondary",
  children,
  ...restProps
}: MiniInfoCellProps) => {
  const isClickable = !!restProps.onClick;

  return (
    <Tappable
      Component="div"
      disabled={!isClickable}
      role={isClickable ? "button" : undefined}
      {...restProps}
      vkuiClass={classNames(
        "MiniInfoCell",
        mode !== "base" && `MiniInfoCell--md-${mode}`,
        textWrap !== "nowrap" && `MiniInfoCell--wr-${textWrap}`,
        `MiniInfoCell--lvl-${textLevel}`
      )}
    >
      <span vkuiClass="MiniInfoCell__icon">{before}</span>
      <Paragraph
        vkuiClass="MiniInfoCell__content"
        weight={mode === "more" ? "2" : undefined}
      >
        {children}
      </Paragraph>
      {hasReactNode(after) && (
        <span vkuiClass="MiniInfoCell__after">{after}</span>
      )}
    </Tappable>
  );
};
