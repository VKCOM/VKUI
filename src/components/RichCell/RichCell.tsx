import * as React from "react";
import { classNames } from "../../lib/classNames";
import { TappableProps, Tappable } from "../Tappable/Tappable";
import { Subhead } from "../Typography/Subhead/Subhead";
import { withAdaptivity } from "../../hoc/withAdaptivity";
import "./RichCell.css";

export interface RichCellProps extends TappableProps {
  /**
   * Контейнер для текста над `children`.
   */
  subhead?: React.ReactNode;
  /**
   * Контейнер для текста под `children`.
   */
  text?: React.ReactNode;
  /**
   * Контейнер для текста под `text`.
   */
  caption?: React.ReactNode;
  /**
   * Контейнер для контента под `caption`. Например `<UsersStack size="s" />`.
   */
  bottom?: React.ReactNode;
  /**
   * Кнопки-действия. Принимает [`Button`](https://vkcom.github.io/VKUI/#/Button) с параметрами:
   *
   * - `mode="primary" size="s"`
   * - `mode="secondary" size="s"`
   *
   * Для набора кнопок используйте [`ButtonGroup`](https://vkcom.github.io/VKUI/#/ButtonGroup) с параметрами:
   *
   * - `mode="horizontal" gap="s" stretched`
   */
  actions?: React.ReactNode;
  /**
   * `<Avatar size={40|48|72} />`.
   */
  before?: React.ReactNode;
  /**
   * Иконка 24 или текст.
   */
  after?: React.ReactNode;
  /**
   * Текст под `after`.
   */
  afterCaption?: React.ReactNode;
  /**
   * Убирает анимацию нажатия.
   */
  disabled?: boolean;
  /**
   * Включает многострочный режим для `subhead`, `children`, `text` и `caption`.
   */
  multiline?: boolean;
}

const RichCellComponent = ({
  subhead,
  children,
  text,
  caption,
  before,
  after,
  afterCaption,
  bottom,
  actions,
  multiline,
  sizeY,
  ...restProps
}: RichCellProps) => {
  return (
    <Tappable
      {...restProps}
      vkuiClass={classNames(
        "RichCell",
        !multiline && "RichCell--text-ellipsis",
        `RichCell--sizeY-${sizeY}`
      )}
    >
      {before && <div vkuiClass="RichCell__before">{before}</div>}
      <div vkuiClass="RichCell__in">
        <div vkuiClass="RichCell__content">
          <div vkuiClass="RichCell__content-before">
            {subhead && (
              <Subhead Component="div" vkuiClass="RichCell__subhead">
                {subhead}
              </Subhead>
            )}
            <div vkuiClass="RichCell__children">{children}</div>
            {text && <div vkuiClass="RichCell__text">{text}</div>}
            {caption && (
              <Subhead Component="div" vkuiClass="RichCell__caption">
                {caption}
              </Subhead>
            )}
          </div>
          {(after || afterCaption) && (
            <div vkuiClass="RichCell__content-after">
              {after && <div vkuiClass="RichCell__after-children">{after}</div>}
              {afterCaption && (
                <div vkuiClass="RichCell__after-caption">{afterCaption}</div>
              )}
            </div>
          )}
        </div>
        {bottom && <div vkuiClass="RichCell__bottom">{bottom}</div>}
        {actions && <div vkuiClass="RichCell__actions">{actions}</div>}
      </div>
    </Tappable>
  );
};

/**
 * @see https://vkcom.github.io/VKUI/#/RichCell
 */
export const RichCell = withAdaptivity(RichCellComponent, { sizeY: true });

RichCell.displayName = "RichCell";
