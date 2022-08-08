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

type SimpleCellTypographyProps = React.HTMLAttributes<HTMLDivElement> &
  HasComponent;

const SimpleCellTypography = (props: SimpleCellTypographyProps) => {
  const { sizeY } = useAdaptivity();

  if (sizeY === SizeType.COMPACT) {
    return <Caption level="2" {...props} />;
  }

  return <Footnote {...props} />;
};

const SimpleCellComponent = ({
  badge,
  before,
  indicator,
  children,
  after,
  description,
  expandable,
  multiline,
  sizeY,
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
        <div vkuiClass="SimpleCell__content">
          <Headline
            Component="span"
            vkuiClass="SimpleCell__children"
            weight="3"
          >
            {children}
          </Headline>
          {hasReactNode(badge) && (
            <span vkuiClass="SimpleCell__badge">{badge}</span>
          )}
        </div>
        {description && (
          <div vkuiClass="SimpleCell__content">
            <SimpleCellTypography vkuiClass="SimpleCell__text SimpleCell__subtitle">
              {description}
            </SimpleCellTypography>
          </div>
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
