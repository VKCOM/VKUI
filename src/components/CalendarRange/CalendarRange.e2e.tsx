import * as React from 'react';
import { CalendarRange, CalendarRangeProps } from './CalendarRange';
import { describeScreenshotFuzz } from '../../testing/e2e/utils';

describe('CalendarRange', () => {
  describeScreenshotFuzz(
    (props: CalendarRangeProps) => <CalendarRange {...props} />,
    [
      {
        value: [[new Date('1970-05-05'), new Date('1970-06-05')]],
        shouldDisableDate: [undefined, () => true],
      },
      {
        value: [[new Date('1970-05-05'), new Date('1970-06-05')]],
        weekStartsOn: [0, 1],
      },
      {
        value: [[new Date('1970-05-05'), new Date('1970-06-05')]],
        nextMonthIcon: [
          undefined,
          <span key="next" className="vkuiProps">
            &gt;
          </span>,
        ],
        prevMonthIcon: [
          undefined,
          <span key="prev" className="vkuiProps">
            &lt;
          </span>,
        ],
      },
    ],
  );
});
