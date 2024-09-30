import { render, screen } from '@testing-library/react';
import { baselineComponent } from '../../testing/utils';
import { appearanceClassNames, CellButton } from './CellButton';
import styles from './CellButton.module.css';

describe('CellButton', () => {
  baselineComponent((props) => <CellButton {...props}>CellButton</CellButton>);

  it.each(['neutral', 'negative', 'accent', 'accent-invariable', undefined] as const)(
    'should have expected className for appearance="%s"',
    (appearance) => {
      render(
        <CellButton appearance={appearance} data-testid="cell">
          Check
        </CellButton>,
      );
      expect(screen.getByTestId('cell')).toHaveClass(
        appearance ? appearanceClassNames[appearance] : appearanceClassNames.neutral,
      );
    },
  );
  it('should have appearance="accent" by default if centered', () => {
    render(
      <CellButton centered data-testid="cell">
        Check
      </CellButton>,
    );
    expect(screen.getByTestId('cell')).toHaveClass(styles.centered);
    expect(screen.getByTestId('cell')).toHaveClass(appearanceClassNames.accent);
  });
});
