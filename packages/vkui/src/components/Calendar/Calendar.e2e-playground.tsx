import * as React from 'react';
import {
  ComponentPlayground,
  type ComponentPlaygroundProps,
  TEST_CLASS_NAMES,
} from '@vkui-e2e/playground-helpers';
import { Calendar, type CalendarProps } from './Calendar';

export const CalendarPlayground = (props: ComponentPlaygroundProps) => {
  return (
    <ComponentPlayground<CalendarProps>
      {...props}
      propSets={[
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
            <span key="next" className={TEST_CLASS_NAMES.CONTENT}>
              &gt;
            </span>,
          ],
          prevMonthIcon: [
            undefined,
            <span key="prev" className={TEST_CLASS_NAMES.CONTENT}>
              &lt;
            </span>,
          ],
        },
      ]}
    >
      {(props) => <Calendar {...props} />}
    </ComponentPlayground>
  );
};
