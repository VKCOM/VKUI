import React from 'react';
import { render, screen } from '@testing-library/react';
import { noop } from '@vkontakte/vkjs';
import { baselineComponent } from '../../testing/utils';
import { Snackbar } from './Snackbar';

describe('Snackbar', () => {
  baselineComponent(Snackbar);

  it('custom offsetY', () => {
    render(<Snackbar data-testid="snackbar" onClose={noop} offsetY={200} />);

    expect(screen.getByTestId('snackbar').style.bottom).toBe('200px');
  });
});
