import * as React from 'react';
import { isFunction } from '@vkontakte/vkjs';
import { useIsomorphicLayoutEffect } from '../lib/useIsomorphicLayoutEffect';
import { warnOnce } from '../lib/warnOnce';

export interface UseEnsuredControlProps<V, E extends React.ChangeEvent<any>> {
  value?: V;
  defaultValue: V;
  disabled?: boolean | undefined;
  onChange?: (this: void, e: E) => any;
}

export function useEnsuredControl<V, E extends React.ChangeEvent<any>>({
  onChange: onChangeProp,
  disabled,
  ...props
}: UseEnsuredControlProps<V, E>): [V, (e: E) => any] {
  const [value, onChangeValue] = useCustomEnsuredControl(props);

  const onChange = React.useCallback(
    (e: E) => {
      if (disabled) {
        return;
      }

      onChangeValue(e.target.value);
      onChangeProp && onChangeProp(e);
    },
    [onChangeValue, onChangeProp, disabled],
  );

  return [value, onChange];
}

export interface UseCustomEnsuredControlProps<V> {
  value?: V;
  defaultValue: V;
  disabled?: boolean | undefined;
  onChange?: (this: void, v: V) => any;
}

const warn = warnOnce('useCustomEnsuredControl');

export function useCustomEnsuredControl<V = any>({
  value,
  defaultValue,
  disabled,
  onChange: onChangeProp,
}: UseCustomEnsuredControlProps<V>): [V, React.Dispatch<React.SetStateAction<V>>] {
  const isControlled = value !== undefined;
  const [localValue, setLocalValue] = React.useState(defaultValue);

  const preservedControlledValueRef = React.useRef<V | undefined>(undefined);
  useIsomorphicLayoutEffect(() => {
    preservedControlledValueRef.current = value;
  });

  /*
   * Для ситуации, когда nextValue это пользовательская функция,
   * и в качестве аргумента мы должны передать prevValue.
   * Обычно в качестве prevValue используется preservedControlledValueRef, но оно может быть undefined, если
   * некотролируемое value вдруг стало контролируемым
   * (value = undefined ---> value = true)
   * Если в момент вызова onChange preservedControlledValueRef ещё не был
   * обновлён в useEffect, то мы не можем использовать preservedControlledValueRef как prevValue
   * В качестве запасного варианта мы храним текущее значение value в currentFallbackValueRef, чтобы
   * использовать его вместо preservedControlledValueRef.
   */
  const currentFallbackValueRef = React.useRef<V | undefined>(value);
  currentFallbackValueRef.current = value;

  const onChange = React.useCallback(
    (nextValue: React.SetStateAction<V>) => {
      if (disabled) {
        return;
      }

      if (isFunction(nextValue)) {
        if (!isControlled) {
          setLocalValue((prevValue) => {
            const resolvedValue = nextValue(prevValue);
            if (onChangeProp) {
              onChangeProp(resolvedValue);
            }
            return resolvedValue;
          });
        } else if (onChangeProp) {
          if (process.env.NODE_ENV === 'development') {
            if (preservedControlledValueRef.current === undefined) {
              warn(
                `Похоже, что при вызове onChange с аргументом nextValue в виде коллбэка, состояние компонента было переведено из неконтролируемого ("undefined") в контролируемое. Пожалуйста, старайтесь сохранять либо неконтролируемое состояние, либо контролируемое на всём промежутке жизненного цикла компонента, чтобы получать предсказуемое значение prevValue в коллбэке nextValue((prevValue: V) => V)`,
                'error',
              );
            }
          }

          const prevValue =
            preservedControlledValueRef.current === undefined
              ? currentFallbackValueRef.current
              : preservedControlledValueRef.current;
          // В теории prevValue не может быть undefined,
          // но лучше не вызывать nextValue с таким значением
          if (prevValue !== undefined) {
            const resolvedValue = nextValue(prevValue);
            onChangeProp(resolvedValue);
          }
        }
      } else {
        if (onChangeProp) {
          onChangeProp(nextValue);
        }
        if (!isControlled) {
          setLocalValue(nextValue);
        }
      }
    },
    [disabled, isControlled, onChangeProp],
  );

  return [isControlled ? value : localValue, onChange];
}
