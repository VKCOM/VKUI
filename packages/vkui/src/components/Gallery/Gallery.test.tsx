import { fireEvent, render, renderHook } from '@testing-library/react';
import { noop } from '@vkontakte/vkjs';
import { baselineComponent } from '../../testing/utils';
import { Gallery } from './Gallery';
import { useAutoPlay } from './hooks';

const mockTimer = () => {
  const timeoutStub = jest.spyOn(window, 'setTimeout').mockImplementation((fn) => {
    fn();
    return 1 as unknown as NodeJS.Timeout;
  });

  const clearTimeoutStub = jest.spyOn(window, 'clearTimeout').mockImplementation(noop);

  return {
    timeoutStub,
    clearTimeoutStub,
  };
};

describe('Gallery', () => {
  baselineComponent(Gallery);
  describe('handles slide count', () => {
    it('prevents slideIndex outside slide count', () => {
      let index;
      render(
        <Gallery onChange={(v) => (index = v)} slideIndex={9}>
          <div />
          <div />
        </Gallery>,
      );
      expect(index).toBe(1);
      render(
        <Gallery onChange={(v) => (index = v)} slideIndex={-9}>
          <div />
          <div />
        </Gallery>,
      );
      expect(index).toBe(0);
    });
    it('handles dynamic slide count', () => {
      let index;
      const setIndex = (v: number) => (index = v);
      const { rerender } = render(
        <Gallery onChange={setIndex} slideIndex={1}>
          <div />
          <div />
        </Gallery>,
      );
      rerender(
        <Gallery onChange={setIndex} slideIndex={1}>
          <div />
        </Gallery>,
      );
      expect(index).toBe(0);
    });
    it('keeps slideIndex when 0 slides', () => {
      const setIndex = jest.fn();
      render(<Gallery onChange={setIndex} slideIndex={10} />);
      expect(setIndex).not.toHaveBeenCalled();
    });

    it('check auto play in controlled component', () => {
      jest.useFakeTimers();
      const { timeoutStub, clearTimeoutStub } = mockTimer();
      let index;
      const setIndex = (v: number) => (index = v);
      render(
        <Gallery onChange={setIndex} slideIndex={0} timeout={100}>
          <div />
          <div />
        </Gallery>,
      );

      expect(index).toBe(1);
      expect(timeoutStub).toHaveBeenCalledTimes(1);
      expect(clearTimeoutStub).toHaveBeenCalledTimes(0);
    });

    it('check auto play in uncontrolled component', () => {
      jest.useFakeTimers();
      const { timeoutStub, clearTimeoutStub } = mockTimer();
      let index;
      const setIndex = (v: number) => (index = v);
      render(
        <Gallery onChange={setIndex} timeout={100}>
          <div />
          <div />
        </Gallery>,
      );

      expect(index).toBe(1);
      expect(timeoutStub).toHaveBeenCalledTimes(1);
      expect(clearTimeoutStub).toHaveBeenCalledTimes(0);
    });
  });
});

describe(useAutoPlay, () => {
  it('should call callback when fire event visibilitychange', () => {
    jest.useFakeTimers();
    const callback = jest.fn();

    const { timeoutStub, clearTimeoutStub } = mockTimer();

    let visibilityState: Document['visibilityState'] = 'visible';

    jest.spyOn(document, 'visibilityState', 'get').mockImplementation(() => visibilityState);

    renderHook(() => useAutoPlay(100, 0, callback));
    expect(timeoutStub.mock.calls[0][1]).toBe(100);

    fireEvent(document, new Event('visibilitychange'));

    expect(timeoutStub).toHaveBeenCalledTimes(2);
    expect(clearTimeoutStub).toHaveBeenCalledTimes(1);
    expect(callback).toHaveBeenCalledTimes(2);

    visibilityState = 'hidden';

    fireEvent(document, new Event('visibilitychange'));
    expect(timeoutStub).toHaveBeenCalledTimes(2);
    expect(clearTimeoutStub).toHaveBeenCalledTimes(2);
    expect(callback).toHaveBeenCalledTimes(2);
  });

  it('should not call callback when timeout = 0', () => {
    jest.useFakeTimers();
    const callback = jest.fn();

    const { timeoutStub, clearTimeoutStub } = mockTimer();

    renderHook(() => useAutoPlay(0, 0, callback));

    expect(timeoutStub).toHaveBeenCalledTimes(0);
    expect(clearTimeoutStub).toHaveBeenCalledTimes(0);
    expect(callback).toHaveBeenCalledTimes(0);
  });
});
