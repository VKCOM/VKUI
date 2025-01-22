import { render, screen } from '@testing-library/react';
import { baselineComponent } from '../../testing/utils';
import { Progress } from './Progress';
import styles from './Progress.module.css';

describe('Progress', () => {
  baselineComponent(Progress);

  it('Custom height', () => {
    render(<Progress data-testid="progress" height={10} />);

    expect(screen.getByTestId('progress')).toHaveStyle('height: 10px');
    expect(screen.getByTestId('progress')).toHaveStyle('border-radius: 5px');
  });

  it('Custom color', () => {
    const { rerender } = render(
      <Progress data-testid="progress" appearance="custom" color="#f3f405" />,
    );

    expect(screen.getByTestId('progress')).toHaveStyle(
      '--vkui_internal_Progress_background_color: #f3f405',
    );

    // @ts-expect-error: TS2322 специально проверяем кесй, который не проходит по типам
    rerender(<Progress data-testid="progress" appearance="accent" color="#f3f405" />);

    expect(screen.getByTestId('progress')).not.toHaveStyle(
      '--vkui_internal_Progress_background_color: #f3f405',
    );
  });

  it('Progress css variable', () => {
    render(<Progress data-testid="progress" value={20} />);
    expect(screen.getByTestId('progress')).toHaveStyle('--vkui_internal_Progress_progress: 20');
  });

  it('Progress trackDisable', () => {
    render(<Progress data-testid="progress" trackDisable />);
    expect(screen.getByTestId('progress')).toHaveClass(styles.trackDisable);
  });
});
