import React from 'react';
import classNames from '../../lib/classNames';
import getClassName from '../../helpers/getClassName';
import Tappable from '../Tappable/Tappable';
import usePlatform from '../../hooks/usePlatform';
import { HasChildren, HasClassName, HasStyleObject } from '../../types/props';

export interface ActionSheetItemProps extends HasClassName, HasChildren, HasStyleObject {
  theme?: 'default' | 'destructive' | 'cancel',
  before?: React.ReactNode,
  // meta?: React.ReactNode,
  // subtitle?: React.ReactNode,
  onClick?(): void,
  autoclose?: boolean
}

const ActionSheetItem: React.FunctionComponent<ActionSheetItemProps> = ({
  className,
  children,
  autoclose,
  theme,
  // meta,
  // subtitle,
  before,
  ...restProps
}: ActionSheetItemProps) => {
  const platform = usePlatform();
  return (
    <Tappable
      {...restProps}
      className={
        classNames(getClassName('ActionSheetItem', platform), className, `ActionSheetItem--${theme}`)
      }
      component={theme === 'cancel' ? 'span' : 'div'}
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
  theme: 'default'
};

export default ActionSheetItem;
