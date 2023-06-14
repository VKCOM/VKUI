import * as React from 'react';
import { baselineComponent } from '../../testing/utils';
import { CellButton } from './CellButton';

describe('CellButton', () => {
  baselineComponent((props) => <CellButton {...props}>CellButton</CellButton>);
});
