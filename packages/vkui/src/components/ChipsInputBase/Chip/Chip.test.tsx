import * as React from 'react';
import { render, screen } from '@testing-library/react';
import { baselineComponent, userEvent } from '../../../testing/utils';
import { Chip } from './Chip';

describe('Chip', () => {
  baselineComponent(Chip, {
    // TODO [a11y]: "Certain ARIA roles must be contained by particular parents (aria-required-parent)"
    //              https://dequeuniversity.com/rules/axe/4.5/aria-required-parent?application=axeAPI
    //              "Interactive controls must not be nested (nested-interactive)"
    //              https://dequeuniversity.com/rules/axe/4.5/nested-interactive?application=axeAPI
    a11y: false,
  });

  beforeEach(() => {
    jest.useFakeTimers();
  });

  afterEach(() => {
    jest.runOnlyPendingTimers();
    jest.useRealTimers();
  });

  it('removes chip on onRemove click', async () => {
    const onRemove = jest.fn();

    render(
      <Chip value="white" onRemove={onRemove}>
        Белый
      </Chip>,
    );

    await userEvent.click(screen.getByRole('button'));

    expect(onRemove).toHaveBeenCalled();
  });

  it('hides remove button if readOnly', async () => {
    const result = render(<Chip value="white">Белый</Chip>);

    expect(screen.getByRole('button')).toBeTruthy();

    result.rerender(
      <Chip value="white" readOnly>
        Белый
      </Chip>,
    );
    expect(() => screen.getByRole('button')).toThrow();
  });
});
