import { render, screen } from '@testing-library/react';
import { baselineComponent } from '../../testing/utils';
import { HorizontalCell, HorizontalCellProps } from './HorizontalCell';

const HorizontalCellTest = (props: HorizontalCellProps) => <HorizontalCell data-testid="cell" {...props} />;
const cell = () => screen.getByTestId('cell');

describe('HorizontalCell', () => {
  baselineComponent(HorizontalCell);

  it('Component: HorizontalCell is a custom button by default', () => {
    render(<HorizontalCellTest>HorizontalCell</HorizontalCellTest>);
    expect(cell().tagName.toLowerCase()).toMatch('div');
    expect(cell()).toHaveAttribute('role', 'button');
    expect(cell()).toHaveAttribute('tabindex', '0');
  });

  it('Component: HorizontalCell w/ href is a native link', () => {
    render(<HorizontalCellTest href="https://vk.com">HorizontalCell</HorizontalCellTest>);
    expect(screen.getByRole('link')).toBe(cell());
  });
});
