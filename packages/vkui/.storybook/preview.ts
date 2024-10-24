import '../src/styles/constants.css';
import '../src/styles/themes.css';
import '../src/styles/common.css';
import '../src/styles/dynamicTokens.css';
import '../src/styles/adaptivity.module.css';

import { Preview } from '@storybook/react';
import { BREAKPOINTS } from '../src/lib/adaptivity';
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
    docs: {
      source: {
        type: 'dynamic',
      },
    },
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
    colorScheme: {
      defaultValue: 'light',
    },
    hasPointer: {
      defaultValue: true,
    },
    storybookTheme: {
      defaultValue: 'light',
    },
    platform: {
      name: 'Platform',
      description: 'Platform for components',
      defaultValue: 'android',
      toolbar: {
        icon: 'mobile',
        items: ['android', 'ios', 'vkcom'],
        title: 'Platform',
        dynamicTitle: true,
      },
    },
    hasCustomPanelHeaderAfter: {
      description: 'Hide "after" prop of PanelHeader for custom floating "after" element',
      defaultValue: false,
    },
    direction: {
      name: 'Direction',
      description: "Attribute indicating the directionality of the element's text",
      defaultValue: 'ltr',
      toolbar: {
        items: [
          { value: 'ltr', icon: 'menu', title: 'ltr' },
          { value: 'rtl', icon: 'menualt', title: 'rtl' },
        ],
      },
    },
    writingMode: {
      name: 'Writing mode',
      description:
        'Sets whether lines of text are laid out horizontally or vertically, as well as the direction in which blocks progress',
      defaultValue: 'horizontal-tb',
      toolbar: {
        icon: 'redirect',
        items: ['horizontal-tb', 'vertical-rl', 'vertical-lr'],
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
