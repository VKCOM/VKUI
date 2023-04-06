import '../src/styles/themes.css';
import '../src/styles/common.css';
import '../src/styles/constants.css';
import '../src/styles/adaptivity.module.css';

import { Preview } from '@storybook/react';
import { BREAKPOINTS } from '../src/lib/adaptivity';
import { Platform, Appearance, WebviewType } from '../src';
import { withVKUIWrapper } from '../src/storybook/VKUIDecorators';

interface CustomViewPortItem {
  name: string;
  styles: {
    width: string;
    height: string;
  };
}

const customViewports = Object.entries(BREAKPOINTS).reduce<Record<string, CustomViewPortItem>>(
  (previousValue, [key, value]) => {
    if (key === 'MOBILE_LANDSCAPE_HEIGHT' || key === 'MEDIUM_HEIGHT') {
      return previousValue;
    }
    previousValue[key] = {
      name: `${key} (${value}w)`,
      styles: {
        width: `${value}px`,
        height: `667px`,
      },
    };

    return previousValue;
  },
  {},
);

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      expanded: true,
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
    viewport: { viewports: customViewports },
    backgrounds: { disable: true },
    cartesian: { disabled: true },
  },
  globalTypes: {
    appearance: {
      defaultValue: Appearance.LIGHT,
    },
    hasPointer: {
      defaultValue: true,
    },
    platform: {
      name: 'Platform',
      description: 'Platform for components',
      defaultValue: Platform.ANDROID,
      toolbar: {
        icon: 'mobile',
        items: [Platform.ANDROID, Platform.IOS, Platform.VKCOM],
        title: 'Platform',
        dynamicTitle: true,
      },
    },
    webviewType: {
      name: 'WebviewType',
      defaultValue: WebviewType.INTERNAL,
      toolbar: {
        icon: 'component',
        items: [WebviewType.INTERNAL, WebviewType.VKAPPS],
        title: 'WebviewType',
        dynamicTitle: true,
      },
    },
  },
  argTypes: {
    getRef: { control: false },
    getRootRef: { control: false },
  },
  decorators: [withVKUIWrapper],
};

export default preview;
