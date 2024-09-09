import { ConfigProvider } from '@vkontakte/vkui';
import React from 'react';
import '@vkontakte/vkui/dist/vkui.css';

const App = () => {
  return (
    <React.Fragment>
      <ConfigProvider webviewType={WebviewType.INTERNAL} platform="ios">
        <App />
      </ConfigProvider>
      <ConfigProvider platform="ios" webviewType={WebviewType.VKAPPS}>
        <App />
      </ConfigProvider>
      <ConfigProvider isWebView webviewType="internal">
        <App />
      </ConfigProvider>
      <ConfigProvider webviewType="vkapps" boolValue>
        <App />
      </ConfigProvider>
      <ConfigProvider webviewType={webviewType} boolValue>
        <App />
      </ConfigProvider>
      <ConfigProvider webviewType={'internal' as WebviewType} boolValue>
        <App />
      </ConfigProvider>
      <ConfigProvider webviewType={'vkapps' as WebviewType} boolValue>
        <App />
      </ConfigProvider>
      <ConfigProvider {...configProviderProps}>
        <App />
      </ConfigProvider>
      <ConfigProvider platform="someAnotherPlatform">
        <App />
      </ConfigProvider>
    </React.Fragment>
  );
};
