import * as React from 'react';
import { Icon16Clear } from '@vkontakte/icons';
import { ComponentPlayground, type ComponentPlaygroundProps } from '@vkui-e2e/playground-helpers';
import { ChipsInput, type ChipsInputProps } from './ChipsInput';

export const ChipsInputPlayground = (props: ComponentPlaygroundProps) => {
  return (
    <ComponentPlayground<ChipsInputProps<Record<string, string>>>
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
      {(props) => <ChipsInput {...props} placeholder="Введите название и нажмите Enter" />}
    </ComponentPlayground>
  );
};
