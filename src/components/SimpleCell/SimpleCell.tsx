import * as React from "react";
import { HasComponent } from "../../types";
import { classNames } from "../../lib/classNames";
import { getClassName } from "../../helpers/getClassName";
import { TappableProps, Tappable } from "../Tappable/Tappable";
import { Icon24Chevron } from "@vkontakte/icons";
import { Platform } from "../../lib/platform";
import { usePlatform } from "../../hooks/usePlatform";
import { hasReactNode } from "../../lib/utils";
import { useAdaptivity } from "../../hooks/useAdaptivity";
import { Subhead } from "../Typography/Subhead/Subhead";
import { getSizeYClassName } from "../../helpers/getSizeYClassName";
import "./SimpleCell.css";

export interface SimpleCellOwnProps extends HasComponent {
  /**
   * Иконка 28 или `<Avatar size={28|32|40|48|72} />`
   */
  before?: React.ReactNode;
  /**
   * Иконка 12 или `<Badge />`. Добавится справа от текста `children`.
   */
  badge?: React.ReactNode;
  /**
   * Контейнер для текста справа от `children`.
   */
  indicator?: React.ReactNode;
  /**
   * Иконка 24|28 или `<Switch />`. Располагается справа от `indicator`.
   */
  after?: React.ReactNode;
  /**
   * Контейнер для текста под `children`.
   */
  description?: React.ReactNode;
  /**
   * Убирает анимацию нажатия
   */
  disabled?: boolean;
  /**
   * В iOS добавляет chevron справа. Передавать `true`, если предполагается переход при клике по ячейке.
   */
  expandable?: boolean;
  multiline?: boolean;
}

export interface SimpleCellProps extends SimpleCellOwnProps, TappableProps {}

/**
 * @see https://vkcom.github.io/VKUI/#/SimpleCell
 */
export const SimpleCell = ({
  badge,
  before,
  indicator,
  children,
  after,
  description,
  expandable,
  multiline,
  ...restProps
}: SimpleCellProps) => {
  const platform = usePlatform();
  const hasAfter =
    hasReactNode(after) || (expandable && platform === Platform.IOS);
  const { sizeY } = useAdaptivity();

  return (
    <Tappable
      {...restProps}
      vkuiClass={classNames(
        getClassName("SimpleCell", platform),
        getSizeYClassName("SimpleCell", sizeY),
        expandable && "SimpleCell--exp",
        multiline && "SimpleCell--mult"
      )}
    >
      {before}
      <div vkuiClass="SimpleCell__main">
        <div vkuiClass="SimpleCell__content">
          <span
            vkuiClass={classNames(
              "SimpleCell__typography",
              "SimpleCell__children"
            )}
          >
            {children}
          </span>
          {hasReactNode(badge) && (
            <span vkuiClass="SimpleCell__badge">{badge}</span>
          )}
        </div>
        {description && (
          <Subhead Component="span" vkuiClass="SimpleCell__description">
            {description}
          </Subhead>
        )}
      </div>
      {hasReactNode(indicator) && (
        <span
          vkuiClass={classNames(
            "SimpleCell__typography",
            "SimpleCell__indicator"
          )}
        >
          {indicator}
        </span>
      )}
      {hasAfter && (
        <div vkuiClass="SimpleCell__after">
          {after}
          {expandable && platform === Platform.IOS && <Icon24Chevron />}
        </div>
      )}
    </Tappable>
  );
};
