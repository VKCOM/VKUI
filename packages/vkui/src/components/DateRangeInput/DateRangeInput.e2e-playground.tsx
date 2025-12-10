import { ComponentPlayground, type ComponentPlaygroundProps } from '@vkui-e2e/playground-helpers';
import { withLabel } from '@vkui-e2e/utils';
import { DateRangeInput, type DateRangeInputProps } from './DateRangeInput';

export const DateRangeInputPlayground = (props: ComponentPlaygroundProps) => {
  return (
    <ComponentPlayground
      {...props}
      propSets={[
        {
          value: [
            withLabel<[Date | null, Date | null]>(
              [new Date('1970-05-05'), new Date('1970-06-05')],
              '1970.05.05 - 1970.06.05',
            ),
            undefined,
            withLabel<[Date | null, Date | null]>(
              [new Date('1970-05-05'), null],
              '1970.05.05 - ...',
            ),
            withLabel<[Date | null, Date | null]>(
              [null, new Date('1970-06-05')],
              '... - 1970.06.05',
            ),
            withLabel<[Date | null, Date | null]>([null, null], 'Range not selected'),
          ],
        },
        {
          status: ['error', 'valid'],
        },
      ]}
    >
      {(props: DateRangeInputProps) => <DateRangeInput {...props} />}
    </ComponentPlayground>
  );
};
