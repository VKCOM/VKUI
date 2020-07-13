import React, { HTMLAttributes, ReactNode, FC } from 'react';
import classNames from '../../lib/classNames';
import getClassName from '../../helpers/getClassName';
import Tappable from '../Tappable/Tappable';
import Icon24Chevron from '@vkontakte/icons/dist/24/chevron';
import { HasLinkProps, HasRootRef } from '../../types';
import { IOS } from '../../lib/platform';
import usePlatform from '../../hooks/usePlatform';
import { hasReactNode } from '../../lib/utils';

export interface SimpleCellProps extends HTMLAttributes<HTMLElement>, HasRootRef<HTMLElement>, HasLinkProps {
  /**
   * Иконка 28 или `<Avatar size={28|32|40|48|72} />`
   */
  before?: ReactNode;
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
  disabled?: boolean;
  /**
   * В iOS добавляет chevron справа. Передавать `true`, если предполагается кликабельность ячейки.
   */
  expandable?: boolean;
  multiline?: boolean;
}

const SimpleCell: FC<SimpleCellProps> = ({
  before,
  indicator,
  children,
  after,
  description,
  className,
  expandable,
  multiline,
  ...restProps
}) => {
  const platform = usePlatform();
  const hasAfter = hasReactNode(after) || expandable && platform === IOS;

  return (
    <Tappable
      {...restProps}
      Component={restProps.href ? 'a' : 'div'}
      className={
        classNames(
          className,
          getClassName('SimpleCell', platform),
          {
            'SimpleCell--exp': expandable,
            'SimpleCell--mult': multiline,
          },
        )
      }
    >
      {before}
      <div className="SimpleCell__main">
        <div className="SimpleCell__children">{children}</div>
        {description && <div className="SimpleCell__description">{description}</div>}
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
    </Tappable>
  );
};

export default SimpleCell;
