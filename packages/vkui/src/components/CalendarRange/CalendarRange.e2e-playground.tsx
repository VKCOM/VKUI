import {
  ComponentPlayground,
  type ComponentPlaygroundProps,
  TEST_CLASS_NAMES,
} from '@vkui-e2e/playground-helpers';
import { withLabel } from '@vkui-e2e/utils';
import { CalendarRange, type CalendarRangeProps } from './CalendarRange';

const rangeValue = withLabel<[Date | null, Date | null]>(
  [new Date('1970-05-05'), new Date('1970-06-05')],
  '1970.05.05 - 1970.06.05',
);

export const CalendarRangePlayground = (props: ComponentPlaygroundProps) => {
  return (
    <ComponentPlayground
      {...props}
      propSets={[
        {
          value: [rangeValue],
          shouldDisableDate: [undefined, () => true],
        },
        {
          value: [rangeValue],
          weekStartsOn: [0, 1],
        },
        {
          value: [rangeValue],
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
        {
          value: [rangeValue],
          $direction: 'rtl',
        },
      ]}
    >
      {(props: CalendarRangeProps) => <CalendarRange {...props} />}
    </ComponentPlayground>
  );
};
