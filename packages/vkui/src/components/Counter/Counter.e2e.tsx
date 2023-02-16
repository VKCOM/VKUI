import * as React from 'react';
import { describeScreenshotFuzz } from '../../testing/e2e';
import { Counter, CounterProps } from './Counter';

describe('Counter', () => {
  describeScreenshotFuzz(
    (props: CounterProps) => (
      <div>
        <Counter {...props} />
      </div>
    ),
    [
      {
        children: ['3'],
        mode: ['secondary', 'primary', 'prominent', 'contrast'],
        size: ['m', 's'],
        $adaptivity: 'y',
      },
    ],
  );
});
