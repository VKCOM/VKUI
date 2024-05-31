import { act, type MutableRefObject } from 'react';
import { renderHook } from '@testing-library/react';
import { noop } from '@vkontakte/vkjs';
import * as libDOM from '../lib/dom';
import { useDocumentVisibilityState } from './useDocumentVisibilityState';

jest.mock('../lib/dom', () => {
  return {
    __esModule: true,
    ...jest.requireActual('../lib/dom'),
  };
});

describe(useDocumentVisibilityState, () => {
  afterEach(jest.restoreAllMocks);

  it('should return true if document not exist', () => {
    jest.spyOn(libDOM, 'useDOM').mockImplementation(() => ({
      window: undefined,
      document: undefined,
    }));
    const { result } = renderHook(() => useDocumentVisibilityState());
    expect(result.current).toBeTruthy();
  });

  it.each([false, true])('should return %s of document.visibilityState is %s', (prop) => {
    mockDocumentVisibilityChange(prop);
    const { result } = renderHook(() => useDocumentVisibilityState());
    expect(result.current).toBe(prop);
  });

  it.each([false, true])('should listen visibility change if turnOn is %s', (turnOn) => {
    const prev = true;
    const next = false;
    mockDocumentVisibilityChange(prev);
    const handler: MutableRefObject<VoidFunction> = { current: noop };
    mockDocumentVisibilityChangeListener(handler);
    const { result } = renderHook(() => useDocumentVisibilityState(turnOn));

    expect(result.current).toBe(prev);

    mockDocumentVisibilityChange(next);
    act(handler.current);

    expect(result.current).toBe(turnOn ? next : prev);
  });
});

function mockDocumentVisibilityChange(value: boolean) {
  Object.defineProperty(document, 'visibilityState', {
    value,
    writable: true,
  });
}

function mockDocumentVisibilityChangeListener(handler: MutableRefObject<VoidFunction>) {
  Object.defineProperty(document, 'addEventListener', {
    value(_: string, listener: VoidFunction) {
      handler.current = listener;
    },
    writable: true,
  });
}
