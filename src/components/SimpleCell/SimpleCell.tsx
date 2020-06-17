import React, { HTMLAttributes, ReactNode, FC } from 'react';
import classNames from '../../lib/classNames';
import getClassName from '../../helpers/getClassName';
import Tappable from '../Tappable/Tappable';
import Icon24Chevron from '@vkontakte/icons/dist/24/chevron';
import { HasLinkProps, HasRootRef } from '../../types';
import { IOS } from '../../lib/platform';
import usePlatform from '../../hooks/usePlatform';

export interface SimpleCellProps extends HTMLAttributes<HTMLElement>, HasRootRef<HTMLElement>, HasLinkProps {
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
  disabled?: boolean;
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
  const hasAfter = after || expandable && platform === IOS;

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

export default SimpleCell;
