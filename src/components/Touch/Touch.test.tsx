import { baselineComponent } from '../../testing/utils';
import Touch from './Touch';
import { render, screen, fireEvent } from '@testing-library/react';

const threshold = 10;

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
});
