import * as React from 'react';
import { Chip, ChipProps } from './Chip';
import { describeScreenshotFuzz } from '../../testing/e2e/utils';

describe('Chip', () => {
  describeScreenshotFuzz(
    (props: ChipProps) => (
      <Chip {...props} value="arctic_monkeys">
        Arctic Monkeys
      </Chip>
    ),
    [
      {
        removable: [false, true],
        $adaptivity: 'y',
      },
    ],
  );
});
