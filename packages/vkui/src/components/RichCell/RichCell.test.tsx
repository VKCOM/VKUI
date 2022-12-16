import * as React from 'react';
import { baselineComponent } from '../../testing/utils';
import { RichCell } from './RichCell';

describe('RichCell', () => {
  /*
   * a11y: ARIA commands must have an accessible name (aria-command-name)
   *       тест ругается на отсутствие текста, доступного скринридерам.
   *       в реальной жизни мы вряд ли будем так использовать компонент
   */
  baselineComponent((p) => <RichCell {...p}>RichCell</RichCell>);
});
