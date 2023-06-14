import * as React from 'react';
import { baselineComponent } from '../../../testing/utils';
import { CellCheckbox } from './CellCheckbox';

describe('CellCheckbox', () => {
  baselineComponent((props) => (
    <label>
      CellCheckbox <CellCheckbox {...props} />
    </label>
  ));
});
