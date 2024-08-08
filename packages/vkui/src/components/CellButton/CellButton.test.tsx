import { render, screen } from '@testing-library/react';
import { baselineComponent } from '../../testing/utils';
import { CellButton } from './CellButton';
import styles from './CellButton.module.css';

describe('CellButton', () => {
  baselineComponent((props) => <CellButton {...props}>CellButton</CellButton>);

  it('should have danger className with mode danger', () => {
    render(
      <CellButton mode="danger" data-testid="cell">
        Check
      </CellButton>,
    );
    expect(screen.getByTestId('cell')).toHaveClass(styles['CellButton--mode-danger']);
  });
  it('should have danger className with mode danger', () => {
    render(
      <CellButton centered data-testid="cell">
        Check
      </CellButton>,
    );
    expect(screen.getByTestId('cell')).toHaveClass(styles['CellButton--centered']);
  });
});
