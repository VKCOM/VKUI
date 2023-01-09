import * as React from 'react';
import { DateInput, DateInputProps } from './DateInput';
import { describeScreenshotFuzz } from '../../testing/e2e/utils';

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
