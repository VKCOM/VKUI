import * as React from 'react';
import { isFunction } from '@vkontakte/vkjs';
import { useIsomorphicLayoutEffect } from '../lib/useIsomorphicLayoutEffect';

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

/*
 * prevState может быть undefined, если
 * некотролируемое value вдруг стало контролируемым
 * (value = undefined ---> value = true)
 * Если в этот момент был вызван onChange и preservedControlledValueRef ещё не был
 * обновлён, то мы не можем доверять предыдующему значению (prevValue)
 * */
type SetStateAction<V> = V | ((prevState: V | undefined) => V);

export function useCustomEnsuredControl<V = any>({
  value,
  defaultValue,
  disabled,
  onChange: onChangeProp,
}: UseCustomEnsuredControlProps<V>): [V, React.Dispatch<SetStateAction<V>>] {
  const isControlled = value !== undefined;
  const [localValue, setLocalValue] = React.useState(defaultValue);
  const preservedControlledValueRef = React.useRef<V | undefined>();

  useIsomorphicLayoutEffect(() => {
    preservedControlledValueRef.current = value;
  });

  const onChange = React.useCallback(
    (nextValue: SetStateAction<V>) => {
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
          const resolvedValue = nextValue(preservedControlledValueRef.current);
          onChangeProp(resolvedValue);
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
