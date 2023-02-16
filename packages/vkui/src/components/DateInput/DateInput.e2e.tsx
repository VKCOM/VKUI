import * as React from 'react';
import { describeScreenshotFuzz } from '../../testing/e2e';
import { DateInput, DateInputProps } from './DateInput';

describe('DateInput', () => {
  describeScreenshotFuzz(
    (props: DateInputProps) => <DateInput {...props} />,
    [
      {
        value: [new Date('1970-05-05'), undefined],
        enableTime: [true, false],
      },
      {
        status: ['error', 'valid'],
      },
    ],
  );
});
