import { ComponentPlayground, type ComponentPlaygroundProps } from '@vkui-e2e/playground-helpers';
import { CustomSelect, type SelectProps } from '../CustomSelect/CustomSelect';

export const CustomSelectOptionScrollPlayground = (props: ComponentPlaygroundProps) => (
  <ComponentPlayground {...props} propSets={[{ value: [7], forceDropdownPortal: [false] }]}>
    {(props: SelectProps) => (
      <div style={{ height: 200 }}>
        <CustomSelect
          slotProps={{
            input: {
              'data-testid': 'target-select',
            },
          }}
          {...props}
          accessible
          options={[
            { value: 1, label: 'Гарри Поттер и философский камень' },
            { value: 2, label: 'Гарри Поттер и Тайная комната' },
            {
              value: 3,
              label: 'Гарри Поттер и узник Азкабана',
            },
            { value: 4, label: 'Гарри Поттер и Кубок Огня' },
            { value: 5, label: 'Гарри Поттер и Орден Феникса' },
            { value: 6, label: 'Гарри Поттер и Принц-полукровка' },
            { value: 7, label: 'Гарри Поттер и Дары Смерти' },
          ]}
        />
      </div>
    )}
  </ComponentPlayground>
);
