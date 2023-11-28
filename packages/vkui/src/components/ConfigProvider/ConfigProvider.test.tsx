import * as React from 'react';
import { render } from '@testing-library/react';
import { baselineComponent } from '../../testing/utils';
import { ConfigProvider } from './ConfigProvider';
import { ConfigProviderContext, ConfigProviderContextInterface } from './ConfigProviderContext';

describe('ConfigProvider', () => {
  baselineComponent<any>(ConfigProvider, { forward: false, a11y: false, getRootRef: false });
  it('provides config context', () => {
    const config = {
      appearance: 'light',
      hasCustomPanelHeaderAfter: false,
      transitionMotionEnabled: false,
    } as const;
    const ConfigUser = () => {
      expect(React.useContext(ConfigProviderContext)).toEqual({
        platform: 'android',
        isWebView: false,
        locale: 'ru',
        appearance: 'light',
        hasCustomPanelHeaderAfter: false,
        customPanelHeaderAfterMinWidth: 90,
        transitionMotionEnabled: false,
      });
      return null;
    };
    render(
      <ConfigProvider {...config}>
        <ConfigUser />
      </ConfigProvider>,
    );
  });
  describe('inherits properties from parent ConfigProvider context', () => {
    let config: ConfigProviderContextInterface | undefined;
    const ReadConfig = () => {
      config = React.useContext(ConfigProviderContext);
      return null;
    };

    const defaultConfig: ConfigProviderContextInterface = {
      platform: 'vkcom',
      appearance: 'dark',
      hasCustomPanelHeaderAfter: true,
      customPanelHeaderAfterMinWidth: 90,
      transitionMotionEnabled: false,
      isWebView: true,
      locale: 'en',
    };
    it.each([
      ['platform', 'android'],
      ['hasCustomPanelHeaderAfter', false],
      ['customPanelHeaderAfterMinWidth', 100],
      ['transitionMotionEnabled', true],
      ['isWebView', false],
      ['platform', 'light'],
      ['locale', 'ru'],
    ])('%s => %s', (prop, value) => {
      const newConfig = { [prop]: value };
      render(
        <ConfigProvider {...defaultConfig}>
          <ConfigProvider {...newConfig}>
            <ReadConfig />
          </ConfigProvider>
        </ConfigProvider>,
      );

      expect(config).toEqual(expect.objectContaining({ ...defaultConfig, [prop]: value }));
    });
  });
});
