/**
 * jest-runners-groups
 * @group e2e
 */

import * as React from 'react';
import { SizeType } from '../../lib/adaptivity';
import { describeScreenshotFuzz } from '../../testing/e2e';
import { Radio, RadioProps } from './Radio';

describe('Radio', () => {
  describeScreenshotFuzz(
    (props: RadioProps) => <Radio {...props}>label</Radio>,
    [
      {
        checked: [false, true],
        disabled: [undefined, true],
      },
    ],
    { adaptivity: { sizeY: SizeType.REGULAR } },
  );
});

describe('Radio sizes and description', () => {
  describeScreenshotFuzz(
    (props: RadioProps) => <Radio {...props}>label</Radio>,
    [
      {
        description: [undefined, 'Description'],
        $adaptivity: 'y',
      },
    ],
  );
});
