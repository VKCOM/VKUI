import React, { HTMLAttributes, ReactNode, FC, ElementType } from 'react';
import classNames from '../../lib/classNames';
import getClassName from '../../helpers/getClassName';
import Tappable from '../Tappable/Tappable';
import Icon24Chevron from '@vkontakte/icons/dist/24/chevron';
import { HasRootRef } from '../../types';
import { IOS } from '../../lib/platform';
import usePlatform from '../../hooks/usePlatform';

export interface SimpleCellOwnProps {
  /**
   * Иконка 28 или `<Avatar size={28|32|40|48|72} />`
   */
  before?: ReactNode;
  indicator?: ReactNode;
  /**
   * Иконка 24|28 или `<Switch />`
   */
  after?: ReactNode;
  description?: ReactNode;
  href?: string;
  target?: string;
  disabled?: boolean;
  expandable?: boolean;
  multiline?: boolean;
  Component?: ElementType;
}

export interface SimpleCellProps extends SimpleCellOwnProps, HTMLAttributes<HTMLElement>, HasRootRef<HTMLElement> {}

const SimpleCell: FC<SimpleCellProps> = ({
  before,
  indicator,
  children,
  after,
  description,
  className,
  expandable,
  multiline,
  Component,
  ...restProps
}) => {
  const platform = usePlatform();
  const hasAfter = after || expandable && platform === IOS;

  return (
    <Tappable
      {...restProps}
      Component={restProps.href ? 'a' : Component}
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
      {indicator &&
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

SimpleCell.defaultProps = {
  Component: 'div',
};

export default SimpleCell;
