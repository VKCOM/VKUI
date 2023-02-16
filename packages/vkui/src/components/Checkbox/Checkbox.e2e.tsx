import * as React from 'react';
import { SizeType } from '../../lib/adaptivity';
import { describeScreenshotFuzz } from '../../testing/e2e';
import { Checkbox, CheckboxProps } from './Checkbox';

describe('Checkbox', () => {
  describeScreenshotFuzz(
    (props: CheckboxProps) => <Checkbox {...props}>label</Checkbox>,
    [
      {
        checked: [false, true],
        disabled: [undefined, true],
      },
      {
        indeterminate: [true],
        disabled: [undefined, true],
      },
    ],
    { adaptivity: { sizeY: SizeType.REGULAR } },
  );
});

describe('Checkbox sizes and description', () => {
  describeScreenshotFuzz(
    (props: CheckboxProps) => <Checkbox {...props}>label</Checkbox>,
    [
      {
        description: [undefined, 'Description'],
        $adaptivity: 'y',
      },
    ],
  );
});

describe('Checkbox simple', () => {
  describeScreenshotFuzz(
    (props: CheckboxProps) => <Checkbox {...props} />,
    [
      {
        checked: [undefined, true],
        disabled: [undefined, true],
        $adaptivity: 'y',
      },
      {
        indeterminate: [true],
        disabled: [undefined, true],
        $adaptivity: 'y',
      },
    ],
  );
});
