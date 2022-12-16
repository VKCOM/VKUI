import * as React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { baselineComponent } from '../../testing/utils';
import { Chip } from './Chip';

describe('Chip', () => {
  /*
   * a11y: ARIA toggle fields must have an accessible name (aria-toggle-field-name)
   *       тест ругается на отсутствие текста, доступного скринридерам.
   *       в реальной жизни мы вряд ли будем так использовать компонент
   */
  baselineComponent((p) => (
    <Chip value="chip" {...p}>
      Chip
    </Chip>
  ));

  it('removes chip on onRemove click', () => {
    const onRemove = jest.fn();

    render(
      <Chip value="white" onRemove={onRemove}>
        Белый
      </Chip>,
    );

    userEvent.click(screen.getByRole('button'));

    expect(onRemove).toHaveBeenCalled();
  });
});
