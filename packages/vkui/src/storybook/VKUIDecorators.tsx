import React from 'react';
import { DecoratorFunction } from '@storybook/csf/dist/story';
import { ReactFramework } from '@storybook/react';
import { AdaptivityProvider } from '../components/AdaptivityProvider/AdaptivityProvider';
import { AppRoot } from '../components/AppRoot/AppRoot';
import { ConfigProvider } from '../components/ConfigProvider/ConfigProvider';
import { SplitLayout } from '../components/SplitLayout/SplitLayout';
import { SplitCol } from '../components/SplitCol/SplitCol';
import { PanelHeader } from '../components/PanelHeader/PanelHeader';
import { usePlatform } from '../hooks/usePlatform';
import { Platform } from '../lib/platform';
import { View } from '../components/View/View';
import { Panel } from '../components/Panel/Panel';

const CenteredStyle: React.CSSProperties = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  flexDirection: 'column',
};

export const withVKUIWrapper: DecoratorFunction<ReactFramework> = (Component, context) => {
  const { platform, appearance, hasPointer = false, webviewType } = context.globals;
  const { centered } = context.parameters;

  return (
    <ConfigProvider platform={platform} appearance={appearance} webviewType={webviewType}>
      <AdaptivityProvider hasPointer={hasPointer}>
        <AppRoot style={centered ? CenteredStyle : undefined}>
          <Component />
        </AppRoot>
      </AdaptivityProvider>
    </ConfigProvider>
  );
};

const SimpleLayout = ({ children }: { children: React.ReactNode }) => {
  const platform = usePlatform();
  const isVKCOM = platform === Platform.VKCOM;

  return (
    <SplitLayout header={!isVKCOM && <PanelHeader separator={false} />}>
      <SplitCol autoSpaced={!isVKCOM}>{children}</SplitCol>
    </SplitLayout>
  );
};

export const withVKUILayout: DecoratorFunction<ReactFramework> = (Component) => {
  return (
    <SimpleLayout>
      <Component />
    </SimpleLayout>
  );
};

const SimplePanel = ({ children }: { children: React.ReactNode }) => {
  return (
    <View activePanel="single-panel">
      <Panel id="single-panel">{children}</Panel>
    </View>
  );
};

export const withSinglePanel: DecoratorFunction<ReactFramework> = (Component, context) => {
  const { title } = context;
  const panelHeader = title.split('/').pop();
  return (
    <SimplePanel>
      {panelHeader && <PanelHeader>{panelHeader}</PanelHeader>}
      <Component />
    </SimplePanel>
  );
};
