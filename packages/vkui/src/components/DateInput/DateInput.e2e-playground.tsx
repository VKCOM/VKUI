import { isSameDate } from '@vkontakte/vkjs';
import { ComponentPlayground, type ComponentPlaygroundProps } from '@vkui-e2e/playground-helpers';
import { DateInput, type DateInputProps } from './DateInput';

export const DateInputPlayground = (props: ComponentPlaygroundProps) => {
  return (
    <ComponentPlayground
      {...props}
      propSets={[
        {
          value: [new Date('1970-05-05'), undefined],
          enableTime: [true, false],
        },
        {
          status: ['error', 'valid'],
        },
        {
          value: [new Date('1970-05-05'), undefined],
          renderCustomValue: [
            (date) =>
              date && isSameDate(date, new Date('1970-05-05')) ? 'Placeholder' : undefined,
          ],
        },
      ]}
    >
      {(props: DateInputProps) => <DateInput {...props} />}
    </ComponentPlayground>
  );
};
