import { act } from 'react';
import { renderHook } from '@testing-library/react';
import { useBooleanState } from './useBooleanState';

describe('useBooleanState', () => {
  it('returns passed value', () => {
    const { result } = renderHook(useBooleanState, {
      initialProps: false,
    });
    expect(result.current[0]).toEqual(false);
  });
  it('sets value to false', () => {
    const { result } = renderHook(useBooleanState, {
      initialProps: true,
    });
    act(() => {
      result.current[2]();
    });
    expect(result.current[0]).toEqual(false);
  });
  it('sets value to true', () => {
    const { result } = renderHook(useBooleanState, {
      initialProps: false,
    });
    act(() => {
      result.current[1]();
    });
    expect(result.current[0]).toEqual(true);
  });
  it('toggles value', () => {
    const { result } = renderHook(useBooleanState, {
      initialProps: false,
    });
    act(() => {
      result.current[3]();
    });
    expect(result.current[0]).toEqual(true);
  });

  it('functions remain unchanged', () => {
    const { result } = renderHook(useBooleanState, {
      initialProps: false,
    });

    const firstRender = { ...result.current };

    act(() => {
      result.current[1]();
      result.current[2]();
      result.current[3]();
    });

    expect(result.current[1]).toBe(firstRender[1]);
    expect(result.current[2]).toBe(firstRender[2]);
    expect(result.current[3]).toBe(firstRender[3]);
  });
});
