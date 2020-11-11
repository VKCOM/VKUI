import React, { FunctionComponent, HTMLAttributes } from 'react';
import getClassName from '../../helpers/getClassName';
import classNames from '../../lib/classNames';
import { HasRootRef } from '../../types';
import usePlatform from '../../hooks/usePlatform';
import { ANDROID, VKCOM } from '../../lib/platform';
import withAdaptivity, { AdaptivityProps } from '../../hoc/withAdaptivity';

export interface TabsProps extends HTMLAttributes<HTMLDivElement>, HasRootRef<HTMLDivElement>, AdaptivityProps {
  mode?: 'default' | 'buttons' | 'segmented';
}

const Tabs: FunctionComponent<TabsProps> = ({
  className,
  children,
  style,
  mode,
  getRootRef,
  sizeX,
  ...restProps
}: TabsProps) => {
  const platform = usePlatform();

  if ((platform === ANDROID || platform === VKCOM) && mode === 'segmented') {
    mode = 'default';
  }

  return (
    <div
      {...restProps}
      ref={getRootRef}
      className={classNames(getClassName('Tabs', platform), `Tabs--${mode}`, `Tabs--sizeX-${sizeX}`, className)}
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

export default withAdaptivity(Tabs, { sizeX: true });
