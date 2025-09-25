import { act, renderHook } from '@testing-library/react';
import { useDateInputValue } from './hooks';

describe('useMergedState', () => {
  it('works in uncontrolled mode', () => {
    const { result } = renderHook(() => useDateInputValue({}));

    expect(result.current.value).toBe(null);

    const newDate = new Date();

    act(() => {
      result.current.updateValue(newDate);
    });

    expect(result.current.value).toBe(newDate);
    expect(result.current.getLastUpdatedValue()).toBe(newDate);
  });

  it('works in uncontrolled mode with defaultValue', () => {
    const defaultValue = new Date();
    const { result } = renderHook(() => useDateInputValue({ defaultValue }));

    expect(result.current.value).toBe(defaultValue);

    const newDate = new Date();
    act(() => {
      result.current.updateValue(newDate);
    });

    expect(result.current.value).toBe(newDate);
  });

  it('works in controlled mode', () => {
    const onChange = vi.fn();
    const initialValue = new Date();
    const { result, rerender } = renderHook((props) => useDateInputValue(props), {
      initialProps: { value: initialValue, onChange },
    });

    expect(result.current.value).toBe(initialValue);
    const newDate = new Date();

    act(() => {
      result.current.updateValue(newDate);
    });

    expect(result.current.value).toBe(initialValue);
    expect(onChange).toHaveBeenCalledWith(newDate);

    const updatedValue = new Date();
    rerender({ value: updatedValue, onChange });
    expect(result.current.value).toBe(updatedValue);
    expect(result.current.getLastUpdatedValue()).toBe(updatedValue);
  });

  it('allows direct updates of the internal state', () => {
    const { result } = renderHook(() => useDateInputValue({}));

    const newValue = new Date();
    act(() => {
      result.current.setInternalValue(newValue);
    });

    expect(result.current.value).toBe(newValue);
  });

  it('respects the value precedence (value > defaultValue > defaultStateValue)', () => {
    const value = new Date();
    const defaultValue = new Date();
    const { result } = renderHook(() =>
      useDateInputValue({
        value,
        defaultValue,
      }),
    );

    expect(result.current.value).toBe(value);
  });

  it('correctly handles mode switching', () => {
    const { result, rerender } = renderHook((props) => useDateInputValue(props), {
      initialProps: {},
    });

    expect(result.current.value).toBe(null);

    const controlledValue = new Date();
    rerender({ value: controlledValue });
    expect(result.current.value).toBe(controlledValue);

    rerender({});
    expect(result.current.value).toBe(controlledValue);
  });

  it('correctly clear value', () => {
    const defaultValue = new Date();
    const onChange = vi.fn();
    const { result } = renderHook(() => useDateInputValue({ defaultValue, onChange }));

    expect(result.current.value).toBe(defaultValue);
    act(() => {
      result.current.clearValue();
    });

    expect(result.current.value).toBe(null);
  });
});
