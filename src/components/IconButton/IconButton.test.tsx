import { baselineComponent } from '../../testing/utils';
import IconButton from './IconButton';
import { render, screen } from '@testing-library/react';

describe('IconButton', () => {
  baselineComponent(IconButton);

  it('correctly handles Component property', () => {
    const { rerender } = render(<IconButton data-testid="target" />);
    expect(screen.getByTestId('target').tagName).toEqual('BUTTON');
    rerender(<IconButton data-testid="target" href="#" />);
    expect(screen.getByTestId('target').tagName).toEqual('A');
    rerender(<IconButton data-testid="target" Component="div" />);
    expect(screen.getByTestId('target').tagName).toEqual('DIV');
  });
});
