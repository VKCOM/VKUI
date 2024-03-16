import * as React from 'react';
import { UPDATE_GLOBALS } from '@storybook/core-events';
import { addons } from '@storybook/preview-api';
import { Decorator } from '@storybook/react';
import { SET_STORYBOOK_THEME } from '../../.storybook/addons/storybook-theme/constants';
import { AdaptivityProvider } from '../components/AdaptivityProvider/AdaptivityProvider';
import { AppRoot } from '../components/AppRoot/AppRoot';
import { ConfigProvider } from '../components/ConfigProvider/ConfigProvider';
import { Panel } from '../components/Panel/Panel';
import { PanelHeader } from '../components/PanelHeader/PanelHeader';
import { SplitCol } from '../components/SplitCol/SplitCol';
import { SplitLayout } from '../components/SplitLayout/SplitLayout';
import { View } from '../components/View/View';
import { usePlatform } from '../hooks/usePlatform';

const CenteredStyle: React.CSSProperties = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  flexDirection: 'column',
};

const channel = addons.getChannel();

export const withVKUIWrapper: Decorator = (Component, context) => {
  const {
    platform,
    appearance,
    hasPointer = false,
    hasCustomPanelHeaderAfter,
    direction,
    writingMode,
  } = context.globals;

  // eslint-disable-next-line no-restricted-properties, react-hooks/rules-of-hooks
  React.useLayoutEffect(() => {
    const updateGlobals = (theme: 'light' | 'dark') => {
      channel.emit(UPDATE_GLOBALS, { globals: { appearance: theme } });
    };
    channel.on(SET_STORYBOOK_THEME, updateGlobals);
    return () => {
      channel.off(SET_STORYBOOK_THEME, updateGlobals);
    };
  }, []);

  const { centered } = context.parameters;

  const style: React.CSSProperties = {
    writingMode,
    ...(centered ? CenteredStyle : {}),
  };

  return (
    <ConfigProvider
      platform={platform}
      appearance={appearance}
      hasCustomPanelHeaderAfter={hasCustomPanelHeaderAfter}
    >
      <AdaptivityProvider hasPointer={hasPointer}>
        <AppRoot style={style} dir={direction}>
          <Component />
        </AppRoot>
      </AdaptivityProvider>
    </ConfigProvider>
  );
};

const SimpleLayout = ({ children }: { children: React.ReactNode }) => {
  const platform = usePlatform();
  const isVKCOM = platform === 'vkcom';

  return (
    <SplitLayout header={!isVKCOM && <PanelHeader delimiter="none" />}>
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
