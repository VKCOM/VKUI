import React, { FunctionComponent, HTMLAttributes, ReactNode } from 'react';
import getClassName from '../../helpers/getClassName';
import classNames from '../../lib/classNames';
import { HasRootRef } from '../../types/props';
import usePlatform from '../../hooks/usePlatform';

export interface GroupProps extends HasRootRef<HTMLDivElement>, HTMLAttributes<HTMLDivElement> {
  header?: ReactNode;
  description?: ReactNode;
}

const Group: FunctionComponent<GroupProps> = (props: GroupProps) => {
  const { header, description, className, children, getRootRef, ...restProps } = props;
  const platform = usePlatform();
  const baseClassNames = getClassName('Group', platform);

  return (
    <div {...restProps} ref={getRootRef} className={classNames(baseClassNames, className)}>
      {header}
      {children && <div className="Group__content">{children}</div>}
      {description && <div className="Group__description">{description}</div>}
    </div>
  );
};

export default Group;
