import { Icon16Clear } from '@vkontakte/icons';
import { ComponentPlayground, type ComponentPlaygroundProps } from '@vkui-e2e/playground-helpers';
import type { ChipOption } from '../ChipsInputBase/types';
import { ChipsInput, type ChipsInputProps } from './ChipsInput';

export const ChipsInputPlayground = (playgroundProps: ComponentPlaygroundProps) => {
  return (
    <ComponentPlayground
      {...playgroundProps}
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
          value: [
            [{ value: '2', label: 'Звери' }],
            [
              { value: '1', label: 'Arctic Monkeys' },
              { value: '2', label: 'Depeche Mode' },
            ],
            [],
          ],
          inputValue: ['Другая'],
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
        <div
          style={{
            width: playgroundProps.platform === 'vkcom' ? 450 : undefined,
          }}
        >
          <ChipsInput {...props} placeholder="Введите название и нажмите Enter" />
        </div>
      )}
    </ComponentPlayground>
  );
};
