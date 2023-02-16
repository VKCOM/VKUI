import * as React from 'react';
import { describeScreenshotFuzz } from '../../testing/e2e';
import { Chip, ChipProps } from './Chip';

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
