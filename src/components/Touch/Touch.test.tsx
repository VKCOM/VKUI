import { baselineComponent } from '../../testing/utils';
import { render, fireEvent, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { noop } from '../../lib/utils';
import Touch from './Touch';

const threshold = 10;
const slideRight = (target: HTMLElement) => {
  fireEvent.mouseDown(target, { clientX: 0 });
  fireEvent.mouseMove(target, { clientX: threshold });
  fireEvent.mouseUp(target, { clientX: threshold });
  fireEvent.click(target);
};

describe('Touch', () => {
  baselineComponent(Touch);

  it('does not leak listeners when unmounting during gesture', () => {
    let moved = false;
    const { unmount } = render(<Touch onMove={() => moved = true} data-testid="touch" />);
    fireEvent.mouseDown(screen.getByTestId('touch'), { clientX: 0 });
    unmount();
    fireEvent.mouseMove(document.body, { clientX: threshold });
    expect(moved).toBe(false);
  });

  describe('prevents click after slide', () => {
    it('does not prevent link click', () => {
      let event: Event;
      render(
        <Touch>
          <a href="/hello" onClick={(e) => event = e.nativeEvent}>link</a>
        </Touch>);
      userEvent.click(screen.getByText('link'));
      expect(event.defaultPrevented).toBe(false);
    });
    it('prevents link click after slide', () => {
      let event: Event;
      render(
        <Touch onMove={noop}>
          <a href="/hello" onClick={(e) => event = e.nativeEvent}>link</a>
        </Touch>);
      slideRight(screen.getByRole('link'));
      expect(event.defaultPrevented).toBe(true);
    });
    it('does not fire click after slide if noSlideClick=true', () => {
      let clicked = {
        container: false,
        touch: false,
        content: false,
      };
      render(
        <div onClick={() => clicked.container = true}>
          <Touch onMove={noop} onClick={() => clicked.touch = true} noSlideClick>
            <div onClick={() => clicked.content = true} data-testid="inner" />
          </Touch>
        </div>);
      slideRight(screen.getByTestId('inner'));
      expect(clicked.container).toBe(false);
      expect(clicked.touch).toBe(false);
      // expect(clicked.content).toBe(false);
    });
  });
});
