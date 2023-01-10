import * as React from 'react';
import { ModalPageHeader, ModalPageHeaderProps } from './ModalPageHeader';
import { describeScreenshotFuzz } from '../../testing/e2e/utils';
import { PanelHeaderButton } from '../PanelHeaderButton/PanelHeaderButton';
import { Icon24Cancel, Icon24Dismiss, Icon24Done } from '@vkontakte/icons';
import { Platform } from '../../lib/platform';
import { ViewWidth } from '../../lib/adaptivity';
import { ModalRootContext } from '../ModalRoot/ModalRootContext';
import { noop } from '@vkontakte/vkjs';

const BaseModalPageHeader = (props: ModalPageHeaderProps) => (
  <ModalRootContext.Provider
    value={{
      isInsideModal: true,
      updateModalHeight: noop,
      registerModal: noop,
    }}
  >
    <ModalPageHeader {...props} />
  </ModalRootContext.Provider>
);

describe('ModalPageHeader', () => {
  const cancel = (
    <PanelHeaderButton>
      <Icon24Cancel />
    </PanelHeaderButton>
  );
  const done = (
    <PanelHeaderButton>
      <Icon24Done />
    </PanelHeaderButton>
  );
  const dismiss = (
    <PanelHeaderButton>
      <Icon24Dismiss />
    </PanelHeaderButton>
  );
  const dismissText = <PanelHeaderButton>Готово</PanelHeaderButton>;
  const children = ['Заголовок', 'Невероятно длинный заголовок выезжает за шапку даже на десктопе'];
  describeScreenshotFuzz(
    BaseModalPageHeader,
    [
      {
        children,
        before: [null, cancel],
        after: [null, done],
      },
    ],
    {
      platforms: [Platform.ANDROID, Platform.VKCOM],
      adaptivity: {
        viewWidth: ViewWidth.MOBILE,
      },
    },
  );
  describeScreenshotFuzz(
    BaseModalPageHeader,
    [
      {
        children,
        before: [null, cancel],
        after: [null, done],
      },
    ],
    {
      platforms: [Platform.ANDROID, Platform.VKCOM],
      adaptivity: {
        viewWidth: ViewWidth.DESKTOP,
      },
    },
  );
  describeScreenshotFuzz(
    BaseModalPageHeader,
    [
      {
        children,
        before: [null, cancel],
        after: [dismiss, dismissText],
      },
    ],
    {
      platforms: [Platform.IOS],
      adaptivity: {
        viewWidth: ViewWidth.MOBILE,
      },
    },
  );
  describeScreenshotFuzz(
    BaseModalPageHeader,
    [
      {
        children,
        before: [null, cancel],
        after: [dismiss, dismissText],
      },
    ],
    {
      platforms: [Platform.IOS],
      adaptivity: {
        viewWidth: ViewWidth.DESKTOP,
      },
    },
  );
});
