import React, { useContext } from 'react';
import { render } from '@testing-library/react';
import { Appearance } from '../../helpers/appearance';
import { Platform } from '../../lib/platform';
import { baselineComponent } from '../../testing/utils';
import { ConfigProvider } from './ConfigProvider';
import {
  ConfigProviderContext,
  ConfigProviderContextInterface,
  WebviewType,
} from './ConfigProviderContext';

describe('ConfigProvider', () => {
  baselineComponent<any>(ConfigProvider, { forward: false });
  it('provides config context', () => {
    const config = {
      appearance: Appearance.LIGHT,
      webviewType: WebviewType.INTERNAL,
      transitionMotionEnabled: false,
    };
    const ConfigUser = () => {
      expect(useContext(ConfigProviderContext)).toEqual({
        platform: Platform.ANDROID,
        isWebView: false,
        locale: 'ru',
        appearance: Appearance.LIGHT,
        webviewType: WebviewType.INTERNAL,
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
      config = useContext(ConfigProviderContext);
      return null;
    };

    const defaultConfig: ConfigProviderContextInterface = {
      platform: Platform.VKCOM,
      appearance: Appearance.DARK,
      webviewType: WebviewType.INTERNAL,
      transitionMotionEnabled: false,
      isWebView: true,
      locale: 'en',
    };
    it.each([
      ['platform', Platform.ANDROID],
      ['webviewType', WebviewType.VKAPPS],
      ['transitionMotionEnabled', true],
      ['isWebView', false],
      ['platform', Appearance.LIGHT],
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
