import { act, renderHook } from '@testing-library/react';
import { getMergedSameEventsByProps } from './getMergedSameEventsByProps';

const getMockedArgs = () => ({
  mainProps: {
    someIntValue: 1,
    onCallCommonDefinedFn: jest.fn(
      (event: { stopPropagation?: boolean }) => event?.stopPropagation,
    ),
    onCallCommonUndefinedFn: jest.fn(),
    onCallDefinedFn: jest.fn(),
    onCallUndefinedFn: undefined,
  },
  secondProps: {
    someIntValue: 1,
    someBoolValue: false,
    onCallCommonDefinedFn: jest.fn((event) => {
      if (event) {
        event.stopPropagation = true;
      }
    }),
    onCallCommonUndefinedFn: undefined,
    onCallOnlyInPropsFn: jest.fn(),
  },
});

describe(getMergedSameEventsByProps, () => {
  it('should call the same functions that correspond to the mainProps', () => {
    const { mainProps: mainProps, secondProps: props } = getMockedArgs();
    const { result } = renderHook(() => getMergedSameEventsByProps(mainProps, props));

    act(() => {
      if (result.current.onCallCommonDefinedFn) {
        result.current.onCallCommonDefinedFn({});
      }
    });

    expect(props.onCallCommonDefinedFn).toHaveBeenCalledTimes(1);
    expect(mainProps.onCallCommonDefinedFn).toHaveBeenCalledTimes(1);
  });

  it('should ignore undefined functions and not function props', () => {
    const { mainProps: mainProps, secondProps: props } = getMockedArgs();
    const { result } = renderHook(() => getMergedSameEventsByProps(mainProps, props));

    expect(mainProps.onCallUndefinedFn).toBeUndefined();
    expect(props.onCallCommonUndefinedFn).toBeUndefined();
    expect(props).not.toHaveProperty('onCallDefinedFn');
    expect(props).not.toHaveProperty('onCallUndefinedFn');

    act(() => {
      if (result.current.onCallDefinedFn) {
        result.current.onCallDefinedFn();
      }
      if (result.current.onCallCommonUndefinedFn) {
        result.current.onCallCommonUndefinedFn();
      }
    });

    expect(result.current).not.toHaveProperty('someIntValue');
    expect(mainProps.onCallDefinedFn).toHaveBeenCalledTimes(0);
    expect(mainProps.onCallCommonUndefinedFn).toHaveBeenCalledTimes(0);
  });

  it('should ignore not exist in mainProps function', () => {
    const { mainProps: mainProps, secondProps: props } = getMockedArgs();
    const { result } = renderHook(() => getMergedSameEventsByProps(mainProps, props));

    act(() => {
      if (result.current.onCallCommonDefinedFn) {
        result.current.onCallCommonDefinedFn({});
      }
    });

    expect(props.onCallCommonDefinedFn).toHaveBeenCalledTimes(1);
  });

  it('should calls function by props first', () => {
    const { mainProps: mainProps, secondProps: props } = getMockedArgs();
    const { result } = renderHook(() => getMergedSameEventsByProps(mainProps, props));

    act(() => {
      if (result.current.onCallCommonDefinedFn) {
        result.current.onCallCommonDefinedFn({ stopPropagation: false });
      }
    });

    expect(mainProps.onCallCommonDefinedFn).toHaveReturnedWith(true);
    expect(props.onCallCommonDefinedFn).toHaveBeenCalledWith({ stopPropagation: true });
  });
});
