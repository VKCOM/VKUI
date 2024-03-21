import * as React from 'react';
import { render, screen } from '@testing-library/react';
import { ViewWidth } from '../../lib/adaptivity';
import { baselineComponent } from '../../testing/utils';
import { Snackbar } from './Snackbar';
import styles from './Snackbar.module.css';

const getViewWidthStub = jest.fn().mockReturnValue(ViewWidth.MOBILE);
jest.mock('../../hooks/useAdaptivityWithJSMediaQueries', () => ({
  useAdaptivityWithJSMediaQueries() {
    return {
      get viewWidth() {
        return getViewWidthStub();
      },
    };
  },
}));

describe('Snackbar', () => {
  baselineComponent((props) => <Snackbar onClose={jest.fn()} {...props} />);

  it('custom offsetY', () => {
    render(<Snackbar data-testid="snackbar" onClose={jest.fn()} offsetY={200} />);

    expect(screen.getByTestId('snackbar').style.bottom).toBe('200px');
  });

  it('renders in horizontal layout on desktop if layout prop is set', () => {
    getViewWidthStub.mockReturnValue(ViewWidth.DESKTOP);
    const { container, rerender } = render(
      <Snackbar action="Close me" onClose={jest.fn()}>
        Text message
      </Snackbar>,
    );

    // renders in vertical layout on desktop by default
    expect(container.querySelector(`.${styles['Snackbar--layout-vertical']}`)).not.toBeNull();
    expect(container.querySelector(`.${styles['Snackbar--layout-horizontal']}`)).toBeNull();

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
