import { renderHook } from '@testing-library/react';
import { useObjectMemo } from './useObjectMemo';

describe(useObjectMemo, () => {
  it('has object on first render', () => {
    const { result } = renderHook(useObjectMemo, {
      initialProps: { hello: 123 },
    });
    expect(result.current).toEqual({ hello: 123 });
  });
  it('memoizes object', () => {
    const stableObject = { hello: 123 };
    const { result, rerender } = renderHook(useObjectMemo, {
      initialProps: stableObject,
    });
    rerender({ hello: 123 });
    expect(result.current).toBe(stableObject);
  });
  it('updates object on change', () => {
    const stableObject = { hello: 123 };
    const { result, rerender } = renderHook(useObjectMemo, {
      initialProps: stableObject,
    });
    rerender({ hello: 234 });
    expect(result.current).toEqual({ hello: 234 });
  });
});
