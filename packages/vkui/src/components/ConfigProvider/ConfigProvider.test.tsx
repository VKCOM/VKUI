import * as React from 'react';
import { render, renderHook } from '@testing-library/react';
import { DEFAULT_TOKENS_CLASS_NAMES } from '../../lib/tokens/constants';
import { baselineComponent } from '../../testing/utils';
import { ConfigProvider } from './ConfigProvider';
import {
  ConfigProviderContext,
  type ConfigProviderContextInterface,
  useConfigProvider,
} from './ConfigProviderContext';
import { ConfigProviderOverride } from './ConfigProviderOverride';

describe(ConfigProvider, () => {
  baselineComponent(ConfigProvider, { forward: false, a11y: false, getRootRef: false });

  it('provides config context', () => {
    const ConfigUser = () => {
      expect(React.useContext(ConfigProviderContext)).toEqual({
        platform: 'android',
        isWebView: false,
        locale: 'ru',
        colorScheme: 'light',
        hasCustomPanelHeaderAfter: false,
        customPanelHeaderAfterMinWidth: 90,
        tokensClassNames: DEFAULT_TOKENS_CLASS_NAMES,
        transitionMotionEnabled: false,
        direction: 'ltr',
      });
      return null;
    };
    render(
      <ConfigProvider
        colorScheme="light"
        hasCustomPanelHeaderAfter={false}
        transitionMotionEnabled={false}
      >
        <ConfigUser />
      </ConfigProvider>,
    );
  });

  describe('inherits properties from parent ConfigProvider context', () => {
    const defaultConfig: ConfigProviderContextInterface = {
      platform: 'vkcom',
      colorScheme: 'dark',
      hasCustomPanelHeaderAfter: true,
      customPanelHeaderAfterMinWidth: 90,
      transitionMotionEnabled: false,
      isWebView: true,
      tokensClassNames: { light: 'some-class-light', dark: 'some-class-dark' },
      locale: 'en',
      direction: 'ltr',
    };
    it.each([
      ['platform', 'android'],
      ['hasCustomPanelHeaderAfter', false],
      ['customPanelHeaderAfterMinWidth', 100],
      ['transitionMotionEnabled', true],
      ['isWebView', false],
      ['platform', 'light'],
      ['tokensClassNames', { light: 'another-class-light', dark: 'another-class-dark' }],
      ['locale', 'ru'],
      ['direction', 'rtl'],
    ])('%s => %s', (prop, value) => {
      const newConfig = { [prop]: value };

      const { result } = renderHook(useConfigProvider, {
        wrapper: ({ children }) => (
          <ConfigProvider {...defaultConfig}>
            <ConfigProvider {...newConfig}>{children}</ConfigProvider>
          </ConfigProvider>
        ),
      });

      expect(result.current).toEqual(expect.objectContaining({ ...defaultConfig, [prop]: value }));
    });
  });
});

describe(ConfigProviderOverride, () => {
  const defaultConfig: ConfigProviderContextInterface = {
    platform: 'vkcom',
    colorScheme: 'dark',
    hasCustomPanelHeaderAfter: true,
    customPanelHeaderAfterMinWidth: 90,
    transitionMotionEnabled: false,
    isWebView: true,
    tokensClassNames: { light: 'some-class-light', dark: 'some-class-dark' },
    locale: 'en',
    direction: 'ltr',
  };
  it.each([
    ['platform', 'android'],
    ['hasCustomPanelHeaderAfter', false],
    ['customPanelHeaderAfterMinWidth', 100],
    ['transitionMotionEnabled', true],
    ['isWebView', false],
    ['platform', 'light'],
    ['tokensClassNames', { light: 'another-class-light', dark: 'another-class-dark' }],
    ['locale', 'ru'],
    ['direction', 'rtl'],
  ])('%s => %s', (prop, value) => {
    const newConfig = { [prop]: value };

    const { result } = renderHook(useConfigProvider, {
      wrapper: ({ children }) => (
        <ConfigProvider {...defaultConfig}>
          <ConfigProviderOverride {...newConfig}>{children}</ConfigProviderOverride>
        </ConfigProvider>
      ),
    });

    expect(result.current).toEqual(expect.objectContaining({ ...defaultConfig, [prop]: value }));
  });
});
