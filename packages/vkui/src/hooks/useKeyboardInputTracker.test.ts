import { act, fireEvent, renderHook } from '@testing-library/react';
import { FOCUS_ALLOW_LIST_KEYS, Keys } from '../lib/accessibility';
import {
  DISABLE_KEYBOARD_INPUT_EVENT_NAME,
  ENABLE_KEYBOARD_INPUT_EVENT_NAME,
  useKeyboardInputTracker,
} from './useKeyboardInputTracker';

describe(useKeyboardInputTracker, () => {
  const KEYBOARD_EXPECTED_EVENT = { key: Keys.TAB, code: Keys.TAB };
  const ALL_KEYBOARD_EXPECTED_EVENTS = Array.from(FOCUS_ALLOW_LIST_KEYS).map((key) => ({
    key,
    code: key,
  }));
  it.each(ALL_KEYBOARD_EXPECTED_EVENTS)(
    'should returns true when user calls keyDown event with code $key',
    (event) => {
      const result = renderHook(() => useKeyboardInputTracker());
      expect(result.result.current.current).toBeFalsy();

      fireEvent.keyDown(document, event);
      expect(result.result.current.current).toBeTruthy();

      act(() => {
        document.dispatchEvent(new Event(DISABLE_KEYBOARD_INPUT_EVENT_NAME, { bubbles: true }));
      });
      expect(result.result.current.current).toBeFalsy();
    },
  );

  it('should returns true/false when user calls custom event', () => {
    const result = renderHook(() => useKeyboardInputTracker());

    act(() => {
      document.dispatchEvent(new Event(ENABLE_KEYBOARD_INPUT_EVENT_NAME, { bubbles: true }));
    });
    expect(result.result.current.current).toBeTruthy();

    act(() => {
      document.dispatchEvent(new Event(DISABLE_KEYBOARD_INPUT_EVENT_NAME, { bubbles: true }));
    });
    expect(result.result.current.current).toBeFalsy();
  });

  it('should returns false when user calls mouseDown event', () => {
    const result = renderHook(() => useKeyboardInputTracker());

    fireEvent.keyDown(document, KEYBOARD_EXPECTED_EVENT);
    expect(result.result.current.current).toBeTruthy();

    fireEvent.mouseDown(document);
    expect(result.result.current.current).toBeFalsy();
  });

  it('should returns false when user calls touchStart event', () => {
    const result = renderHook(() => useKeyboardInputTracker());

    fireEvent.keyDown(document, KEYBOARD_EXPECTED_EVENT);
    expect(result.result.current.current).toBeTruthy();

    fireEvent.touchStart(document);
    expect(result.result.current.current).toBeFalsy();
  });

  it('should cleanups events after unmount', () => {
    const result = renderHook(() => useKeyboardInputTracker());

    fireEvent.keyDown(document, KEYBOARD_EXPECTED_EVENT);
    expect(result.result.current.current).toBeTruthy();

    fireEvent.touchStart(document);
    expect(result.result.current.current).toBeFalsy();

    result.unmount();

    fireEvent.keyDown(document, KEYBOARD_EXPECTED_EVENT);
    expect(result.result.current.current).toBeFalsy();
  });
});
