import * as React from 'react';
import { screen, render } from '@testing-library/react';
import { AdaptivityProvider } from '../AdaptivityProvider/AdaptivityProvider';
import { baselineComponent } from '../../testing/utils';
import { SizeType } from '../../lib/adaptivity';
import { SimpleCell } from './SimpleCell';

describe('SimpleCell', () => {
  /*
   * a11y: ARIA commands must have an accessible name (aria-command-name)
   *       тест ругается на отсутствие текста, доступного скринридерам.
   *       в реальной жизни мы вряд ли будем так использовать компонент
   */
  baselineComponent((p) => <SimpleCell {...p}>SimpleCell</SimpleCell>);

  it('[typography] indicator is a span regardless of sizeY', () => {
    const { rerender } = render(
      <AdaptivityProvider sizeY={SizeType.REGULAR}>
        <SimpleCell indicator="Русский">Язык</SimpleCell>
      </AdaptivityProvider>,
    );
    expect(screen.getByText('Русский').tagName.toLowerCase()).toMatch('span');

    rerender(
      <AdaptivityProvider sizeY={SizeType.COMPACT}>
        <SimpleCell indicator="English">Language</SimpleCell>
      </AdaptivityProvider>,
    );
    expect(screen.getByText('English').tagName.toLowerCase()).toMatch('span');
  });
});
