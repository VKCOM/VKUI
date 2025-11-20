import * as React from 'react';
import { act, render } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { useBooleanRef } from './useBooleanRef';

const HookTester = React.forwardRef<
  {
    value: boolean;
    setValue: (v: boolean) => void;
    setTrue: () => void;
    setFalse: () => void;
    toggle: () => void;
  } & Record<string, any>,
  { defaultValue?: boolean }
>((props, ref) => {
  const api = useBooleanRef(props.defaultValue);
  React.useImperativeHandle(ref, () => api, [api]);
  return null;
});
HookTester.displayName = 'HookTester';

describe('useBooleanRef', () => {
  it('defaults to false when no argument provided', () => {
    const ref = React.createRef<any>();
    render(<HookTester ref={ref} />);
    expect(ref.current).toBeTruthy();
    expect(ref.current.value).toBe(false);
  });

  it('respects the default value (true)', () => {
    const ref = React.createRef<any>();
    render(<HookTester ref={ref} defaultValue={true} />);
    expect(ref.current.value).toBe(true);
  });

  it('setValue sets the value to true and false', () => {
    const ref = React.createRef<any>();
    render(<HookTester ref={ref} />);
    act(() => {
      ref.current.setValue(true);
    });
    expect(ref.current.value).toBe(true);

    act(() => {
      ref.current.setValue(false);
    });
    expect(ref.current.value).toBe(false);
  });

  it('setTrue sets value to true and setFalse sets value to false', () => {
    const ref = React.createRef<any>();
    render(<HookTester ref={ref} defaultValue={false} />);

    act(() => {
      ref.current.setTrue();
    });
    expect(ref.current.value).toBe(true);

    act(() => {
      ref.current.setFalse();
    });
    expect(ref.current.value).toBe(false);
  });

  it('toggle flips the value', () => {
    const ref = React.createRef<any>();
    render(<HookTester ref={ref} defaultValue={false} />);

    act(() => {
      ref.current.toggle();
    });
    expect(ref.current.value).toBe(true);

    act(() => {
      ref.current.toggle();
    });
    expect(ref.current.value).toBe(false);
  });

  it('combination of operations works correctly', () => {
    const ref = React.createRef<any>();
    render(<HookTester ref={ref} defaultValue={true} />);

    // start true
    expect(ref.current.value).toBe(true);

    act(() => {
      ref.current.setFalse();
    });
    expect(ref.current.value).toBe(false);

    act(() => {
      ref.current.toggle();
    });
    expect(ref.current.value).toBe(true);

    act(() => {
      ref.current.setValue(false);
    });
    expect(ref.current.value).toBe(false);
  });
});
