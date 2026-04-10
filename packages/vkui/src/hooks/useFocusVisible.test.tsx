import { act } from 'react';
import { renderHook } from '@testing-library/react';
import { useFocusVisible } from './useFocusVisible';
import {
  DISABLE_KEYBOARD_INPUT_EVENT_NAME,
  ENABLE_KEYBOARD_INPUT_EVENT_NAME,
} from './useKeyboardInputTracker';

describe('useFocusVisible', () => {
  it('Sets focusVisible: true onFocus', () => {
    const { result } = renderHook(() => useFocusVisible());

    act(() => {
      document.dispatchEvent(new CustomEvent(ENABLE_KEYBOARD_INPUT_EVENT_NAME));
    });

    act(() => {
      result.current.onFocus({ stopPropagation: vi.fn() } as any);
    });

    expect(result.current.focusVisible).toEqual(true);
  });
  it("Doesn't set focusVisible: true onFocus when not keyboardInput", () => {
    const { result } = renderHook(() => useFocusVisible());

    act(() => {
      document.dispatchEvent(new CustomEvent(DISABLE_KEYBOARD_INPUT_EVENT_NAME));
    });

    act(() => {
      result.current.onFocus({ stopPropagation: vi.fn() } as any);
    });

    expect(result.current.focusVisible).toEqual(false);
  });
  it('Sets focusVisible: false onBlur', () => {
    const { result } = renderHook(() => useFocusVisible());

    act(() => {
      document.dispatchEvent(new CustomEvent(ENABLE_KEYBOARD_INPUT_EVENT_NAME));
    });

    act(() => {
      result.current.onFocus({ stopPropagation: vi.fn() } as any);
    });
    act(() => {
      result.current.onBlur({ stopPropagation: vi.fn() } as any);
    });

    expect(result.current.focusVisible).toEqual(false);
  });
});
