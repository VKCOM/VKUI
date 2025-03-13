import { act, renderHook } from '@testing-library/react';
import { useMergedState } from './useMergedState';

describe('useMergedState', () => {
  // Тестируем неконтролируемый режим
  it('работает в неконтролируемом режиме с defaultStateValue', () => {
    const { result } = renderHook(() => useMergedState('default', {}));

    expect(result.current.value).toBe('default');

    act(() => {
      result.current.updateValue('new value');
    });

    expect(result.current.value).toBe('new value');
    expect(result.current.getLastUpdatedValue()).toBe('new value');
  });

  // Тестируем неконтролируемый режим с defaultValue
  it('работает в неконтролируемом режиме с defaultValue', () => {
    const { result } = renderHook(() => useMergedState('default', { defaultValue: 'initial' }));

    expect(result.current.value).toBe('initial');

    act(() => {
      result.current.updateValue('new value');
    });

    expect(result.current.value).toBe('new value');
  });

  // Тестируем контролируемый режим
  it('работает в контролируемом режиме', () => {
    const onChange = jest.fn();
    const { result, rerender } = renderHook((props) => useMergedState('default', props), {
      initialProps: { value: 'controlled', onChange },
    });

    expect(result.current.value).toBe('controlled');

    act(() => {
      result.current.updateValue('new value');
    });

    // В контролируемом режиме значение не должно измениться
    expect(result.current.value).toBe('controlled');
    // Но onChange должен быть вызван
    expect(onChange).toHaveBeenCalledWith('new value');

    // Проверяем обновление через пропсы
    rerender({ value: 'updated from props', onChange });
    expect(result.current.value).toBe('updated from props');
    expect(result.current.getLastUpdatedValue()).toBe('updated from props');
  });

  // Тестируем прямое обновление внутреннего состояния
  it('позволяет напрямую обновлять внутреннее состояние', () => {
    const { result } = renderHook(() => useMergedState('default', {}));

    act(() => {
      result.current.setInternalValue('direct update');
    });

    expect(result.current.value).toBe('direct update');
  });

  // Тестируем приоритет значений
  it('соблюдает приоритет значений (value > defaultValue > defaultStateValue)', () => {
    const { result } = renderHook(() =>
      useMergedState('default', {
        value: 'controlled',
        defaultValue: 'initial',
      }),
    );

    expect(result.current.value).toBe('controlled');
  });

  // Тестируем переключение между контролируемым и неконтролируемым режимами
  it('корректно обрабатывает переключение между режимами', () => {
    const { result, rerender } = renderHook((props) => useMergedState('default', props), {
      initialProps: {},
    });

    expect(result.current.value).toBe('default');

    // Переключаем в контролируемый режим
    rerender({ value: 'controlled' });
    expect(result.current.value).toBe('controlled');

    // Переключаем обратно в неконтролируемый режим
    rerender({});
    expect(result.current.value).toBe('controlled');
  });
});
