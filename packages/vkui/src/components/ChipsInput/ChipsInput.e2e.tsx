/**
 * jest-runners-groups
 * @group e2e
 */

import * as React from 'react';
import { Icon16Clear } from '@vkontakte/icons';
import { describeScreenshotFuzz } from '../../testing/e2e';
import { ChipsInput, ChipsInputProps } from './ChipsInput';

describe('ChipsInput', () => {
  describeScreenshotFuzz(
    (props: ChipsInputProps<any>) => (
      <ChipsInput {...props} placeholder="Введите название и нажмите Enter" />
    ),
    [
      {
        value: [
          [],
          [
            { value: '1', label: 'Arctic Monkeys' },
            { value: '2', label: 'Звери' },
          ],
        ],
        after: [undefined, <Icon16Clear key="icon-16-clear" />],
        disabled: [undefined, true],
      },
      {
        $adaptivity: 'y',
      },
      {
        status: ['error', 'valid'],
      },
    ],
  );
});
