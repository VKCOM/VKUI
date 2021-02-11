import React from 'react';
import Avatar from '../Avatar/Avatar';
import PanelHeaderContent from './PanelHeaderContent';
import { describeScreenshotFuzz } from '../../testing/e2e/utils';
import { Platform } from '../../lib/platform';
import { ViewWidth } from '../../hoc/withAdaptivity';

describe('PanelHeaderContent', () => {
  const children = ['title'];

  const before = [null, <Avatar key="0" />];
  const status = [null, 'status'];
  const onClick = [null, () => console.log('test')];

  describeScreenshotFuzz(PanelHeaderContent, [{
    children,
    before,
    status,
    onClick,
  }], {
    platforms: [Platform.IOS, Platform.ANDROID, Platform.VKCOM],
    adaptivity: {
      viewWidth: ViewWidth.MOBILE,
    },
  });

  describeScreenshotFuzz(PanelHeaderContent, [{
    children,
    before,
    status,
    onClick,
  }], {
    platforms: [Platform.IOS, Platform.ANDROID, Platform.VKCOM],
    adaptivity: {
      viewWidth: ViewWidth.SMALL_TABLET,
    },
  });
});
