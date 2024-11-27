import * as React from 'react';
import { renderHook } from '@testing-library/react';
import { useStateWithPrev } from './useStateWithPrev';

describe(useStateWithPrev, () => {
  it('get previous value', () => {
    const renderCounter = jest.fn();

    const { result } = renderHook(() => {
      const [[state, prevState], setState] = useStateWithPrev(3);

      renderCounter();

      return {
        state,
        prevState,
        setState,
      };
    });

    expect(result.current.prevState).toEqual(undefined);
    expect(result.current.state).toEqual(3);

    let prevRenderSetState = result.current.setState;

    React.act(() => {
      result.current.setState(6);
    });
    expect(result.current.prevState).toEqual(3);
    expect(result.current.state).toEqual(6);
    expect(result.current.setState).toStrictEqual(prevRenderSetState);

    React.act(() => {
      result.current.setState((value) => value + 3);
    });
    expect(result.current.prevState).toEqual(6);
    expect(result.current.state).toEqual(9);
    expect(result.current.setState).toStrictEqual(prevRenderSetState);

    expect(renderCounter).toHaveBeenCalledTimes(3);
  });
  it('initialState is function', () => {
    const renderCounter = jest.fn();

    const { result } = renderHook(() => {
      const [[state, prevState], setState] = useStateWithPrev(() => 3);

      renderCounter();

      return {
        state,
        prevState,
        setState,
      };
    });

    expect(result.current.prevState).toEqual(undefined);
    expect(result.current.state).toEqual(3);
  });
});
