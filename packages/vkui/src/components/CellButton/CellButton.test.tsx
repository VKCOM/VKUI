import * as React from 'react';
import { baselineComponent } from '../../testing/utils';
import { CellButton } from './CellButton';

describe('CellButton', () => {
  /*
   * a11y: ARIA commands must have an accessible name (aria-command-name)
   *       тест ругается на отсутствие текста, доступного скринридерам.
   *       в реальной жизни мы вряд ли будем так использовать компонент
   */
  baselineComponent((p) => <CellButton {...p}>CellButton</CellButton>);
});
