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
  baselineComponent<any>(ConfigProvider, { forward: false, a11y: false });
  it('provides config context', () => {
    const config = {
      appearance: Appearance.LIGHT,
      hasCustomPanelHeaderAfter: false,
      transitionMotionEnabled: false,
    };
    const ConfigUser = () => {
      expect(useContext(ConfigProviderContext)).toEqual({
        platform: Platform.ANDROID,
        isWebView: false,
        locale: 'ru',
        appearance: Appearance.LIGHT,
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
  // TODO [>=6] Удалить этот тест на бэкпорт
  describe('[deprecated] test webviewType backport', () => {
    it('convert WebviewType.INTERNAL to hasCustomPanelHeaderAfter={false}', () => {
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
    it('convert WebviewType.VKAPPS to hasCustomPanelHeaderAfter={true}', () => {
      const config = {
        appearance: Appearance.LIGHT,
        webviewType: WebviewType.VKAPPS,
        transitionMotionEnabled: false,
      };
      const ConfigUser = () => {
        expect(useContext(ConfigProviderContext)).toEqual({
          platform: Platform.ANDROID,
          isWebView: false,
          locale: 'ru',
          appearance: Appearance.LIGHT,
          webviewType: WebviewType.VKAPPS,
          hasCustomPanelHeaderAfter: true,
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
      // TODO [>=6] Удалить webviewType
      webviewType: WebviewType.INTERNAL,
      hasCustomPanelHeaderAfter: true,
      customPanelHeaderAfterMinWidth: 90,
      transitionMotionEnabled: false,
      isWebView: true,
      locale: 'en',
    };
    it.each([
      ['platform', Platform.ANDROID],
      // TODO [>=6] Удалить webviewType
      ['webviewType', WebviewType.VKAPPS],
      ['hasCustomPanelHeaderAfter', false],
      ['customPanelHeaderAfterMinWidth', 100],
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
