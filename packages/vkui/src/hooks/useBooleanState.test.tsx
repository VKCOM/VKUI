import { act } from 'react';
import { renderHook } from '@testing-library/react';
import { useBooleanState } from './useBooleanState';

describe('useBooleanState', () => {
  it('returns passed value', () => {
    const { result } = renderHook(useBooleanState, {
      initialProps: false,
    });
    expect(result.current.value).toEqual(false);
  });
  it('sets value to false', () => {
    const { result } = renderHook(useBooleanState, {
      initialProps: true,
    });
    act(() => {
      result.current.setFalse();
    });
    expect(result.current.value).toEqual(false);
  });
  it('sets value to true', () => {
    const { result } = renderHook(useBooleanState, {
      initialProps: false,
    });
    act(() => {
      result.current.setTrue();
    });
    expect(result.current.value).toEqual(true);
  });
  it('toggles value', () => {
    const { result } = renderHook(useBooleanState, {
      initialProps: false,
    });
    act(() => {
      result.current.toggle();
    });
    expect(result.current.value).toEqual(true);
  });

  it('functions remain unchanged', () => {
    const { result } = renderHook(useBooleanState, {
      initialProps: false,
    });

    const firstRender = { ...result.current };

    act(() => {
      result.current.setTrue();
      result.current.setFalse();
      result.current.toggle();
    });

    expect(result.current.setFalse).toBe(firstRender.setFalse);
    expect(result.current.setTrue).toBe(firstRender.setTrue);
    expect(result.current.toggle).toBe(firstRender.toggle);
  });
});
