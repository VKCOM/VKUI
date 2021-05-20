import ModalPageHeader from './ModalPageHeader';
import { describeScreenshotFuzz } from '../../testing/e2e/utils';
import { PanelHeaderButton } from '../PanelHeaderButton/PanelHeaderButton';
import { Icon24Cancel, Icon24Dismiss, Icon24Done } from '@vkontakte/icons';
import { Platform } from '../../lib/platform';
import { ViewWidth } from '../../hoc/withAdaptivity';

describe('ModalPageHeader', () => {
  const cancel = <PanelHeaderButton><Icon24Cancel /></PanelHeaderButton>;
  const done = <PanelHeaderButton><Icon24Done /></PanelHeaderButton>;
  const dismiss = <PanelHeaderButton><Icon24Dismiss /></PanelHeaderButton>;
  const dismissText = <PanelHeaderButton>Готово</PanelHeaderButton>;
  const children = ['Заголовок', 'Невероятно длинный заголовок выезжает за шапку даже на десктопе'];
  describeScreenshotFuzz(ModalPageHeader, [{
    children,
    left: [null, cancel],
    right: [null, done],
  }], {
    platforms: [Platform.ANDROID, Platform.VKCOM],
    adaptivity: {
      viewWidth: ViewWidth.MOBILE,
    },
  });
  describeScreenshotFuzz(ModalPageHeader, [{
    children,
    left: [null, cancel],
    right: [null, done],
  }], {
    platforms: [Platform.ANDROID, Platform.VKCOM],
    adaptivity: {
      viewWidth: ViewWidth.DESKTOP,
    },
  });
  describeScreenshotFuzz(ModalPageHeader, [{
    children,
    right: [dismiss, dismissText],
    left: [null, cancel],
  }], {
    platforms: [Platform.IOS],
    adaptivity: {
      viewWidth: ViewWidth.MOBILE,
    },
  });
  describeScreenshotFuzz(ModalPageHeader, [{
    children,
    right: [dismiss, dismissText],
    left: [null, cancel],
  }], {
    platforms: [Platform.IOS],
    adaptivity: {
      viewWidth: ViewWidth.DESKTOP,
    },
  });
});
