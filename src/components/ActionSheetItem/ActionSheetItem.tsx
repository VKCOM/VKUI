import React, { HTMLAttributes } from 'react';
import classNames from '../../lib/classNames';
import getClassName from '../../helpers/getClassName';
import Tappable from '../Tappable/Tappable';
import usePlatform from '../../hooks/usePlatform';

export interface ActionSheetItemProps extends HTMLAttributes<HTMLElement> {
  mode?: 'default' | 'destructive' | 'cancel';
  before?: React.ReactNode;
  // meta?: React.ReactNode,
  // subtitle?: React.ReactNode,
  autoclose?: boolean;
  href?: string;
  target?: string;
  /**
   * @ignore
   */
  isLast?: boolean;
}

const ActionSheetItem: React.FunctionComponent<ActionSheetItemProps> = ({
  className,
  children,
  autoclose,
  mode,
  // meta,
  // subtitle,
  before,
  isLast,
  ...restProps
}: ActionSheetItemProps) => {
  const platform = usePlatform();

  return (
    <Tappable
      {...restProps}
      className={
        classNames(
          getClassName('ActionSheetItem', platform),
          className,
          `ActionSheetItem--${mode}`,
          { ['ActionSheetItem--last']: isLast },
        )
      }
      Component={restProps.href ? 'a' : 'div'}
    >
      {before && <div className="ActionSheetItem__before">{before}</div>}
      <div className="ActionSheetItem__container">
        <div className="ActionSheetItem__content">
          <div className="ActionSheetItem__children">{children}</div>
          {/* {meta && <div className="ActionSheetItem__meta">{meta}</div>} */}
          {/* {subtitle && <div className="ActionSheetItem__descr">{subtitle}</div>} */}
        </div>
      </div>
    </Tappable>
  );
};

ActionSheetItem.defaultProps = {
  mode: 'default',
};

export default ActionSheetItem;
