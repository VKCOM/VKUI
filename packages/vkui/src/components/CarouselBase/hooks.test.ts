import { renderHook } from '@testing-library/react';
import { ANIMATION_DURATION } from './constants';
import { useSlideAnimation } from './hooks';

const mockRAF = () => {
  let lastTime = 0;

  vi.spyOn(window, 'requestAnimationFrame').mockImplementation((fn) => {
    lastTime = lastTime + ANIMATION_DURATION;
    fn(lastTime);
    return lastTime;
  });
};

describe(useSlideAnimation, () => {
  it('should call drawCallback when startAnimation', () => {
    mockRAF();
    const animationStub = vi.fn();
    const hookResult = renderHook(() => useSlideAnimation());
    hookResult.result.current.addToAnimationQueue(
      hookResult.result.current.getAnimateFunction(animationStub),
    );
    hookResult.result.current.startAnimation();
    expect(animationStub.mock.calls).toEqual([[0], [1]]);
  });
});
