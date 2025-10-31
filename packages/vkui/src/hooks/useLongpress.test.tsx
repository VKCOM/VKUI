import * as React from 'react';
import { cleanup, fireEvent, render } from '@testing-library/react';
import { useLongpress } from './useLongpress';

// Мокаем модуль useDOM, чтобы управлять наличием PointerEvent
let fakeWindow: any = {};
vi.mock('../lib/dom', () => ({
  useDOM: () => ({ window: fakeWindow }),
}));

beforeEach(() => {
  vi.useFakeTimers();
  fakeWindow = {};
});

afterEach(() => {
  cleanup();
  vi.runOnlyPendingTimers();
  vi.useRealTimers();
  vi.resetAllMocks();
});

function setup(onLongPress: VoidFunction, options?: any) {
  const Test: React.FC = () => {
    const handlers = useLongpress(onLongPress, options || {});
    return <div data-testid="target" {...handlers} style={{ width: 200, height: 200 }} />;
  };
  const utils = render(<Test />);
  const target = utils.getByTestId('target');
  return { target, utils };
}

describe('useLongpress', () => {
  test('calls onLongPress for pointer events after the delay', () => {
    fakeWindow.PointerEvent = {};
    const onLongPress = vi.fn();
    const { target } = setup(onLongPress, { delay: 500 });

    React.act(() => {
      fireEvent.pointerDown(target, { pointerId: 1, clientX: 10, clientY: 10 });
    });

    React.act(() => {
      vi.advanceTimersByTime(500);
    });

    expect(onLongPress).toHaveBeenCalledTimes(1);
  });

  test('cancels activation when movement exceeds the threshold', () => {
    fakeWindow.PointerEvent = {};
    const onLongPress = vi.fn();
    const { target } = setup(onLongPress, { delay: 500, threshold: 5 });

    React.act(() => {
      fireEvent.pointerDown(target, { pointerId: 1, clientX: 10, clientY: 10 });
    });
    React.act(() => {
      // крупное смещение — превысит threshold
      fireEvent.pointerMove(target, { pointerId: 1, clientX: 30, clientY: 10 });
    });
    React.act(() => {
      vi.advanceTimersByTime(500);
    });

    expect(onLongPress).not.toHaveBeenCalled();
  });

  test("fallback: touchstart + immediate mousedown (emulation) doesn't trigger twice", () => {
    // Убираем PointerEvent — работаем в touch+mouse фолбэке
    delete fakeWindow.PointerEvent;
    const onLongPress = vi.fn();
    const { target } = setup(onLongPress, { delay: 500 });

    React.act(() => {
      // touchstart
      fireEvent.touchStart(target, {
        touches: [{ clientX: 10, clientY: 10 }],
      });
      // тут-же эмулируем mouse (browser may fire it as emulation)
      fireEvent.mouseDown(target, { clientX: 10, clientY: 10 });

      vi.advanceTimersByTime(500);
    });

    expect(onLongPress).toHaveBeenCalledTimes(1);
  });

  test('suppresses contextmenu while the timer is active when shouldPreventDefault=true', () => {
    fakeWindow.PointerEvent = {};
    const onLongPress = vi.fn();
    const { target } = setup(onLongPress, { delay: 500, shouldPreventDefault: true });

    let ctxDefaulted = false;

    React.act(() => {
      // Начинаем взаимодействие — хук добавит слушатель, который вызывает preventDefault
      fireEvent.pointerDown(target, { pointerId: 1, clientX: 10, clientY: 10 });

      // Добавляем вспомогательный слушатель, чтобы прочитать значение defaultPrevented
      const reader = (e: Event) => {
        ctxDefaulted = e.defaultPrevented;
      };
      target.addEventListener('contextmenu', reader);

      // Триггерим contextmenu и проверяем, что уже есть preventDefault
      fireEvent.contextMenu(target);

      // Убираем вспомогательный слушатель
      target.removeEventListener('contextmenu', reader);
    });

    expect(ctxDefaulted).toBe(true);

    // Завершаем взаимодействие — слушатель должен удалиться
    React.act(() => {
      fireEvent.pointerUp(target, { pointerId: 1 });
    });

    // Теперь contextmenu не должно быть предотвращено
    let ctxDefaultedAfter = false;
    const reader2 = (e: Event) => {
      ctxDefaultedAfter = e.defaultPrevented;
    };
    target.addEventListener('contextmenu', reader2);
    fireEvent.contextMenu(target);
    target.removeEventListener('contextmenu', reader2);

    expect(ctxDefaultedAfter).toBe(false);
  });
});
