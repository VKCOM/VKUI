import * as React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { baselineComponent } from '../../testing/utils';
import { Chip } from './Chip';

describe('Chip', () => {
  baselineComponent(Chip);

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
