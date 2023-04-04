import * as React from 'react';
import { ComponentPlayground, type ComponentPlaygroundProps } from '@vkui-e2e/playground-helpers';
import { NativeSelect, type NativeSelectProps } from './NativeSelect';

export const NativeSelectPlayground = (props: ComponentPlaygroundProps) => {
  return (
    <ComponentPlayground<NativeSelectProps>
      {...props}
      propSets={[
        {
          value: [undefined, 'm'],
          disabled: [undefined, true],
          align: [undefined, 'center', 'right'],
        },
        {
          $adaptivity: 'y',
        },
        {
          placeholder: [undefined, 'placeholder'],
          value: ['', 'm'],
        },
        {
          // самый длинный в мире топоним из одного слова
          // https://ru.wikipedia.org/wiki/Тауматафакатангихангакоауауотаматеатурипукакапикимаунгахоронукупокаифенуакитанатаху
          value: ['th'],
          multiline: [undefined, true],
        },
        {
          status: ['error', 'valid'],
        },
      ]}
    >
      {(props) => (
        <NativeSelect placeholder="Не выбран" {...props}>
          <option value="m">Мужской</option>
          <option value="f">Женский</option>
          <option value="th">
            Вершина холма, где Таматеа, мужчина с большими коленями, который скатывался, забирался и
            проглатывал горы, известный как поедатель земли, играл на своей флейте для своей
            возлюбленной
          </option>
        </NativeSelect>
      )}
    </ComponentPlayground>
  );
};
