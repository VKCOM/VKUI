import { render, screen } from '@testing-library/react';
import { baselineComponent } from '../../testing/utils';
import { Separator } from './Separator';
import styles from './Separator.module.css';

describe('Separator', () => {
  baselineComponent(Separator);

  it('should have separator mode className', () => {
    const getSeparator = () => screen.getByTestId('separator');
    const { rerender } = render(<Separator mode="primary" data-testid="separator" />);

    expect(getSeparator()).toHaveClass(styles.modePrimary);

    rerender(<Separator mode="secondary" data-testid="separator" />);

    expect(getSeparator()).toHaveClass(styles.modeSecondary);

    rerender(<Separator mode="primary-alpha" data-testid="separator" />);

    expect(getSeparator()).toHaveClass(styles.modePrimaryAlpha);
  });
});
