import * as React from 'react';
import { Icon28VoiceOutline } from '@vkontakte/icons';
import { describeScreenshotFuzz } from '../../testing/e2e';
import { WriteBarIcon } from './WriteBarIcon';

describe('WriteBarIcon', () => {
  describeScreenshotFuzz(WriteBarIcon, [
    {
      mode: ['done'],
    },
    {
      mode: ['attach'],
      count: [undefined, 3],
    },
    {
      mode: ['send'],
      disabled: [undefined, true],
    },
    {
      mode: [undefined],
      children: [<Icon28VoiceOutline key="icon" />],
    },
  ]);
});
