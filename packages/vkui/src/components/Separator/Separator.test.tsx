import { render, screen } from '@testing-library/react';
import { baselineComponent } from '../../testing/utils';
import { Separator } from './Separator';
import styles from './Separator.module.css';

describe('Separator', () => {
  baselineComponent(Separator);

  it('should have separator mode className', () => {
    const getSeparator = () => screen.getByTestId('separator');
    const { rerender } = render(<Separator appearance="primary" data-testid="separator" />);

    expect(getSeparator()).toHaveClass(styles.appearancePrimary);

    rerender(<Separator appearance="secondary" data-testid="separator" />);

    expect(getSeparator()).toHaveClass(styles.appearanceSecondary);

    rerender(<Separator appearance="primary-alpha" data-testid="separator" />);

    expect(getSeparator()).toHaveClass(styles.appearancePrimaryAlpha);
  });
});
