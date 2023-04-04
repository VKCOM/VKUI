import * as React from 'react';
import { ComponentPlayground, type ComponentPlaygroundProps } from '@vkui-e2e/playground-helpers';
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
