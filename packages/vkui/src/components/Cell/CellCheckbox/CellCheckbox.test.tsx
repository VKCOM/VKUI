import * as React from 'react';
import { baselineComponent } from '../../../testing/utils';
import { Cell } from '../Cell';

describe('CellCheckbox', () => {
  baselineComponent((props) => (
    <Cell mode="selectable" {...props}>
      CellCheckbox
    </Cell>
  ));
});
