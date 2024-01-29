import * as React from 'react';
import { render, screen } from '@testing-library/react';
import { baselineComponent } from '../../testing/utils';
import { Snackbar } from './Snackbar';

describe('Snackbar', () => {
  baselineComponent((props) => <Snackbar onClose={jest.fn()} {...props} />);

  it('custom offsetY', () => {
    render(<Snackbar data-testid="snackbar" onClose={jest.fn()} offsetY={200} />);

    expect(screen.getByTestId('snackbar').style.bottom).toBe('200px');
  });
});
