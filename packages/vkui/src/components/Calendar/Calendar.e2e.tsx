import * as React from 'react';
import { describeScreenshotFuzz } from '../../testing/e2e';
import { Calendar, CalendarProps } from './Calendar';

describe('Calendar', () => {
  describeScreenshotFuzz(
    (props: CalendarProps) => <Calendar {...props} />,
    [
      {
        value: [new Date('1970-05-05')],
        shouldDisableDate: [undefined, () => true],
      },
      {
        value: [new Date('1970-05-05')],
        showNeighboringMonth: [false, true],
      },
      {
        value: [new Date('1970-05-05')],
        size: ['s', 'm'],
      },
      {
        value: [new Date('1970-05-05')],
        weekStartsOn: [0, 1],
      },
      {
        value: [new Date('1970-05-05')],
        enableTime: [true, false],
        doneButtonText: [undefined, 'Done'],
      },
      {
        value: [new Date('1970-05-05')],
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
