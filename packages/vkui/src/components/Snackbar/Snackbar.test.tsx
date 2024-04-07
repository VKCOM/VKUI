import * as React from 'react';
import { render, screen } from '@testing-library/react';
import { ViewWidth } from '../../lib/adaptivity';
import { baselineComponent } from '../../testing/utils';
import { AdaptivityProvider } from '../AdaptivityProvider/AdaptivityProvider';
import { Snackbar } from './Snackbar';
import styles from './Snackbar.module.css';

describe('Snackbar', () => {
  baselineComponent((props) => <Snackbar onClose={jest.fn()} {...props} />);

  it('custom offsetY', () => {
    render(<Snackbar data-testid="snackbar" onClose={jest.fn()} offsetY={200} />);

    expect(screen.getByTestId('snackbar').style.bottom).toBe('200px');
  });

  it('renders in horizontal layout on desktop if layout prop is set', () => {
    const { container, rerender } = render(
      <AdaptivityProvider viewWidth={ViewWidth.DESKTOP}>
        <Snackbar action="Close me" onClose={jest.fn()}>
          Text message
        </Snackbar>
      </AdaptivityProvider>,
    );

    // renders in vertical layout on desktop by default
    expect(container.querySelector(`.${styles['Snackbar--layout-none']}`)).not.toBeNull();

    rerender(
      <Snackbar layout="horizontal" action="Close me" onClose={jest.fn()}>
        Text message
      </Snackbar>,
    );
    // renders in horizontal layout on desktop according to layout prop
    expect(container.querySelector(`.${styles['Snackbar--layout-vertical']}`)).toBeNull();
    expect(container.querySelector(`.${styles['Snackbar--layout-horizontal']}`)).not.toBeNull();
  });
});
