import { Icon16LogoAndroid, Icon16LogoApple, Icon16LogoVk } from '@vkontakte/icons';
import { Platform } from '@vkontakte/vkui';

export const PLATFORM_OPTIONS = [
  {
    'label': <Icon16LogoAndroid />,
    'value': Platform.ANDROID,
    'aria-label': 'Android',
  },
  {
    'label': <Icon16LogoApple />,
    'value': Platform.IOS,
    'aria-label': 'iOS',
  },
  {
    'label': <Icon16LogoVk />,
    'value': Platform.VKCOM,
    'aria-label': 'VK Com',
  },
];
