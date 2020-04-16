import React, { FunctionComponent, HTMLAttributes, ReactNode } from 'react';
import getClassName from '../../helpers/getClassName';
import classNames from '../../lib/classNames';
import { HasRootRef } from '../../types';
import usePlatform from '../../hooks/usePlatform';
import Separator from '../Separator/Separator';
import withAdaptivity, { AdaptivityProps } from '../../hoc/withAdaptivity';

export interface GroupProps extends HasRootRef<HTMLDivElement>, HTMLAttributes<HTMLDivElement>, AdaptivityProps {
  header?: ReactNode;
  description?: ReactNode;
  /**
    show - разделитель всегда показывается,
    hide – разделитель всегда спрятан,
    auto – разделитель рисуется автоматически между соседними группами.
   */
  separator?: 'show' | 'hide' | 'auto';
}

let Group: FunctionComponent<GroupProps> = (props: GroupProps) => {
  const { header, description, className, children, separator, getRootRef, sizeX, ...restProps } = props;
  const platform = usePlatform();
  const baseClassNames = getClassName('Group', platform);

  return (
    <section {...restProps} ref={getRootRef} className={classNames(baseClassNames, className)}>
      <div className={classNames('Group__inner', `Group__inner--${sizeX}`)}>
        {header}
        {children}
        {description && <div className="Group__description">{description}</div>}
      </div>
      {separator !== 'hide' &&
        <Separator className={classNames('Group__separator', {
          'Group__separator--force': separator === 'show',
        })} />
      }
    </section>
  );
};

Group.defaultProps = {
  separator: 'auto',
};

Group = withAdaptivity(Group, {
  sizeX: true,
});
export default Group;
