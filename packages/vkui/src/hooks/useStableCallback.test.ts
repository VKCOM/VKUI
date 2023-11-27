import * as React from 'react';
import { renderHook } from '@testing-library/react';
import { useStableCallback } from './useStableCallback';

describe(useStableCallback, () => {
  it('should save first provided fn', () => {
    const fn1 = jest.fn();
    const stableCallback = renderHook((fn) => useStableCallback(fn), {
      initialProps: fn1,
    });
    const memo = renderHook((fn) => React.useMemo(() => fn(), [fn]), {
      initialProps: stableCallback.result.current,
    });

    expect(fn1).toHaveBeenCalledTimes(1);

    const fn2 = jest.fn();
    stableCallback.rerender(fn2);
    memo.rerender(stableCallback.result.current);

    expect(fn2).toHaveBeenCalledTimes(0);
  });
});
