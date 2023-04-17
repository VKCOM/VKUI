import * as React from 'react';
import { AppRoot, type AppRootProps } from '../../components/AppRoot/AppRoot';
import { Group } from '../../components/Group/Group';
import { Panel } from '../../components/Panel/Panel';
import { View } from '../../components/View/View';

export type AppWrapperProps = AppRootProps;

export const AppDefaultWrapper = ({ children, ...restProps }: AppWrapperProps) => (
  <AppRoot mode="embedded" {...restProps}>
    <View activePanel="panel">
      <Panel id="panel">
        <Group>{children}</Group>
      </Panel>
    </View>
  </AppRoot>
);
