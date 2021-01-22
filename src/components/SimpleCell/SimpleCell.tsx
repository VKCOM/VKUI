import React, { ReactNode, FC, ElementType } from 'react';
import classNames from '../../lib/classNames';
import getClassName from '../../helpers/getClassName';
import Tappable, { TappableProps } from '../Tappable/Tappable';
import { Icon24Chevron } from '@vkontakte/icons';
import { IOS } from '../../lib/platform';
import usePlatform from '../../hooks/usePlatform';
import { hasReactNode } from '../../lib/utils';
import withAdaptivity from '../../hoc/withAdaptivity';
import Title from '../Typography/Title/Title';
import Caption from '../Typography/Caption/Caption';

export interface SimpleCellOwnProps {
  /**
   * Иконка 28 или `<Avatar size={28|32|40|48|72} />`
   */
  before?: ReactNode;
  /**
   * Иконка 12 или `<Badge />`. Добавится справа от текста `children`.
   */
  badge?: ReactNode;
  /**
   * Контейнер для текста справа от `children`.
   */
  indicator?: ReactNode;
  /**
   * Иконка 24|28 или `<Switch />`. Располагается справа от `indicator`.
   */
  after?: ReactNode;
  /**
   * Контейнер для текста под `children`.
   */
  description?: ReactNode;
  /**
   * Убирает анимацию нажатия
   */
  disabled?: boolean;
  /**
   * В iOS добавляет chevron справа. Передавать `true`, если предполагается переход при клике по ячейке.
   */
  expandable?: boolean;
  multiline?: boolean;
  Component?: ElementType;
}

export interface SimpleCellProps extends SimpleCellOwnProps, TappableProps {}

const SimpleCell: FC<SimpleCellProps> = ({
  badge,
  before,
  indicator,
  children,
  after,
  description,
  className,
  expandable,
  multiline,
  Component,
  onClick,
  sizeY,
  ...restProps
}) => {
  const platform = usePlatform();
  const hasAfter = hasReactNode(after) || expandable && platform === IOS;
  const RootComponent = restProps.disabled ? Component : Tappable;

  const props: SimpleCellProps = restProps;

  if (!restProps.disabled) {
    props.Component = restProps.href ? 'a' : Component;
    props.onClick = onClick;
  }

  return (
    <RootComponent
      {...props}
      className={
        classNames(
          className,
          getClassName('SimpleCell', platform),
          {
            'SimpleCell--exp': expandable,
            'SimpleCell--mult': multiline,
          },
          `SimpleCell--sizeY-${sizeY}`,
        )
      }
    >
      {before}
      <div className="SimpleCell__main">
        <div className="SimpleCell__content">
          <Title level="3" weight="regular" className="SimpleCell__children">{children}</Title>
          {hasReactNode(badge) &&
            <span className="SimpleCell__badge">
              {badge}
            </span>
          }
        </div>
        {description && <Caption weight="regular" level="1" className="SimpleCell__description">{description}</Caption>}
      </div>
      {hasReactNode(indicator) &&
        <div className="SimpleCell__indicator">
          {indicator}
        </div>
      }
      {hasAfter &&
        <div className="SimpleCell__after">
          {after}
          {expandable && platform === IOS && <Icon24Chevron />}
        </div>
      }
    </RootComponent>
  );
};

SimpleCell.defaultProps = {
  Component: 'div',
};

export default withAdaptivity(SimpleCell, { sizeY: true });
