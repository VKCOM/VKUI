import { render, screen } from '@testing-library/react';
import { baselineComponent } from '../../testing/utils';
import { AspectRatio } from './AspectRatio';
import styles from './AspectRatio.module.css';

describe(AspectRatio, () => {
  baselineComponent(AspectRatio);

  it('check mode stretch has specific className', () => {
    render(<AspectRatio data-testid="ratio" ratio={16 / 9} mode="stretch" />);
    expect(screen.getByTestId('ratio')).toHaveClass(styles.modeStretch);
  });

  it('check using custom ratio', () => {
    const { rerender } = render(
      <AspectRatio data-testid="ratio" ratio="var(--custom-aspect-ratio-var)" />,
    );
    expect(screen.getByTestId('ratio')).toHaveStyle(
      '--vkui_internal--aspect_ratio: var(--custom-aspect-ratio-var);',
    );

    rerender(<AspectRatio data-testid="ratio" ratio="calc(16 / 9)" />);
    expect(screen.getByTestId('ratio')).toHaveStyle('--vkui_internal--aspect_ratio: calc(16 / 9);');
  });
});
