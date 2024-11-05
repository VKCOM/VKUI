import { act } from 'react';
import { renderHook } from '@testing-library/react';
import { useCounter } from './useCounter';

describe('useCounter', () => {
  it('returns default value', () => {
    const { result } = renderHook(useCounter);
    expect(result.current[0]).toEqual(0);
  });

  it('returns passed value with initialProps number', () => {
    const { result } = renderHook(useCounter, {
      initialProps: 99,
    });
    expect(result.current[0]).toEqual(99);
  });
  it('returns passed value with initialProps function', () => {
    const { result } = renderHook(useCounter, {
      initialProps: () => 99,
    });
    expect(result.current[0]).toEqual(99);
  });

  it('increment value', () => {
    const { result } = renderHook(useCounter);
    act(() => {
      result.current[1].increment();
      result.current[1].increment();
    });
    expect(result.current[0]).toEqual(2);
  });
  it('increment value with delta', () => {
    const { result } = renderHook(useCounter);
    act(() => {
      result.current[1].increment(5);
      result.current[1].increment(5);
    });
    expect(result.current[0]).toEqual(10);
  });

  it('decrement value', () => {
    const { result } = renderHook(useCounter);
    act(() => {
      result.current[1].decrement();
      result.current[1].decrement();
    });
    expect(result.current[0]).toEqual(-2);
  });
  it('decrement value with delta', () => {
    const { result } = renderHook(useCounter);
    act(() => {
      result.current[1].decrement(5);
      result.current[1].decrement(5);
    });
    expect(result.current[0]).toEqual(-10);
  });

  it('setCount value', () => {
    const { result } = renderHook(useCounter);
    act(() => {
      result.current[1].setCount(5);
    });
    expect(result.current[0]).toEqual(5);
  });

  it('actions not change after re-render', () => {
    const { result } = renderHook(useCounter);
    const firstRenderActions = result.current[1];

    act(() => {
      result.current[1].increment();
    });

    expect(result.current[1]).toEqual(firstRenderActions);
    expect(result.current[1].increment).toEqual(firstRenderActions.increment);
  });
});
