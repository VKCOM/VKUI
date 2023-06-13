import * as React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { baselineComponent } from '../../testing/utils';
import { Chip } from './Chip';

describe('Chip', () => {
  baselineComponent(Chip, {
    // TODO [a11y]: "Certain ARIA roles must be contained by particular parents (aria-required-parent)"
    //              https://dequeuniversity.com/rules/axe/4.5/aria-required-parent?application=axeAPI
    //              "Interactive controls must not be nested (nested-interactive)"
    //              https://dequeuniversity.com/rules/axe/4.5/nested-interactive?application=axeAPI
    a11y: false,
  });

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
