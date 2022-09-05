import * as React from "react";
import { HasComponent } from "../../types";
import { classNames } from "../../lib/classNames";
import { getClassName } from "../../helpers/getClassName";
import { TappableProps, Tappable } from "../Tappable/Tappable";
import { Icon24Chevron } from "@vkontakte/icons";
import { IOS } from "../../lib/platform";
import { usePlatform } from "../../hooks/usePlatform";
import { hasReactNode } from "../../lib/utils";
import { useAdaptivity } from "../../hooks/useAdaptivity";
import { withAdaptivity, SizeType } from "../../hoc/withAdaptivity";
import { Subhead } from "../Typography/Subhead/Subhead";
import { Headline } from "../Typography/Headline/Headline";
import { Footnote } from "../Typography/Footnote/Footnote";
import { Caption } from "../Typography/Caption/Caption";
import "./SimpleCell.css";

export interface SimpleCellOwnProps extends HasComponent {
  /**
   * Иконка 28 или `<Avatar size={28|32|40|48|72} />`
   */
  before?: React.ReactNode;
  /**
   * @deprecated будет удалено в v5.0.0, используйте свойство rightBadge
   * Иконка 12 или `<Badge />`. Добавится справа от текста `children`.
   */
  badge?: React.ReactNode;
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
   * @deprecated будет удалено в v5.0.0, используйте свойство subtitle
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
  /**
   * Включает многострочный режим для отображения текста
   */
  multiline?: boolean;
}

export interface SimpleCellProps extends SimpleCellOwnProps, TappableProps {}

type SubtitleTypographyProps = React.HTMLAttributes<HTMLDivElement> &
  HasComponent;

const SubtitleTypography = (props: SubtitleTypographyProps) => {
  const { sizeY } = useAdaptivity();

  if (sizeY === SizeType.COMPACT) {
    return <Caption level="2" {...props} />;
  }

  return <Footnote {...props} />;
};

const SimpleCellComponent = ({
  badge,
  badgeBeforeTitle,
  badgeAfterTitle = badge,
  badgeBeforeSubtitle,
  badgeAfterSubtitle,
  before,
  indicator,
  children,
  after,
  description,
  expandable,
  multiline,
  sizeY,
  subhead,
  subtitle = description,
  extraSubtitle,
  ...restProps
}: SimpleCellProps) => {
  const platform = usePlatform();
  const hasAfter = hasReactNode(after) || (expandable && platform === IOS);

  return (
    <Tappable
      {...restProps}
      vkuiClass={classNames(
        getClassName("SimpleCell", platform),
        expandable && "SimpleCell--exp",
        multiline && "SimpleCell--mult",
        `SimpleCell--sizeY-${sizeY}`
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
            <SubtitleTypography vkuiClass="SimpleCell__text SimpleCell__subtitle">
              {subtitle}
            </SubtitleTypography>
            {badgeAfterSubtitle && (
              <span vkuiClass="SimpleCell__badge">{badgeAfterSubtitle}</span>
            )}
          </div>
        )}
        {extraSubtitle && (
          <SubtitleTypography vkuiClass="SimpleCell__text SimpleCell__extraSubtitle">
            {extraSubtitle}
          </SubtitleTypography>
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
          {expandable && platform === IOS && <Icon24Chevron />}
        </div>
      )}
    </Tappable>
  );
};

/**
 * @see https://vkcom.github.io/VKUI/#/SimpleCell
 */
export const SimpleCell = withAdaptivity(SimpleCellComponent, { sizeY: true });

SimpleCell.displayName = "SimpleCell";
