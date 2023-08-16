import React, { useContext, useState } from 'react';
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
  baselineComponent<any>(ConfigProvider, { forward: false, a11y: false });
  beforeAll(() => {
    window.__VKUI__ = undefined;
  });
  afterEach(() => {
    window.__VKUI__ = undefined;
  });
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
    const { unmount } = render(
      <ConfigProvider {...config}>
        <ConfigUser />
      </ConfigProvider>,
    );
    expect(window.__VKUI__).toEqual(
      expect.objectContaining({
        globalTokensClassNameUsage: {
          'vkui--vkBase--light': 1,
        },
      }),
    );

    unmount();

    expect(window.__VKUI__).toEqual(
      expect.objectContaining({
        globalTokensClassNameUsage: {
          'vkui--vkBase--light': 0,
        },
      }),
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
    // class name usage of ConfigProvider represents in the window.__VKUI__
    expect(window.__VKUI__).toEqual(
      expect.objectContaining({
        globalTokensClassNameUsage: {
          [vkuiBodySelector]: 1,
        },
      }),
    );

    expect(document.querySelector(`body.${vkuiBodySelector}`)).toBeTruthy();

    unmount();

    expect(window.__VKUI__).toEqual(
      expect.objectContaining({
        globalTokensClassNameUsage: {
          [vkuiBodySelector]: 0,
        },
      }),
    );
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
      const [isMounted, setIsMounted] = useState(true);

      return (
        <ConfigProvider {...config}>
          <div>
            <button onClick={() => setIsMounted(false)}>Unmount child context</button>
            {isMounted && <ConfigUserWithOwnProvider />}
          </div>
        </ConfigProvider>
      );
    };

    const { unmount, rerender } = render(<TestComponent />);

    const vkuiBodySelector = generateVKUITokensClassName(config.platform, config.appearance);
    rerender(<TestComponent />);

    // class name usage of two ConfigProvider represents in the window.__VKUI__
    expect(window.__VKUI__).toEqual(
      expect.objectContaining({
        globalTokensClassNameUsage: {
          [vkuiBodySelector]: 2,
        },
      }),
    );

    // class name is applied to body
    expect(document.querySelector(`body.${vkuiBodySelector}`)).toBeTruthy();

    // unmount child ConfigProvider
    fireEvent.click(screen.getByRole('button'));

    // class name usage counter is decreased in the window.__VKUI__
    expect(window.__VKUI__).toEqual(
      expect.objectContaining({
        globalTokensClassNameUsage: {
          [vkuiBodySelector]: 1,
        },
      }),
    );

    // class from body is not removed on unmount of child context
    expect(document.querySelector(`body.${vkuiBodySelector}`)).toBeTruthy();

    // unmount parent context as well
    unmount();

    // class name usage counter is decreased in the window.__VKUI__
    expect(window.__VKUI__).toEqual(
      expect.objectContaining({
        globalTokensClassNameUsage: {
          [vkuiBodySelector]: 0,
        },
      }),
    );

    // when last context that is using this class is unmounted the class is removed from body
    expect(document.querySelector(`body.${vkuiBodySelector}`)).toBeFalsy();
  });
});
