import * as React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { AppRootContext } from '../../components/AppRoot/AppRootContext';
import { setRef } from '../../lib/utils';
import { baselineComponent, mockRect } from '../../testing/utils';
import type { TouchEvent } from '../Touch/Touch';
import { Slider as SliderBase, type SliderMultipleProps, type SliderProps } from './Slider';

const pointerPos = (x: number) => ({ clientX: x, clientY: 10 });

const Slider = ({
  getRootRef: getRootRefProp,
  ...restProps
}: SliderProps | SliderMultipleProps) => {
  const getRootRef: SliderProps['getRootRef'] = (el) => {
    mockRect(el, { w: 100 });
    getRootRefProp && setRef(el, getRootRefProp);
  };
  return <SliderBase data-testid="root" getRootRef={getRootRef} {...restProps} />;
};

describe('Slider', () => {
  baselineComponent((props) => <Slider getAriaLabel={() => 'Slider'} {...props} />);

  describe('uncontrolled', () => {
    it('uses min as fallback', () => {
      const handleChangeForTypeCheck: jest.Mock<void, [number, TouchEvent]> = jest.fn();
      render(<Slider onChange={handleChangeForTypeCheck} />);
      expect(screen.getByRole('slider')).toHaveValue('0');
    });

    it('uses defaultValue', () => {
      render(
        <Slider
          value={5}
          defaultValue={5}
          onChange={(v) => {
            // Проверяем правильно ли авто-определяются типы. Если generic сломается,
            // то TS должен будет ругаться в этом месте (см. InternalGetSliderValueTypeWorkaround).
            return v !== 6;
          }}
        />,
      );
      expect(screen.getByRole('slider')).toHaveValue('5');
    });

    it('uses multiple defaultValue', () => {
      render(<Slider multiple defaultValue={[5, 6]} />);
      const [startSlider, endSlider] = screen.getAllByRole('slider');
      expect(startSlider).toHaveValue('5');
      expect(endSlider).toHaveValue('6');
    });

    it('should use min and max if value doesn`t match them', () => {
      const { rerender } = render(<Slider multiple defaultValue={[-100, 200]} />);
      const [startSlider, endSlider] = screen.getAllByRole('slider');
      expect(startSlider).toHaveValue('0');
      expect(endSlider).toHaveValue('100');

      rerender(<Slider min={10} max={20} multiple defaultValue={[-100, 200]} />);
      expect(startSlider).toHaveValue('10');
      expect(endSlider).toHaveValue('20');
    });
  });

  describe('controlled', () => {
    it('sets value', () => {
      const handleChangeForTypeCheck: jest.Mock<void, [number, TouchEvent]> = jest.fn();
      const { rerender } = render(<Slider value={5} onChange={handleChangeForTypeCheck} />);
      expect(screen.getByRole('slider')).toHaveValue('5');

      rerender(<Slider value={3} />);
      expect(screen.getByRole('slider')).toHaveValue('3');
    });

    it('sets multiple values', () => {
      const { rerender } = render(<Slider multiple value={[5, 6]} />);
      const [startSlider, endSlider] = screen.getAllByRole('slider');
      expect(startSlider).toHaveValue('5');
      expect(endSlider).toHaveValue('6');

      rerender(<Slider multiple value={[3, 7]} />);
      expect(startSlider).toHaveValue('3');
      expect(endSlider).toHaveValue('7');
    });

    it('should overrides defaultValue if value is exist', () => {
      render(<Slider value={6} defaultValue={1} />);
      expect(screen.getByRole('slider')).toHaveValue('6');
    });

    it('should overrides defaultValue if value is exist (multiple)', () => {
      const handleChangeForTypeCheck: jest.Mock<void, [[number, number], TouchEvent]> = jest.fn();
      render(
        <Slider
          multiple
          value={[6, 7]}
          defaultValue={[1, 5]}
          onChange={handleChangeForTypeCheck}
        />,
      );
      const [startSlider, endSlider] = screen.getAllByRole('slider');
      expect(startSlider).toHaveValue('6');
      expect(endSlider).toHaveValue('7');
    });
  });

  describe('change with tap', () => {
    it('moves start', () => {
      const handleChange: jest.Mock<void, [number, TouchEvent]> = jest.fn();
      render(<Slider defaultValue={30} onChange={handleChange} />);
      userEvent.click(screen.getByTestId('root'), pointerPos(20));
      expect(screen.getByRole('slider')).toHaveValue('20');
      expect(handleChange).toHaveBeenLastCalledWith(20, expect.anything());
    });

    it('moves start (multiple)', () => {
      const handleChange: jest.Mock<void, [[number, number], TouchEvent]> = jest.fn();
      render(<Slider multiple defaultValue={[30, 70]} onChange={handleChange} />);
      const [startSlider, endSlider] = screen.getAllByRole('slider');
      userEvent.click(screen.getByTestId('root'), pointerPos(20));
      expect(startSlider).toHaveValue('20');
      expect(endSlider).toHaveValue('70');
      expect(handleChange).toHaveBeenLastCalledWith([20, 70], expect.anything());
    });

    it('moves end', () => {
      render(<Slider defaultValue={70} />);
      userEvent.click(screen.getByTestId('root'), pointerPos(80));
      expect(screen.getByRole('slider')).toHaveValue('80');
    });

    it('moves end (multiple)', () => {
      render(<Slider multiple defaultValue={[30, 70]} />);
      const [startSlider, endSlider] = screen.getAllByRole('slider');
      userEvent.click(screen.getByTestId('root'), pointerPos(80));
      expect(startSlider).toHaveValue('30');
      expect(endSlider).toHaveValue('80');
    });
  });

  describe('change with drag', () => {
    it('moves start', async () => {
      render(<Slider />);
      const slider = screen.getByRole('slider');

      fireEvent.mouseDown(slider);

      fireEvent.mouseMove(slider, pointerPos(40));
      expect(slider).toHaveValue('40');

      fireEvent.mouseMove(slider, pointerPos(50));
      expect(slider).toHaveValue('50');

      fireEvent.mouseUp(slider);
    });

    it('moves start (multiple)', async () => {
      render(<Slider multiple defaultValue={[30, 70]} />);
      const [startSlider, endSlider] = screen.getAllByRole('slider');

      fireEvent.mouseDown(startSlider);

      fireEvent.mouseMove(startSlider, pointerPos(40));
      expect(startSlider).toHaveValue('40');
      expect(endSlider).toHaveValue('70');

      fireEvent.mouseMove(startSlider, pointerPos(50));
      expect(startSlider).toHaveValue('50');
      expect(endSlider).toHaveValue('70');

      fireEvent.mouseUp(startSlider);
    });

    it('moves end (multiple)', async () => {
      render(<Slider multiple defaultValue={[30, 70]} />);
      const [startSlider, endSlider] = screen.getAllByRole('slider');

      fireEvent.mouseDown(endSlider);

      fireEvent.mouseMove(endSlider, pointerPos(40));
      expect(startSlider).toHaveValue('30');
      expect(endSlider).toHaveValue('40');

      fireEvent.mouseMove(endSlider, pointerPos(50));
      expect(startSlider).toHaveValue('30');
      expect(endSlider).toHaveValue('50');

      fireEvent.mouseUp(endSlider);
    });

    it('should prevent change of direction on over drag', () => {
      render(<Slider multiple defaultValue={[30, 70]} />);
      const [startSlider, endSlider] = screen.getAllByRole('slider');

      fireEvent.mouseDown(startSlider);

      fireEvent.mouseMove(startSlider, pointerPos(80));
      expect(startSlider).toHaveValue('70');
      expect(endSlider).toHaveValue('70');

      fireEvent.mouseUp(startSlider);
    });
  });

  describe('with tooltip', () => {
    it('shows tooltip on hover/focus', () => {
      const { rerender } = render(
        <AppRootContext.Provider value={{ keyboardInput: false }}>
          <Slider defaultValue={30} withTooltip />
        </AppRootContext.Provider>,
      );
      const slider = screen.getByRole('slider');

      expect(screen.queryByText('30')).not.toBeInTheDocument();

      // shows tooltip on hover
      userEvent.hover(slider);
      expect(screen.queryByText('30')).toBeInTheDocument();

      // hides on unhover
      userEvent.unhover(slider);
      expect(screen.queryByText('30')).not.toBeInTheDocument();

      // doesn't show tooltip on focus without keyboard
      slider.focus();
      expect(screen.queryByText('30')).not.toBeInTheDocument();

      // shows tooltip on focus with keyboard
      rerender(
        <AppRootContext.Provider value={{ keyboardInput: true }}>
          <Slider defaultValue={30} withTooltip />
        </AppRootContext.Provider>,
      );
      slider.focus();
      expect(screen.queryByText('30')).toBeInTheDocument();

      // hides on blur
      slider.blur();
      expect(screen.queryByText('30')).not.toBeInTheDocument();
    });
  });
});
