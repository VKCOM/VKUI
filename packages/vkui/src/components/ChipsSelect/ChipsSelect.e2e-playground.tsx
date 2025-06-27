import { Icon16Clear } from '@vkontakte/icons';
import { ComponentPlayground, type ComponentPlaygroundProps } from '@vkui-e2e/playground-helpers';
import type { ChipOption } from '../ChipsInputBase/types';
import { ChipsSelect, type ChipsSelectProps } from './ChipsSelect';

export const ChipsSelectPlayground = (playgroundProps: ComponentPlaygroundProps) => {
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
          before: [undefined, <Icon16Clear key="icon-16-clear" />],
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
          status: ['error', 'valid'],
        },
      ]}
    >
      {(props: ChipsSelectProps<ChipOption>) => (
        <div
          style={{
            width: playgroundProps.platform === 'vkcom' ? 450 : undefined,
          }}
        >
          <ChipsSelect {...props} placeholder="Введите название и нажмите Enter" />
        </div>
      )}
    </ComponentPlayground>
  );
};

export const ChipsSelectWithDropdownPlayground = (playgroundProps: ComponentPlaygroundProps) => {
  return (
    <ComponentPlayground {...playgroundProps}>
      {(props: ChipsSelectProps<ChipOption>) => (
        <div style={{ height: 300, width: playgroundProps.platform === 'vkcom' ? 450 : undefined }}>
          <ChipsSelect
            {...props}
            placeholder="Введите название и нажмите Enter"
            value={[
              { value: '1', label: 'Arctic Monkeys' },
              { value: '2', label: 'Звери' },
            ]}
            options={[
              {
                value: 'Звери',
                label: 'Звери',
              },
              {
                value: 'Arctic Monkeys',
                label: 'Arctic Monkeys',
              },
            ]}
          />
        </div>
      )}
    </ComponentPlayground>
  );
};
