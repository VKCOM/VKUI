import * as React from 'react';
import { act, renderHook } from '@testing-library/react';
import {
  AppRootContext,
  DEFAULT_APP_ROOT_CONTEXT_VALUE,
} from '../components/AppRoot/AppRootContext';
import { useFocusVisible } from './useFocusVisible';

const wrapper =
  (keyboardInput: boolean) =>
  ({ children }: { children?: React.ReactNode }) =>
    (
      <AppRootContext.Provider
        value={{
          ...DEFAULT_APP_ROOT_CONTEXT_VALUE,
          keyboardInput,
        }}
      >
        {children}
      </AppRootContext.Provider>
    );

describe('useFocusVisible', () => {
  it('Sets focusVisible: true onFocus', () => {
    const { result } = renderHook(() => useFocusVisible(), {
      wrapper: wrapper(true),
    });

    act(() => {
      result.current.onFocus({ stopPropagation: jest.fn() } as any);
    });

    expect(result.current.focusVisible).toEqual(true);
  });
  it("Doesn't set focusVisible: true onFocus when not keyboardInput", () => {
    const { result } = renderHook(() => useFocusVisible(), {
      wrapper: wrapper(false),
    });

    act(() => {
      result.current.onFocus({ stopPropagation: jest.fn() } as any);
    });

    expect(result.current.focusVisible).toEqual(false);
  });
  it('Sets focusVisible: false onBlur', () => {
    const { result } = renderHook(() => useFocusVisible(), {
      wrapper: wrapper(true),
    });

    act(() => {
      result.current.onFocus({ stopPropagation: jest.fn() } as any);
    });
    act(() => {
      result.current.onBlur({ stopPropagation: jest.fn() } as any);
    });

    expect(result.current.focusVisible).toEqual(false);
  });
});
