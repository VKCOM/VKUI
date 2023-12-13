import * as React from 'react';
import { ComponentPlayground, type ComponentPlaygroundProps } from '@vkui-e2e/playground-helpers';
import { Platform } from '../../lib/platform';
import { CustomSelect, type SelectProps } from './CustomSelect';

export const CustomSelectPlayground = (props: ComponentPlaygroundProps) => {
  return (
    <ComponentPlayground
      {...props}
      propSets={[
        {
          value: [undefined, 1],
          disabled: [undefined, true],
          align: [undefined, 'center', 'right'],
        },
        {
          value: [3],
        },
        {
          selectType: ['plain', 'accent'],
          $adaptivity: 'y',
        },
        {
          status: ['error', 'valid'],
        },
      ]}
    >
      {(props: SelectProps) => (
        <CustomSelect
          placeholder="Не выбрана"
          {...props}
          options={[
            { value: 1, label: 'Россия' },
            { value: 2, label: 'Украина' },
            {
              value: 3,
              label: 'Соединенное королевство Великобритании и Северной Ирландии',
            },
          ]}
        />
      )}
    </ComponentPlayground>
  );
};

export const CustomSelectNoMaxHeightPlayground = (props: ComponentPlaygroundProps) => {
  const isVKCOM = props.platform === Platform.VKCOM;
  return (
    <ComponentPlayground {...props} propSets={[{ noMaxHeight: [true] }]}>
      {(props: SelectProps) => (
        <div
          style={{
            height: isVKCOM ? 330 : 370,
            width: isVKCOM ? 300 : undefined,
          }}
        >
          <CustomSelect
            placeholder="Не выбрана"
            data-testid="target-select"
            {...props}
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
              { value: 6, label: 'Гарри Поттер и Дары Смерти' },
            ]}
          />
        </div>
      )}
    </ComponentPlayground>
  );
};
