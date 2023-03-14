import * as React from 'react';
import { a11yBasicTest } from '../../testing/a11y';
import { CellButton } from './CellButton';

describe('CellButton', () => {
  a11yBasicTest((props) => <CellButton {...props}>Добавить новую школу</CellButton>);
});
