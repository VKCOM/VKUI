import { create } from 'storybook/theming';
import darkLogo from './vkui-logo-dark.svg';
import lightLogo from './vkui-logo-light.svg';

const commonProps = {
  brandTitle: 'VKUI Storybook',
  brandUrl: 'https://vkui.io/',
  brandTarget: '_blank',
};

export const vkuiDarkTheme = create({
  base: 'dark',
  brandImage: lightLogo,
  appPreviewBg: '#000',
  ...commonProps,
});

export const vkuiLightTheme = create({
  base: 'light',
  brandImage: darkLogo,
  ...commonProps,
});
