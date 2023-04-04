import * as React from 'react';
import { ComponentPlayground, type ComponentPlaygroundProps } from '@vkui-e2e/playground-helpers';
import { DateRangeInput, type DateRangeInputProps } from './DateRangeInput';

export const DateRangeInputPlayground = (props: ComponentPlaygroundProps) => {
  return (
    <ComponentPlayground
      {...props}
      propSets={[
        {
          value: [
            [new Date('1970-05-05'), new Date('1970-06-05')],
            undefined,
            [new Date('1970-05-05'), null],
            [null, new Date('1970-06-05')],
            [null, null],
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
