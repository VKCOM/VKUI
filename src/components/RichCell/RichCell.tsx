import * as React from "react";
import { classNames } from "../../lib/classNames";
import { usePlatform } from "../../hooks/usePlatform";
import { getClassName } from "../../helpers/getClassName";
import { TappableProps, Tappable } from "../Tappable/Tappable";
import { hasReactNode } from "../../lib/utils";
import { Paragraph } from "../Typography/Paragraph/Paragraph";
import { Subhead } from "../Typography/Subhead/Subhead";
import { withAdaptivity } from "../../hoc/withAdaptivity";
import "./RichCell.css";

export interface RichCellProps extends TappableProps {
  /**
   * Контейнер для текста под `children`.
   */
  text?: React.ReactNode;
  /**
   * Контейнер для текста под `text`.
   */
  caption?: React.ReactNode;
  /**
   * Контейнер для контента под `caption`. Например `<UsersStack size="s" />`
   */
  bottom?: React.ReactNode;
  /**
   * Кнопки-действия.
   *
   * Рекомендуется использовать [Button](#/Button) с параметрами:
   *
   * - `mode="primary" size="s"`
   * - `mode="secondary" size="s"`
   *
   * Для набора кнопок следует использовать [ButtonGroup](#/ButtonGroup) с параметрами:
   *
   * - `mode="horizontal" gap="s" stretched`
   */
  actions?: React.ReactNode;
  /**
   * `<Avatar size={48|72} />`
   */
  before?: React.ReactNode;
  /**
   * Иконка 28 или текст
   */
  after?: React.ReactNode;
  /**
   * Убирает анимацию нажатия
   */
  disabled?: boolean;
  multiline?: boolean;
}

const RichCellComponent: React.FC<RichCellProps> = ({
  children,
  text,
  caption,
  before,
  after,
  bottom,
  actions,
  multiline,
  sizeY,
  ...restProps
}) => {
  const platform = usePlatform();

  return (
    <Tappable
      {...restProps}
      // eslint-disable-next-line vkui/no-object-expression-in-arguments
      vkuiClass={classNames(
        getClassName("RichCell", platform),
        {
          "RichCell--mult": multiline,
        },
        `RichCell--sizeY-${sizeY}`
      )}
    >
      {before}
      <div vkuiClass="RichCell__in">
        {/* Этот after будет скрыт из верстки. Он нужен для CSS */}
        {after}
        <Paragraph weight="2" vkuiClass="RichCell__content">
          <div vkuiClass="RichCell__children">{children}</div>
          {hasReactNode(after) && (
            <div vkuiClass="RichCell__after">{after}</div>
          )}
        </Paragraph>
        {hasReactNode(text) && (
          <Paragraph vkuiClass="RichCell__text">{text}</Paragraph>
        )}
        {hasReactNode(caption) && (
          <Subhead Component="span" vkuiClass="RichCell__caption">
            {caption}
          </Subhead>
        )}
        {hasReactNode(bottom) && (
          <div vkuiClass="RichCell__bottom">{bottom}</div>
        )}
        {hasReactNode(actions) && (
          <div vkuiClass="RichCell__actions">{actions}</div>
        )}
      </div>
    </Tappable>
  );
};

/**
 * @see https://vkcom.github.io/VKUI/#/RichCell
 */
export const RichCell = withAdaptivity(RichCellComponent, { sizeY: true });

RichCell.displayName = "RichCell";
