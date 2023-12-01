import { ConfigProvider } from '@vkontakte/vkui';
import React from 'react';
import '@vkontakte/vkui/dist/vkui.css';

const App = () => {
  return (
    <React.Fragment>
      <ConfigProvider platform="ios">
        <App />
      </ConfigProvider>
      <ConfigProvider platform="ios" hasCustomPanelHeaderAfter>
        <App />
      </ConfigProvider>
      <ConfigProvider isWebView>
        <App />
      </ConfigProvider>
      <ConfigProvider hasCustomPanelHeaderAfter boolValue>
        <App />
      </ConfigProvider>
      <ConfigProvider webviewType={webviewType} boolValue>
        <App />
      </ConfigProvider>
      <ConfigProvider boolValue>
        <App />
      </ConfigProvider>
      <ConfigProvider hasCustomPanelHeaderAfter boolValue>
        <App />
      </ConfigProvider>
      <ConfigProvider {...configProviderProps}>
        <App />
      </ConfigProvider>
    </React.Fragment>
  );
};
