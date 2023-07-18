import React from 'react';
import { Decorator } from '@storybook/react';
import { AdaptivityProvider } from '../components/AdaptivityProvider/AdaptivityProvider';
import { AppRoot } from '../components/AppRoot/AppRoot';
import { ConfigProvider } from '../components/ConfigProvider/ConfigProvider';
import { Panel } from '../components/Panel/Panel';
import { PanelHeader } from '../components/PanelHeader/PanelHeader';
import { SplitCol } from '../components/SplitCol/SplitCol';
import { SplitLayout } from '../components/SplitLayout/SplitLayout';
import { View } from '../components/View/View';
import { usePlatform } from '../hooks/usePlatform';
import { Platform } from '../lib/platform';

const CenteredStyle: React.CSSProperties = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  flexDirection: 'column',
};

export const withVKUIWrapper: Decorator = (Component, context) => {
  const { platform, appearance, hasPointer = false, hasCustomPanelHeaderAfter } = context.globals;
  const { centered } = context.parameters;

  return (
    <ConfigProvider
      platform={platform}
      appearance={appearance}
      hasCustomPanelHeaderAfter={hasCustomPanelHeaderAfter}
    >
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

export const withVKUILayout: Decorator = (Component) => {
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

export const withSinglePanel: Decorator = (Component, context) => {
  const { title } = context;
  const panelHeader = title.split('/').pop();
  return (
    <SimplePanel>
      {panelHeader && <PanelHeader>{panelHeader}</PanelHeader>}
      <Component />
    </SimplePanel>
  );
};
