import { render, screen } from '@testing-library/react';
import { baselineComponent } from '../../testing/utils';
import { Counter } from './Counter';

describe('Counter', () => {
  baselineComponent((props) => <Counter {...props}>10</Counter>);

  describe('renders nothing when empty', () => {
    it('Does not render empty counter', () => {
      expect(render(<Counter />).container).toBeEmptyDOMElement();
      expect(render(<Counter>{null}</Counter>).container).toBeEmptyDOMElement();
      expect(render(<Counter>{[]}</Counter>).container).toBeEmptyDOMElement();
    });
  });

  describe('applies custom color', () => {
    const testColor = '#ff0000';

    it('applies background color in primary mode', () => {
      render(
        <Counter mode="primary" appearance="custom" color={testColor} data-testid="counter">
          10
        </Counter>,
      );
      expect(screen.getByTestId('counter')).toHaveStyle({
        '--vkui_internal--counter_background': testColor,
      });
    });

    it('applies foreground color in contrast mode', () => {
      render(
        <Counter mode="contrast" appearance="custom" color={testColor} data-testid="counter">
          10
        </Counter>,
      );
      expect(screen.getByTestId('counter')).toHaveStyle({
        '--vkui_internal--counter_foreground': testColor,
      });
    });

    it('applies foreground color in tertiary mode', () => {
      render(
        <Counter mode="tertiary" appearance="custom" color={testColor} data-testid="counter">
          10
        </Counter>,
      );
      expect(screen.getByTestId('counter')).toHaveStyle({
        '--vkui_internal--counter_foreground': testColor,
      });
    });

    it('does not apply color in inherit mode', () => {
      render(
        <Counter mode="inherit" appearance="custom" color={testColor} data-testid="counter">
          10
        </Counter>,
      );
      const element = screen.getByTestId('counter');
      expect(element).not.toHaveStyle({
        '--vkui_internal--counter_background': testColor,
        '--vkui_internal--counter_foreground': testColor,
      });
    });
  });
});
