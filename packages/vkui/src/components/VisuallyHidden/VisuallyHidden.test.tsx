import * as React from 'react';
import { render, screen } from '@testing-library/react';
import { baselineComponent } from '../../testing/utils';
import { VisuallyHidden } from './VisuallyHidden';
import styles from './VisuallyHidden.module.css';

describe('VisuallyHidden', () => {
  baselineComponent(VisuallyHidden);

  it('uses modifier to keep screen reader focus for input components', () => {
    const { rerender } = render(<VisuallyHidden data-testid="visually-hidden" />);

    const element = screen.getByTestId('visually-hidden');
    expect(element).toHaveClass(styles['VisuallyHidden']);
    expect(element).not.toHaveClass(styles['VisuallyHidden--focusable-input']);

    rerender(<VisuallyHidden data-testid="visually-hidden" Component="input" />);
    const inputElement = screen.getByTestId('visually-hidden');
    expect(inputElement).toHaveClass(styles['VisuallyHidden']);
    expect(inputElement).toHaveClass(styles['VisuallyHidden--focusable-input']);
  });
});
