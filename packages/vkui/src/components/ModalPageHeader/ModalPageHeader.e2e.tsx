/**
 * jest-runners-groups
 * @group e2e
 */

import * as React from 'react';
import { Icon24Cancel, Icon24Dismiss, Icon24Done } from '@vkontakte/icons';
import { noop } from '@vkontakte/vkjs';
import { ViewWidth } from '../../lib/adaptivity';
import { Platform } from '../../lib/platform';
import { describeScreenshotFuzz } from '../../testing/e2e';
import { ModalRootContext } from '../ModalRoot/ModalRootContext';
import { PanelHeaderButton } from '../PanelHeaderButton/PanelHeaderButton';
import { ModalPageHeader, ModalPageHeaderProps } from './ModalPageHeader';

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
