import React, { FunctionComponent, HTMLAttributes } from 'react';
import getClassName from '../../helpers/getClassName';
import classNames from '../../lib/classNames';
import { HasRootRef } from '../../types';
import usePlatform from '../../hooks/usePlatform';

export interface TabsProps extends HTMLAttributes<HTMLDivElement>, HasRootRef<HTMLDivElement> {
  mode?: 'default' | 'buttons' | 'segmented';
}

const Tabs: FunctionComponent<TabsProps> = ({
  className,
  children,
  style,
  mode,
  getRootRef,
  ...restProps
}: TabsProps) => {
  const platform = usePlatform();

  return (
    <div
      {...restProps}
      ref={getRootRef}
      className={classNames(getClassName('Tabs', platform), `Tabs--${mode}`, className)}
      style={style}
    >
      <div className="Tabs__in">
        {children}
      </div>
    </div>
  );
};

Tabs.defaultProps = {
  mode: 'default',
};

export default Tabs;
