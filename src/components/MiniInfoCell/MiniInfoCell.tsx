import * as React from "react";
import { classNames } from "../../lib/classNames";
import { Paragraph } from "../Typography/Paragraph/Paragraph";
import { Tappable } from "../Tappable/Tappable";
import { hasReactNode } from "../../lib/utils";
import { Icon16Chevron } from "@vkontakte/icons";
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
  mode?: "base" | "accent" | "add" | "more";

  /**
   * Тип отображения текста:
   *
   * - `nowrap` – в одну строку, текст не переносится и обрезается.
   * - `short` – максимально отображается 3 строки, остальное обрезается.
   * - `full` – текст отображается полностью.
   */
  textWrap?: "nowrap" | "short" | "full";

  /**
   * Передавать `true`, если предполагается переход при клике по ячейке.
   */
  expandable?: boolean;
}

/**
 * @see https://vkcom.github.io/VKUI/#/MiniInfoCell
 */
export const MiniInfoCell = ({
  before,
  after,
  children,
  mode = "base",
  textWrap = "nowrap",
  expandable = false,
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
        `MiniInfoCell--${textWrap}`,
        mode !== "base" && `MiniInfoCell--${mode}`
      )}
    >
      <span vkuiClass="MiniInfoCell__before">{before}</span>
      <div vkuiClass="MiniInfoCell__middle">
        <Paragraph
          vkuiClass="MiniInfoCell__content"
          weight={mode === "more" ? "2" : undefined}
        >
          {children}
        </Paragraph>
        {expandable && <Icon16Chevron />}
      </div>
      {hasReactNode(after) && (
        <span vkuiClass="MiniInfoCell__after">{after}</span>
      )}
    </Tappable>
  );
};
