import { Icon16Clear } from '@vkontakte/icons';
import { ComponentPlayground, type ComponentPlaygroundProps } from '@vkui-e2e/playground-helpers';
import type { ChipOption } from '../ChipsInputBase/types';
import { ChipsSelect, type ChipsSelectProps } from './ChipsSelect';

export const ChipsSelectPlayground = (props: ComponentPlaygroundProps) => {
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
        <ChipsSelect {...props} placeholder="Введите название и нажмите Enter" />
      )}
    </ComponentPlayground>
  );
};

export const ChipsSelectWithDropdownPlayground = (props: ComponentPlaygroundProps) => {
  return (
    <ComponentPlayground {...props}>
      {(props: ChipsSelectProps<ChipOption>) => (
        <div style={{ height: 300 }}>
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
