import * as React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import { generateVKUITokensClassName } from '../../helpers/generateVKUITokensClassName';
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
  // TODO [>=6] Удалить этот тест на бэкпорт
  describe('[deprecated] test webviewType backport', () => {
    it('convert internal to hasCustomPanelHeaderAfter={false}', () => {
      const config = {
        appearance: 'light',
        webviewType: 'internal',
        transitionMotionEnabled: false,
      } as const;
      const ConfigUser = () => {
        expect(React.useContext(ConfigProviderContext)).toEqual({
          platform: 'android',
          isWebView: false,
          locale: 'ru',
          appearance: 'light',
          webviewType: 'internal',
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
        appearance: 'light',
        webviewType: 'vkapps',
        transitionMotionEnabled: false,
      } as const;
      const ConfigUser = () => {
        expect(React.useContext(ConfigProviderContext)).toEqual({
          platform: 'android',
          isWebView: false,
          locale: 'ru',
          appearance: 'light',
          webviewType: 'vkapps',
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
      platform: 'vkcom',
      appearance: 'dark',
      // TODO [>=6] Удалить webviewType
      webviewType: 'internal',
      hasCustomPanelHeaderAfter: true,
      customPanelHeaderAfterMinWidth: 90,
      transitionMotionEnabled: false,
      isWebView: true,
      locale: 'en',
    };
    it.each([
      ['platform', 'android'],
      // TODO [>=6] Удалить webviewType
      ['webviewType', 'vkapps'],
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

  it('adds VKUITokenClassName to document.body on mount and removed on unmount', async () => {
    const config = { appearance: 'light', platform: 'vkcom' } as const;
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
    const config = { appearance: 'light', platform: 'vkcom' } as const;
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
