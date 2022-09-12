import * as React from "react";
import { HasComponent } from "../../types";
import { classNames } from "../../lib/classNames";
import { getPlatformClassName } from "../../helpers/getPlatformClassName";
import { TappableProps, Tappable } from "../Tappable/Tappable";
import { Icon24Chevron } from "@vkontakte/icons";
import { Platform } from "../../lib/platform";
import { usePlatform } from "../../hooks/usePlatform";
import { hasReactNode } from "../../lib/utils";
import { useAdaptivity } from "../../hooks/useAdaptivity";
import { Headline } from "../Typography/Headline/Headline";
import { Subhead } from "../Typography/Subhead/Subhead";
import { getSizeYClassName } from "../../helpers/getSizeYClassName";
import "./SimpleCell.css";

export interface SimpleCellOwnProps extends HasComponent {
  /**
   * Иконка 28 или `<Avatar size={28|32|40|48|72} />`
   */
  before?: React.ReactNode;
  /**
   * Иконка 12 или `<Badge />`. Добавится слева от текста `children`.
   */
  badgeBeforeTitle?: React.ReactNode;
  /**
   * Иконка 12 или `<Badge />`. Добавится справа от текста `children`.
   */
  badgeAfterTitle?: React.ReactNode;
  /**
   * Иконка 12. Добавится слева от текста `subtitle`.
   */
  badgeBeforeSubtitle?: React.ReactNode;
  /**
   * Иконка 12. Добавится справа от текста `subtitle`.
   */
  badgeAfterSubtitle?: React.ReactNode;
  /**
   * Контейнер для текста справа от `children`.
   */
  indicator?: React.ReactNode;
  /**
   * Дополнительная строка текста над `children`.
   */
  subhead?: React.ReactNode;
  /**
   * Дополнительная строка текста под `children`.
   */
  subtitle?: React.ReactNode;
  /**
   * Дополнительная строка текста под `children` и `subtitle`.
   */
  extraSubtitle?: React.ReactNode;
  /**
   * Иконка 24|28 или `<Switch />`. Располагается справа от `indicator`.
   */
  after?: React.ReactNode;
  /**
   * Убирает анимацию нажатия
   */
  disabled?: boolean;
  /**
   * В iOS добавляет chevron справа. Передавать `true`, если предполагается переход при клике по ячейке.
   */
  expandable?: boolean;
  /**
   * Включает многострочный режим для отображения текста
   */
  multiline?: boolean;
}

export interface SimpleCellProps extends SimpleCellOwnProps, TappableProps {}

/**
 * @see https://vkcom.github.io/VKUI/#/SimpleCell
 */
export const SimpleCell = ({
  badgeBeforeTitle,
  badgeAfterTitle,
  badgeBeforeSubtitle,
  badgeAfterSubtitle,
  before,
  indicator,
  children,
  after,
  expandable,
  multiline,
  subhead,
  subtitle,
  extraSubtitle,
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
        "SimpleCell",
        getPlatformClassName("SimpleCell", platform),
        getSizeYClassName("SimpleCell", sizeY),
        expandable && "SimpleCell--exp",
        multiline && "SimpleCell--mult"
      )}
    >
      {before}
      <div vkuiClass="SimpleCell__main">
        {subhead && (
          <Subhead
            Component="span"
            vkuiClass="SimpleCell__text SimpleCell__subhead"
          >
            {subhead}
          </Subhead>
        )}
        <div vkuiClass="SimpleCell__content">
          {badgeBeforeTitle && (
            <span vkuiClass="SimpleCell__badge">{badgeBeforeTitle}</span>
          )}
          <Headline
            Component="span"
            vkuiClass="SimpleCell__children"
            weight="3"
          >
            {children}
          </Headline>
          {hasReactNode(badgeAfterTitle) && (
            <span vkuiClass="SimpleCell__badge">{badgeAfterTitle}</span>
          )}
        </div>
        {subtitle && (
          <div vkuiClass="SimpleCell__content">
            {badgeBeforeSubtitle && (
              <span vkuiClass="SimpleCell__badge">{badgeBeforeSubtitle}</span>
            )}
            <span vkuiClass="SimpleCell__typography SimpleCell__text SimpleCell__subtitle">
              {subtitle}
            </span>
            {badgeAfterSubtitle && (
              <span vkuiClass="SimpleCell__badge">{badgeAfterSubtitle}</span>
            )}
          </div>
        )}
        {extraSubtitle && (
          <span vkuiClass="SimpleCell__typography SimpleCell__text SimpleCell__extraSubtitle">
            {extraSubtitle}
          </span>
        )}
      </div>
      {hasReactNode(indicator) && (
        <Headline Component="span" weight="3" vkuiClass="SimpleCell__indicator">
          {indicator}
        </Headline>
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
