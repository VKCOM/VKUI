import * as React from 'react';
import { Icon16Clear } from '@vkontakte/icons';
import { ComponentPlayground, type ComponentPlaygroundProps } from '@vkui-e2e/playground-helpers';
import type { ChipOption } from '../ChipsInputBase/types';
import { ChipsInput, type ChipsInputProps } from './ChipsInput';

export const ChipsInputPlayground = (props: ComponentPlaygroundProps) => {
  return (
    <ComponentPlayground
      {...props}
      propSets={[
        {
          value: [
            [],
            [
              { value: '1', label: 'Arctic Monkeys' },
              { value: '2', label: 'Звери' },
            ],
          ],
          after: [undefined, <Icon16Clear key="icon-16-clear" />],
          disabled: [undefined, true],
        },
        {
          $adaptivity: 'y',
        },
        {
          status: ['error', 'valid'],
        },
      ]}
    >
      {(props: ChipsInputProps<ChipOption>) => (
        <ChipsInput {...props} placeholder="Введите название и нажмите Enter" />
      )}
    </ComponentPlayground>
  );
};
