import * as React from 'react';
import { ComponentPlayground, type ComponentPlaygroundProps } from '@vkui-e2e/playground-helpers';
import { SelectMimicry, type SelectMimicryProps } from './SelectMimicry';

export const SelectMimicryPlayground = (props: ComponentPlaygroundProps) => {
  return (
    <ComponentPlayground
      {...props}
      propSets={[
        {
          children: [undefined, 'Россия'],
          disabled: [undefined, true],
        },
        {
          // самый длинный в мире топоним из одного слова
          // https://ru.wikipedia.org/wiki/Тауматафакатангихангакоауауотаматеатурипукакапикимаунгахоронукупокаифенуакитанатаху
          children: [
            'Вершина холма, где Таматеа, мужчина с большими коленями, который скатывался, ' +
              'забирался и проглатывал горы, известный как поедатель земли, играл на своей флейте для своей возлюбленной',
          ],
          multiline: [undefined, true],
        },
        {
          selectType: ['plain', 'accent'],
          children: ['Россия'],
          $adaptivity: 'y',
        },
        {
          status: ['error', 'valid'],
        },
      ]}
    >
      {(props: SelectMimicryProps) => <SelectMimicry placeholder="Не выбрано" {...props} />}
    </ComponentPlayground>
  );
};
