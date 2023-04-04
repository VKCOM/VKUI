import * as React from 'react';
import {
  ComponentPlayground,
  type ComponentPlaygroundProps,
  TEST_CLASS_NAMES,
} from '@vkui-e2e/playground-helpers';
import { CalendarRange, type CalendarRangeProps } from './CalendarRange';

export const CalendarRangePlayground = (props: ComponentPlaygroundProps) => {
  return (
    <ComponentPlayground<CalendarRangeProps>
      {...props}
      propSets={[
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
      {(props) => <CalendarRange {...props} />}
    </ComponentPlayground>
  );
};
