import * as React from 'react';
import { getClassName } from '../../helpers/getClassName';
import { classNames } from '../../lib/classNames';
import { HasRootRef } from '../../types';
import { usePlatform } from '../../hooks/usePlatform';
import { IOS } from '../../lib/platform';
import { withAdaptivity, AdaptivityProps } from '../../hoc/withAdaptivity';
import './Tabs.css';

export interface TabsProps extends React.HTMLAttributes<HTMLDivElement>, HasRootRef<HTMLDivElement>, AdaptivityProps {
  mode?: 'default' | 'buttons' | 'segmented';
}

export const TabsModeContext = React.createContext<TabsProps['mode']>('default');

const Tabs: React.FunctionComponent<TabsProps> = ({
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
      vkuiClass={classNames(getClassName('Tabs', platform), `Tabs--${mode}`, `Tabs--sizeX-${sizeX}`)}
    >
      <div vkuiClass="Tabs__in">
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
