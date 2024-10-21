import { render, screen } from '@testing-library/react';
import { baselineComponent } from '../../testing/utils';
import { VisuallyHidden } from './VisuallyHidden';
import styles from './VisuallyHidden.module.css';

describe('VisuallyHidden', () => {
  baselineComponent(VisuallyHidden);

  it('uses modifier to keep screen reader focus for input components', () => {
    const { rerender } = render(<VisuallyHidden data-testid="visually-hidden" />);

    const element = screen.getByTestId('visually-hidden');
    expect(element).toHaveClass(styles.host);
    expect(element).not.toHaveClass(styles.focusableInput);

    rerender(<VisuallyHidden data-testid="visually-hidden" Component="input" />);
    const inputElement = screen.getByTestId('visually-hidden');
    expect(inputElement).toHaveClass(styles.host);
    expect(inputElement).toHaveClass(styles.focusableInput);
  });
});
