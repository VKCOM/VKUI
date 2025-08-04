import { Preview } from '@storybook/react';
// TODO [@storybook/addon-console>3.0.0] https://github.com/storybookjs/storybook-addon-console/issues/86
// import { withConsole } from '@storybook/addon-console';
import { BREAKPOINTS } from '../src/lib/adaptivity';
import { withVKUIWrapper } from '../src/storybook/VKUIDecorators';
import './preview.css';

declare global {
  const __DOCS_BASE_URL__: string;
  const __COMPONENTS_SOURCE_BASE_URL__: string;
}

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

// TODO [@storybook/addon-console>3.0.0] https://github.com/storybookjs/storybook-addon-console/issues/86
// const withConsoleWrapper = (Story, context) => withConsole()(Story)(context);

const preview: Preview = {
  parameters: {
    options: {
      storySort: {
        order: [
          'Layout',
          ['Group', ['*', 'Header', 'Footer']],
          'Forms',
          'Dates',
          'Buttons',
          'Navigation',
          'Feedback',
          'Modals',
          'Data Display',
          'Typography',
          'Configuration',
          'Utils',
        ],
      },
    },
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
    viewport: {
      options: customViewports,
    },
    backgrounds: { disable: true },
    cartesian: { disabled: true },
  },
  initialGlobals: {
    docsBaseUrl: __DOCS_BASE_URL__,
    componentsSourceBaseUrl: __COMPONENTS_SOURCE_BASE_URL__,
    colorScheme: 'light',
    hasPointer: true,
    storybookTheme: 'light',
    hasCustomPanelHeaderAfter: false,
    direction: 'ltr',
    writingMode: 'horizontal-tb',
  },
  globalTypes: {
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
    },
    direction: {
      name: 'Direction',
      description: "Attribute indicating the directionality of the element's text",
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
  decorators: [
    withVKUIWrapper,
    // TODO [@storybook/addon-console>3.0.0] https://github.com/storybookjs/storybook-addon-console/issues/86
    // withConsoleWrapper,
  ],
};

export default preview;
