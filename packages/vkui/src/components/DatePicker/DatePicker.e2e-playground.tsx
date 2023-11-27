import * as React from 'react';
import { ComponentPlayground, type ComponentPlaygroundProps } from '@vkui-e2e/playground-helpers';
import {
  AdaptivityProvider,
  AdaptivityProviderProps,
} from '../AdaptivityProvider/AdaptivityProvider';
import { DatePicker, type DatePickerProps } from './DatePicker';

type DatePickerPropsWithAdaptivity = DatePickerProps &
  Pick<AdaptivityProviderProps, 'hasPointer' | 'sizeY'>;

export const DatePickerPlayground = (props: ComponentPlaygroundProps) => {
  return (
    <ComponentPlayground
      {...props}
      propSets={[
        {
          defaultValue: [undefined, { day: 2, month: 4, year: 1994 }],
          hasPointer: [true, false],
          sizeY: ['compact', 'regular'],
        },
      ]}
    >
      {({ hasPointer, sizeY, ...props }: DatePickerPropsWithAdaptivity) => (
        <AdaptivityProvider hasPointer={hasPointer} sizeY={sizeY}>
          <DatePicker {...props} />
        </AdaptivityProvider>
      )}
    </ComponentPlayground>
  );
};
