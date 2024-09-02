import { act } from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import { Icon12Add } from '@vkontakte/icons';
import { Button } from '../../../components/Button/Button';
import { baselineComponent, userEvent } from '../../../testing/utils';
import { ImageBaseOverlay, type ImageBaseOverlayProps } from './ImageBaseOverlay';
import styles from './ImageBaseOverlay.module.css';

const ImageBaseOverlayClickableTest = (props: Omit<ImageBaseOverlayProps, 'children'>) => (
  <ImageBaseOverlay
    data-testid="overlay"
    aria-label="Интерактивная Кнопка"
    {...props}
    disableInteractive={false}
  >
    <Icon12Add />
  </ImageBaseOverlay>
);

const ImageBaseOverlayNonClickableTest = (
  props: Omit<ImageBaseOverlayProps, 'children' | 'onClick'>,
) => (
  <ImageBaseOverlay data-testid="overlay" {...props} disableInteractive>
    <Button data-testid="button1">Button</Button>
    <Button data-testid="button2">Button</Button>
  </ImageBaseOverlay>
);

describe(ImageBaseOverlay, () => {
  baselineComponent(ImageBaseOverlayClickableTest);

  it('focus event works as expected without noInteractive', async () => {
    render(<ImageBaseOverlayClickableTest />);
    const element = screen.getByTestId('overlay');

    await userEvent.tab();
    expect(element).toHaveFocus();
    act(jest.runAllTimers);
    await userEvent.tab();
    expect(document.querySelector(`.${styles['ImageBaseOverlay--visible']}`)).toBeNull();
  });

  it('focus event works as expected with noInteractive', async () => {
    render(<ImageBaseOverlayNonClickableTest />);
    const button1 = screen.getByTestId('button1');
    const button2 = screen.getByTestId('button2');

    await userEvent.tab();
    expect(button1).toHaveFocus();
    act(jest.runAllTimers);
    expect(document.querySelector(`.${styles['ImageBaseOverlay--visible']}`)).not.toBeNull();
    await userEvent.tab();
    expect(button2).toHaveFocus();
    act(jest.runAllTimers);
    expect(document.querySelector(`.${styles['ImageBaseOverlay--visible']}`)).not.toBeNull();
    await userEvent.tab();
    act(jest.runAllTimers);
    expect(document.querySelector(`.${styles['ImageBaseOverlay--visible']}`)).toBeNull();
  });

  describe('works as clickable element', () => {
    it('appears as clickable element', () => {
      render(<ImageBaseOverlayClickableTest />);

      const element = screen.getByTestId('overlay');

      expect(element.tagName.toLowerCase()).toMatch('div');
      expect(element).toHaveAttribute('role', 'button');
      expect(element).toHaveAttribute('tabindex', '0');
      expect(document.querySelector(`.${styles['ImageBaseOverlay--clickable']}`)).not.toBeNull();
    });

    it('handles onClick prop', () => {
      const handleClick = jest.fn();
      render(
        <ImageBaseOverlayClickableTest onClick={handleClick} disableInteractive={undefined} />,
      );

      fireEvent.click(screen.getByTestId('overlay'));
      expect(handleClick).toHaveBeenCalledTimes(1);
    });

    it('handles onClick prop by keyboard Enter & Space event', () => {
      const handleClick = jest.fn();
      render(<ImageBaseOverlayClickableTest onClick={handleClick} />);

      const element = screen.getByTestId('overlay');

      act(() => element.focus());

      // onClick gets called on Enter and Space
      fireEvent.keyDown(element, { key: 'Enter', code: 'Enter' });
      expect(handleClick).toHaveBeenCalledTimes(1);

      fireEvent.keyDown(element, { key: ' ', code: 'Space' });
      expect(handleClick).toHaveBeenCalledTimes(2);
    });
  });

  describe('works as wrapper for clickable elements', () => {
    it('appears as non clickable element', () => {
      render(<ImageBaseOverlayNonClickableTest />);
      const element = screen.getByTestId('overlay');

      expect(element.tagName.toLowerCase()).toMatch('div');
      expect(element).not.toHaveAttribute('role', 'button');
      expect(element).not.toHaveAttribute('tabindex', '0');
      expect(document.querySelector(`.${styles['ImageBaseOverlay--clickable']}`)).toBeNull();
    });
  });
});
