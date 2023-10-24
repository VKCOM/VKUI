import * as React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import { Appearance } from '../../helpers/appearance';
import { generateVKUITokensClassName } from '../../helpers/generateVKUITokensClassName';
import { Platform } from '../../lib/platform';
import { baselineComponent } from '../../testing/utils';
import { ConfigProvider } from './ConfigProvider';
import {
  ConfigProviderContext,
  ConfigProviderContextInterface,
  WebviewType,
} from './ConfigProviderContext';

describe('ConfigProvider', () => {
  baselineComponent<any>(ConfigProvider, { forward: false, a11y: false, getRootRef: false });
  it('provides config context', () => {
    const config = {
      appearance: Appearance.LIGHT,
      hasCustomPanelHeaderAfter: false,
      transitionMotionEnabled: false,
    };
    const ConfigUser = () => {
      expect(React.useContext(ConfigProviderContext)).toEqual({
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
        expect(React.useContext(ConfigProviderContext)).toEqual({
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
        platform: undefined,
        appearance: Appearance.LIGHT,
        webviewType: WebviewType.VKAPPS,
        transitionMotionEnabled: false,
      };
      const ConfigUser = () => {
        expect(React.useContext(ConfigProviderContext)).toEqual({
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
      config = React.useContext(ConfigProviderContext);
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

  it('adds VKUITokenClassName to document.body on mount and removed on unmount', async () => {
    const config = { appearance: Appearance.LIGHT, platform: Platform.VKCOM };
    const ConfigUser = () => {
      return null;
    };
    const { unmount } = render(
      <ConfigProvider {...config}>
        <ConfigUser />
      </ConfigProvider>,
    );

    const vkuiBodySelector = generateVKUITokensClassName(config.platform, config.appearance);

    expect(document.querySelector(`body.${vkuiBodySelector}`)).toBeTruthy();

    unmount();

    // removed on unmount
    expect(document.querySelector(`body.${vkuiBodySelector}`)).toBeFalsy();
  });

  it('adds VKUITokenClassName to document.body on mount and not removes if child ConfigProvider is unmounted', async () => {
    const config = { appearance: Appearance.LIGHT, platform: Platform.VKCOM };
    const ConfigUser = () => {
      return <div>User config</div>;
    };

    const ConfigUserWithOwnProvider = () => {
      return (
        <ConfigProvider {...config}>
          <ConfigUser />
        </ConfigProvider>
      );
    };

    const TestComponent = () => {
      const [isMounted, setIsMounted] = React.useState(true);

      return (
        <ConfigProvider {...config}>
          <div>
            <button onClick={() => setIsMounted(false)}>Unmount child context</button>
            {isMounted && <ConfigUserWithOwnProvider />}
          </div>
        </ConfigProvider>
      );
    };

    const { unmount } = render(<TestComponent />);

    const vkuiBodySelector = generateVKUITokensClassName(config.platform, config.appearance);

    // class name is applied to body
    expect(document.querySelector(`body.${vkuiBodySelector}`)).toBeTruthy();

    // unmount child ConfigProvider
    fireEvent.click(screen.getByRole('button'));

    // class from body is not removed on unmount of child context
    expect(document.querySelector(`body.${vkuiBodySelector}`)).toBeTruthy();

    // unmount parent context as well
    unmount();

    // when last context that is using this class is unmounted the class is removed from body
    expect(document.querySelector(`body.${vkuiBodySelector}`)).toBeFalsy();
  });
});
