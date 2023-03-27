import * as React from 'react';
import { SizeType } from '../../lib/adaptivity/constants';
import { describeScreenshotFuzz } from '../../testing/e2e';
import {
  AdaptivityProvider,
  AdaptivityProviderProps,
} from '../AdaptivityProvider/AdaptivityProvider';
import { DatePicker, DatePickerProps } from './DatePicker';

describe('DatePicker', () => {
  describeScreenshotFuzz(
    ({
      hasPointer,
      sizeY,
      ...props
    }: DatePickerProps & Pick<AdaptivityProviderProps, 'hasPointer' | 'sizeY'>) => (
      <AdaptivityProvider hasPointer={hasPointer} sizeY={sizeY}>
        <DatePicker {...props} />
      </AdaptivityProvider>
    ),
    [
      {
        defaultValue: [undefined, { day: 2, month: 4, year: 1994 }],
        hasPointer: [true, false],
        sizeY: [SizeType.COMPACT, SizeType.REGULAR],
      },
    ],
  );
});
