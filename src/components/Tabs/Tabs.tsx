import React, { FunctionComponent, HTMLAttributes, createContext } from 'react';
import { getClassName } from '../../helpers/getClassName';
import { classNames } from '../../lib/classNames';
import { HasRootRef } from '../../types';
import { usePlatform } from '../../hooks/usePlatform';
import { IOS } from '../../lib/platform';
import { withAdaptivity, AdaptivityProps } from '../../hoc/withAdaptivity';

export interface TabsProps extends HTMLAttributes<HTMLDivElement>, HasRootRef<HTMLDivElement>, AdaptivityProps {
  mode?: 'default' | 'buttons' | 'segmented';
}

export const TabsModeContext = createContext<TabsProps['mode']>('default');

const Tabs: FunctionComponent<TabsProps> = ({
  className,
  children,
  mode,
  getRootRef,
  sizeX,
  ...restProps
}: TabsProps) => {
  const platform = usePlatform();

  if (platform !== IOS && mode === 'segmented') {
    mode = 'default';
  }

  return (
    <div
      {...restProps}
      ref={getRootRef}
      className={classNames(getClassName('Tabs', platform), `Tabs--${mode}`, `Tabs--sizeX-${sizeX}`, className)}
    >
      <div className="Tabs__in">
        <TabsModeContext.Provider value={mode}>
          {children}
        </TabsModeContext.Provider>
      </div>
    </div>
  );
};

Tabs.defaultProps = {
  mode: 'default',
};

export default withAdaptivity(Tabs, { sizeX: true });
