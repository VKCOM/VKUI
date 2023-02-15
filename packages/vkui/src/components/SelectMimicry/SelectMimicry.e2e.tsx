/**
 * jest-runners-groups
 * @group e2e
 */

import * as React from 'react';
import { describeScreenshotFuzz } from '../../testing/e2e/utils';
import { SelectMimicry, SelectMimicryProps } from './SelectMimicry';

describe('SelectMimicry', () => {
  describeScreenshotFuzz(
    (props: SelectMimicryProps) => <SelectMimicry placeholder="Не выбрано" {...props} />,
    [
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
    ],
  );
});
