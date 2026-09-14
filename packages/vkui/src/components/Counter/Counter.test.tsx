import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
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
      expect(
        getComputedStyle(screen.getByTestId('counter')).getPropertyValue(
          '--vkui_internal--counter_background',
        ),
      ).toBe(testColor);
    });

    it('applies foreground color in contrast mode', () => {
      render(
        <Counter mode="contrast" appearance="custom" color={testColor} data-testid="counter">
          10
        </Counter>,
      );
      expect(
        getComputedStyle(screen.getByTestId('counter')).getPropertyValue(
          '--vkui_internal--counter_foreground',
        ),
      ).toBe(testColor);
    });

    it('applies foreground color in tertiary mode', () => {
      render(
        <Counter mode="tertiary" appearance="custom" color={testColor} data-testid="counter">
          10
        </Counter>,
      );
      expect(
        getComputedStyle(screen.getByTestId('counter')).getPropertyValue(
          '--vkui_internal--counter_foreground',
        ),
      ).toBe(testColor);
    });

    it('does not apply color in inherit mode', () => {
      render(
        <Counter mode="inherit" appearance="custom" color={testColor} data-testid="counter">
          10
        </Counter>,
      );
      const element = screen.getByTestId('counter');
      expect(
        getComputedStyle(element).getPropertyValue('--vkui_internal--counter_background'),
      ).not.toBe(testColor);
      expect(
        getComputedStyle(element).getPropertyValue('--vkui_internal--counter_foreground'),
      ).not.toBe(testColor);
    });
  });
});
